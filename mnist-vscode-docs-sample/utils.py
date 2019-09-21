import os
import gzip
import numpy as np
import struct
import urllib
from urllib import request


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

# one-hot encode a 1-D array
def one_hot_encode(array, num_of_classes):
    return np.eye(num_of_classes)[array.reshape(-1)]

def prepare_data(dataset, data_folder):
    data_folder = os.path.join(data_folder, dataset)
    print('making data directory ' + data_folder + '...')
    os.makedirs(data_folder, exist_ok = True)

    def download_data(url, filename):
        if not os.path.isfile(filename):
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

    print('Prepared training dataset is stored here:', data_folder)

    X_train = load_data(os.path.join(data_folder, 'train-images.gz'), False) / 255.0
    X_test = load_data(os.path.join(data_folder, 'test-images.gz'), False) / 255.0

    y_train = load_data(os.path.join(data_folder, 'train-labels.gz'), True).reshape(-1)
    y_test = load_data(os.path.join(data_folder, 'test-labels.gz'), True).reshape(-1)

    print(X_train.shape, y_train.shape, X_test.shape, y_test.shape, sep = '\n')

    return X_train, X_test, y_train, y_test