import numpy as np
import os
import urllib
from urllib import request
import matplotlib
import matplotlib.pyplot as plt
import gzip
import struct
import tensorflow as tf

# ## Download MNIST dataset
# In order to train on the MNIST dataset we will first need to download it from Yan LeCun's web site directly and save them in a `data` folder locally.

print('making data directory ...')
os.makedirs('./data/mnist', exist_ok = True)

def download_data(url, filename):
    if not tf.gfile.Exists(filename):
        print('downloading ' + url)
        urllib.request.urlretrieve(url, filename = filename)
    else:
        print(filename + ' exists, using it')

print('downloading training data ...')
download_data('http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz', './data/mnist/train-images.gz')
download_data('http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz', './data/mnist/train-labels.gz')
print('done.')
print('downloading testing data ...')
download_data('http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz', './data/mnist/test-images.gz')
download_data('http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz', './data/mnist/test-labels.gz')
print('done.')


# load compressed MNIST gz files and return numpy arrays
def load_data(filename, label = False):
    with gzip.open(filename) as gz:
        magic_number = struct.unpack('I', gz.read(4))
        n_items = struct.unpack('>I', gz.read(4))
        if not label:
            n_rows = struct.unpack('>I', gz.read(4))[0]
            n_cols = struct.unpack('>I', gz.read(4))[0]
            res = np.frombuffer(gz.read(n_items[0] * n_rows * n_cols), dtype = np.uint8)
            res = res.reshape(n_items[0], n_rows * n_cols)
        else:
            res = np.frombuffer(gz.read(n_items[0]), dtype = np.uint8)
            res = res.reshape(n_items[0], 1)
    return res

# ## Show some sample images

X_train = load_data('./data/mnist/train-images.gz', False) / 255.0
y_train = load_data('./data/mnist/train-labels.gz', True).reshape(-1)

X_test = load_data('./data/mnist/test-images.gz', False) / 255.0
y_test = load_data('./data/mnist/test-labels.gz', True).reshape(-1)

print('display sample data ...')
count = 0
sample_size = 30
plt.figure(figsize = (16, 6))
for i in np.random.permutation(X_train.shape[0])[:sample_size]:
    count = count + 1
    plt.subplot(1, sample_size, count)
    plt.axhline('')
    plt.axvline('')
    plt.text(x = 10, y = -10, s = y_train[i], fontsize = 18)
    plt.imshow(X_train[i].reshape(28, 28), cmap = plt.cm.Greys)
plt.show()




