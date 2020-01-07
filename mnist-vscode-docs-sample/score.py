import json
import numpy as np
import os
import tensorflow as tf

#from azureml.assets.persistence.persistence import get_model_path
from azureml.core.model import Model

def init():
    global X, output, sess
    tf.reset_default_graph()
    # retreive the local path to the model using the model name
    model_root = Model.get_model_path('MNIST-TensorFlow-model')
    saver = tf.train.import_meta_graph(os.path.join(model_root, 'mnist-tf.model.meta'))
    X = tf.get_default_graph().get_tensor_by_name("network/X:0")
    output = tf.get_default_graph().get_tensor_by_name("network/output/MatMul:0")
    
    sess = tf.Session()
    saver.restore(sess, os.path.join(model_root, 'mnist-tf.model'))

def run(raw_data):
    data = np.array(json.loads(raw_data)['data'])
    # make prediction
    out = output.eval(session = sess, feed_dict = {X: data})
    y_hat = np.argmax(out, axis = 1)
    return json.dumps(y_hat.tolist())