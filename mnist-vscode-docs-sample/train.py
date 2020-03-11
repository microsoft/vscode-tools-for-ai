import numpy as np
import argparse
import os
import tensorflow as tf
import sys

import gzip
import struct
from utils import prepare_data
from amlrun import get_AMLRun

# ## Download MNIST dataset
# In order to train on the MNIST dataset we will first need to download

X_train, X_test, y_train, y_test = prepare_data('mnist', './data')

training_set_size = X_train.shape[0]

n_inputs = 28 * 28
n_h1 = 300
n_h2 = 100
n_outputs = 10
learning_rate = 0.01
n_epochs = 100
batch_size = 50

with tf.name_scope('network'):
    # construct the DNN
    X = tf.placeholder(tf.float32, shape = (None, n_inputs), name = 'X')
    y = tf.placeholder(tf.int64, shape = (None), name = 'y')
    h1 = tf.layers.dense(X, n_h1, activation = tf.nn.relu, name = 'h1')
    h2 = tf.layers.dense(h1, n_h2, activation = tf.nn.relu, name = 'h2')
    output = tf.layers.dense(h2, n_outputs, name = 'output')

with tf.name_scope('train'):
    cross_entropy = tf.nn.sparse_softmax_cross_entropy_with_logits(labels = y, logits = output)
    loss = tf.reduce_mean(cross_entropy, name = 'loss')
    optimizer = tf.train.GradientDescentOptimizer(learning_rate)
    train_op = optimizer.minimize(loss)

with tf.name_scope('eval'):
    correct = tf.nn.in_top_k(output, y, 1)
    acc_op = tf.reduce_mean(tf.cast(correct, tf.float32))

init = tf.global_variables_initializer()
saver = tf.train.Saver()
run = get_AMLRun()

with tf.Session() as sess:
    init.run()
    for epoch in range(n_epochs):

        # randomly shuffle training set
        indices = np.random.permutation(training_set_size)
        X_train = X_train[indices]
        y_train = y_train[indices]

        # batch index
        b_end = batch_size
        for b_start in range(0, training_set_size, batch_size):
            # get a batch
            X_batch, y_batch = X_train[b_start: b_end], y_train[b_start: b_end]

            # update batch index for the next batch
            b_end = min(b_start + (batch_size * 2), training_set_size)

            # train
            sess.run(train_op, feed_dict = {X: X_batch, y: y_batch})

        # evaluate training set
        acc_train = acc_op.eval(feed_dict = {X: X_batch, y: y_batch})
        # evaluate validation set
        acc_val = acc_op.eval(feed_dict = {X: X_test, y: y_test})

        # Log accuracies to AML logger if using AML
        if run is not None:
            run.log('Validation Accuracy', np.float(acc_val))
            run.log('Training Accuracy', np.float(acc_train))

        # print out training and validation accuracy
        print(epoch, '-- Training accuracy:', acc_train, '\b Validation accuracy:', acc_val)
        y_hat = np.argmax(output.eval(feed_dict = {X: X_test}), axis = 1)

    os.makedirs('./outputs/model', exist_ok = True)
    saver.save(sess, './outputs/model/mnist-tf.model')
