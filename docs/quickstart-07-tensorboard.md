# Open tensorboard locally in vscode

In this quickstart, we will run a tensorboard service locally in AI Tools and view the model graph. 

## Prerequisites

Before you begin, ensure you [set python path properly in vscode properly](https://code.visualstudio.com/docs/python/environments) and have already installed following packages in python:

### Google TensorFlow 

Install tensorflow in the python path with pip

```cmd
pip install tensorflow
```

or if you have an Nvidia GPU

```cmd
pip install tensorflow-gpu
```

For more info, please refer to [official tensorflow doc](https://www.tensorflow.org/install/). The tensorboard is contained in tensorflow package, so you don't need to install tensorboard seperately.

### Write the log data when you training a tensorflow job.

Use ```tf.summary``` module to collect data from your training job. Here is [an example project](https://github.com/tensorflow/tensorflow/blob/r1.10/tensorflow/examples/tutorials/mnist/mnist_with_summaries.py) from tensorboard official guide.


## Select the log directory and start tensorboard from vscode command palette. 

- Open command palette from vscode by pressing Ctrl+Shift+P.

- Select **"AI: Local - Open Tensorboard"** command

![Command Palette](./media/tensorboard/tensorboard_commandPalette.png)

- A message window will pop up for selecting the log directory created by training job.

![select log directory](./media/tensorboard/tensorboard_window.png)

- After selecting the log directory, a tensorboard server will start in the vscode terminal and represent the model graph in an external browser. 

![show tensorboard in browser](./media/tensorboard/tensorboard_browser.png)