# Visual Studio Code Tools for AI
Visual Studio Code Tools for AI is an extension to build, test, and deploy Deep Learning / AI solutions. It seamlessly integrates with Azure Machine Learning for robust experimentation capabilities, including but not limited to submitting data preparation and model training jobs transparently to different compute targets. Additionally, it provides support for custom metrics and run history tracking, enabling data science reproducibility and auditing. Enterprise ready collaboration, allow to securely work on project with other people.

Get started with deep learning using [Microsoft Cognitive Toolkit (CNTK)](http://www.microsoft.com/en-us/cognitive-toolkit), [Google TensorFlow](https://www.tensorflow.org), or other deep-learning frameworks today.  
 
## Features

### Develop deep learning and AI solutions across Windows and MacOS
VS Code Tools for AI is a cross-platform extension that supports deep learning frameworks including [Microsoft Cognitive Toolkit (CNTK)](http://www.microsoft.com/en-us/cognitive-toolkit), [Google TensorFlow](https://www.tensorflow.org) and more.  

Because it's an IDE we've enabled familiar code editor features like syntax highlighting, IntelliSense (auto-completion) and text auto formatting. You can interactively test your deep learning application in your local environment using step-through debugging on local variables and models. 

![deep learning ide](/media/deeplearning-ide.png)

### Find and share examples via the gallery  
Visual Studio Code Tools for AI is integrated with Azure Machine Learning to make it easy to browse through a gallery of sample experiments using CNTK, TensorFlow, MMLSpark and more. This makes it easy to learn and share with others. 

### Scale out deep learning model training and/or inferencing to the cloud
This extension makes it easy to train models on your local computer or you can submit jobs to the cloud by using our integration with Azure Machine Learning. You can submit jobs to different compute targets like Spark clusters, Azure GPU virtual machines and more  


## Exploring project samples
Visual Studio Code Tools for AI comes with a Sample Explorer via integration with Azure Machine Learning. The Sample Explorer makes it easy to discover samples and try them with only a few clicks. 

> [!TIP]
> You will need Azure Machine Learning Workbench to be installed. See instructions at [How to install Azure Machine Learning Workbench](https://docs.microsoft.com/en-us/azure/machine-learning/preview/quickstart-installation)  

To open the explorer, do as follow:   
1. Open the command palette (View > **Command Palette** or **Ctrl+Shift+P**).
2. Enter "ML Sample". 
3. You get a recommendation for "Machine Learning: Open Azure Machine Learning Samples Explorer", select it and press enter. 


![sample explorer](/media/sampleexplorer.png)

## Creating a new project from the sample explorer 
You can browse different samples and get more information about them. Let's browse until finding the "Classifying Iris" sample.

 
To create a new project based on this sample do the following:
1. Click install button on the project sample, notice the commands being prompted, walking you through the steps of creating a new project. 
2. **Enter a name** for the project, for example "Iris".
3. **Enter a folder** to create your project and press enter. 
4. **Select an existing workspace** and press enter.

The project will then be created.

> [!TIP]
> You will need to be logged-in to access your Azure resource. From the embedded terminal enter "az login" and follow the instruction. 

## Submitting a job to train your model locally or in the cloud
Now that the new project is open in Visual Studio Code, you can submit a model training job to your different compute targets (local or VM with docker).

Visual Studio Code Tools for AI provides multiple ways to submit a model training job. 
1. Context Menu (right click) - **Machine Learning: Submit Job**.
2. From the command palette: "Machine Learning: Submit Job".
3. Alternatively, you can run the command directly using Azure CLI, Machine Learning Commands, using the embedded terminal.

![submit job](/media/submitjob.png)

Open iris_sklearn.py, right click and select **Machine Learning: Submit Job**.
1. Select your platform: "Azure Machine Learning".
2. Select your run-configuration: "Docker-Python."

> [!NOTE]
> If it is the first time your submit a job, you receive a message "No Machine Learning configuration found, creating...". A JSON file is opened, save it (**Ctrl+S**).

Once the job is submitted, the embedded-terminal displays the progress of the runs. 

## View recent job performance and details
Once the jobs are submitted, you can list the jobs from the run history.
1. Open the command palette (View > **Command Palette** or **Ctrl+Shift+P**).
2. Enter "**AI List**."
3. You get a recommendation for "AI: List Jobs", select and press enter.
4. Select the platform "Azure Machine Learning."

The Job List View opens and displays all the runs and some related information.

![add data source](/media/runhistory-list.png)

To view the results of a job, click on the **job ID** link to see detailed information. 

# Using
- First, install [Visual Studio Code](http://code.visualstudio.com/) then install **Tools for AI** extension by pressing **F1** or **ctrl+shift+p** to open command palette, select **Install Extension** and type **tools for AI**. 

# Commands
The extension provides several commands in the Command Palette for working with deep learning and machine learning:
- **AI: List Jobs**: View list of recent jobs you've submitted and their details
- **AI: Open Azure ML Sample Explorer**: Quickly get started with machine learning and deep learning experimentation by downloading sample projects you can run and modify to meet your needs 
- **AI: Azure ML - Set Subscription**:  Set your Azure Subscription to use for Azure Machine Learning experimentation 
- **AI: Azure ML - Open Terminal**: Open Azure CLI terminal to access full Azure feature set
- **AI: Add Platform Configuration**: Configure Azure Machine learning compute target

# Supported Operating Systems
Currently this extension supports the following 64-bit operating systems:
- Windows
- macOS

# Preparing your environment

Before creating deep learning applications, you will need to make sure you have the latest applicable prerequisites installed. 

- If you have an NVIDIA GPU, be sure to install the latest NVIDIA driver/CUDA/cuDNN 
- Additonally you should ensure you have installed Python and Python libraries such as NumPy/SciPy, and various deep learning frameworks such as Microsoft Cognitive Toolkit (CNTK), TensorFlow, Caffe2, MXNet, Keras, Theano, PyTorch and Chainer.

> [!NOTE]
>
> Software introduction in the following subsectons is excerpted from their homepages.

## Visual C++ Redistributable for Windows

Visual C++ Redistributable installs run-time componets of C Runtime (CRT), Standard C++,
MFC, C++ AMP, and OpenMP libraries, required by subsequent software on Windows.

Please install the latest **64-bit** Visual C++ 2015 and 2017 Redistributables from
[here](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).


## NVIDIA GPU driver, CUDA and cuDNN

### NVIDIA GPU driver

Deep learning frameworks take advantage of NVIDIA GPU to let machines learn at a speed, accuracy, and scale towards true artificial intelligence. If your computer has NVIDIA GPU cards, please visit [here](http://www.nvidia.com/Download/index.aspx) or try OS update to install the latest driver.

> [!NOTE]
>
> Recent Mac computers don't have built-in NVIDIA GPU.

### CUDA

[CUDA](https://developer.nvidia.com/cuda-zone) is a parallel computing platform and programming model invented by NVIDIA. It enables dramatic increases in computing performance by harnessing the power of the GPU. CUDA Toolkit 8.0 is required by deep learning frameworks. 

To install CUDA

- Visit this [site](https://developer.nvidia.com/cuda-80-ga2-download-archive), download CUDA and install it.
- Make sure to install the CUDA runtime libraries, and then add CUDA binary path to the %PATH% or $Path environment variable.
- On Windows, this path is "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v8.0\bin" by default.

![install CUDA on Windows](/media/install_cuda_win.png)

### cuDNN

[cuDNN](https://developer.nvidia.com/cudnn) (CUDA Deep Neural Network library) is a GPU-accelerated library of primitives for deep neural networks by NVIDIA. cuDNN v6 is required by latest deep learning frameworks.

To install cuDNN
- Visit [here](https://developer.nvidia.com/rdp/cudnn-download) to download and install the latest package.
- Ensure to add the directory containing cuDNN binary to the %PATH% or $Path environment variable.
- On Windows, you can copy cudnn64_6.dll to "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v8.0\bin".

> [!NOTE]
>
> Previous deep learning frameworks such as CNTK 2.0 and TensorFlow 1.2.1 need cuDNN v5.1.
> However, you can install multiple cuDNN versions together.


## Python

Python has been the primary programming language for deep learning applications.
**64-bit** Python distribution is required, and [Python 3.5.4](https://www.python.org/downloads/release/python-354/) is recommended for the best compatibility.

### To install Python on Windows
- We suggest to install the Python launcher for yourself only, and add Python to the %PATH% environment variable.
- Please ensure to install pip, which is the package management system to install and manage software packages written in Python.

Deep learning frameworks rely on pip for their own installation.

![install Python on Windows](/media/install_python_win.png)

Then, we need to verify whether Python 3.5 is installed correctly, and upgrade pip to the latest version by executing the following commands in a terminal:

- **Windows**
    ```cmd
    C:\Users\test>python -V
    Python 3.5.4

    C:\Users\test>pip3.5 -V
    pip 9.0.1 from c:\users\test\appdata\local\programs\python\python35\lib\site-packages (python 3.5)

    C:\Users\test>python -m pip install -U pip
    ```

- **macOS**
    ```bash
    MyMac:~ test$ python3.5 -V
    Python 3.5.4

    MyMac:~ test$ pip3.5 -V
    pip 9.0.1 from /Library/Frameworks/Python.framework/Versions/3.5/lib/python3.5/site-packages (python 3.5)

    MyMac:~ test$ python3.5 -m pip install -U pip
    ```

## Python on Visual Studio Code

Python is fully supported in Visual Studio Code through extensions.
Please visit [here](https://code.visualstudio.com/docs/languages/python) for more details.

## NumPy and SciPy

- **NumPy** is a general-purpose array-processing package designed to efficiently manipulate large multi-dimensional arrays of arbitrary records without sacrificing too much speed for small multi-dimensional arrays.

- **SciPy** (pronounced "Sigh Pie") is open-source software for mathematics, science, and engineering, depending on NumPy.

Because SciPy has no official prebuilt wheel package on Windows, you need to install both NumPy and SciPy from a third party [site](http://www.lfd.uci.edu/~gohlke/pythonlibs/).
First, download [numpy+mkl](http://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy) 1.13.1 and [scipy](http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy) 0.19.1 for Python 3.5 to a local directory.

Then, go to that directory and run the following commands in a terminal:
```cmd
pip3.5 install numpy-1.13.1+mkl-cp35-cp35m-win_amd64.whl

pip3.5 install scipy-0.19.1-cp35-cp35m-win_amd64.whl
```

Non-Windows users don't need to install NumPy and SciPy manually.
They will be automatically installed with deep learning frameworks.

## Microsoft Cognitive Toolkit (CNTK)

The [Microsoft Cognitive Toolkit](https://cntk.ai) is a unified deep-learning toolkit that describes neural networks as a series of computational steps via a directed graph. CNTK supports both Python and BrainScript programming languages.

> [!NOTE]
>
> CNTK currently does not support macOS.

To install CNTK Python package, run the following command in a terminal:
- **Windows**
    - With GPU
        ```cmd
        pip3.5 install https://cntk.ai/PythonWheel/GPU-1bit-SGD/cntk-2.2-cp35-cp35m-win_amd64.whl
        ```
    - Without GPU
         ```cmd
        pip3.5 install https://cntk.ai/PythonWheel/CPU-Only/cntk-2.2-cp35-cp35m-win_amd64.whl
        ```
- **Linux**
    - With GPU
        ```bash
        pip3.5 install https://cntk.ai/PythonWheel/GPU-1bit-SGD/cntk-2.2-cp35-cp35m-linux_x86_64.whl
        ```
    - Without GPU
        ```bash
        pip3.5 install https://cntk.ai/PythonWheel/CPU-Only/cntk-2.2-cp35-cp35m-linux_x86_64.whl
        ```

To install CNTK BrainScript package, run the following command in a terminal:
- Visit [here](https://github.com/Microsoft/CNTK/releases/tag/v2.2) to download the CPU-only or GPU with 1bit-SGD package.
    > [!NOTE]
	>
    > CNTK GPU-1bit-SGD version is licensed under a specific [1bit-SGD License](https://docs.microsoft.com/en-us/cognitive-toolkit/cntk-1bit-sgd-license) which is MORE restrictive, than the major CNTK License.

- **Windows**
    - Decompress the zip file to your home directory, e.g. "C:\Users\test".
    - Add "C:\Users\test\cntk\cntk" to the %PATH% environment variable.
    - Install Microsoft MPI from "C:\Users\test\cntk\prerequisites\MSMpiSetup.exe", which is required by CNTK.

- **Linux**
    - Decompress the zip file to your home directory "~/".
    - Add "~/cntk/cntk/bin" to the $PATH environment variable.
    - Install OpenMPI by running the following command in a terminal:
        ```bash
        sudo apt-get install libopenmpi-dev
        ```


## TensorFlow

[TensorFlow](https://www.tensorflow.org/) is an open source software library for numerical computation using data flow graphs.
Please refer to [here](https://www.tensorflow.org/install/) for detailed installation.

To install TensorFlow, run the following command in a terminal:
- With GPU
    ```bash
    pip3.5 install tensorflow-gpu==1.3.0
    ```
- Without GPU
    ```bash
    pip3.5 install tensorflow==1.3.0
    ```

> [!NOTE]
>
> As of version 1.2, TensorFlow no longer provides GPU support for macOS.

## Caffe2

[Caffe2](https://caffe2.ai/) is a lightweight, modular, and scalable deep learning framework.
Building on the original Caffe, Caffe2 is designed with expression, speed, and modularity in mind.

Currently, there's no prebuilt Caffe2 python wheel package available.

Please visit [here](https://caffe2.ai/docs/getting-started.html) to build from source code.

## MXNet

[Apache MXNet (incubating)](https://mxnet.incubator.apache.org/) is a deep learning framework designed for both efficiency and flexibility.
It allows you to **mix** [symbolic and imperative programming](http://mxnet.io/architecture/index.html#deep-learning-system-design-concepts) to maximize efficiency and productivity.

To install MXNet, run the following command in a terminal:
- With GPU
    ```bash
    pip3.5 install mxnet-cu80==0.11.0
    ```
- Without GPU
    ```bash
    pip3.5 install mxnet==0.11.0
    ```

## Keras

[Keras](https://keras.io/) is a high-level neural networks API, written in Python and capable of running on top of CNTK, TensorFlow or Theano. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research.

To install Keras, please run the following command in a terminal:
```bash
pip3.5 install Keras==2.0.8
```

## Theano

[Theano](http://deeplearning.net/software/theano/) is a Python library that allows you to define, optimize, and evaluate mathematical expressions involving multi-dimensional arrays efficiently.

To install Theano, please run the following command in a terminal:
```bash
pip3.5 install Theano==0.9.0
```

## PyTorch

[PyTorch](http://pytorch.org/) is a python package that provides two high-level features:
- Tensor computation (like numpy) with strong GPU acceleration
- Deep Neural Networks built on a tape-based autograd system

To install PyTorch, please run the following command in a terminal:

- **Windows**
    - There is no official wheel package yet. You may download a third-party [Anaconda PyTorch package](https://anaconda.org/peterjc123/pytorch/0.2.1/download/win-64/pytorch-0.2.1-py35h24644ff_0.2.1cu80.tar.bz2).
    - Decompress it to your home directory, e.g. "C:\Users\test\pytorch".
    - Add "C:\Users\test\pytorch\Lib\site-packages" to the %PYTHONPATH% environment variable.

- **macOS**
    ```bash
    pip3.5 install http://download.pytorch.org/whl/torch-0.2.0.post3-cp35-cp35m-macosx_10_7_x86_64.whl
    ```
    > [!NOTE]
	>
    > macOS binaries dont support CUDA, install from source if CUDA is needed

- **Linux**
    ```bash
    pip3.5 install http://download.pytorch.org/whl/cu80/torch-0.2.0.post3-cp35-cp35m-manylinux1_x86_64.whl
    ```
    > [!NOTE]
	>
    > This single package supports both GPU and CPU.

Finally, install torchvision on non-Windows:
```bash
pip3.5 install torchvision
```

## Chainer

[Chainer](https://chainer.org/) is a Python-based deep learning framework aiming at flexibility.
It provides automatic differentiation APIs based on the **define-by-run approach** (a.k.a. dynamic computational graphs) as well as object-oriented high-level APIs to build and train neural networks.

To enable CUDA support, install [CuPy](https://github.com/cupy/cupy):
```bash
pip3.5 install cupy
```

> [!NOTE]
>
> On Windows, you need [Microsoft Visual Studio](https://www.visualstudio.com/)
or [Microsoft Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools)
to compile CuPy.

To install Chainer, please run the following command in a terminal:
```bash
pip3.5 install chainer==2.1.0
```

# Support
Support for this extension is provided on our [GitHub Issue Tracker](http://github.com/Microsoft/vscode-tools-for-ai/issues). You can submit a bug report, a feature suggestion or participate in discussions.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct]. For more information see the [Code of Conduct FAQ] or contact [opencode@microsoft.com] with any additional questions or comments.

## Privacy Statement
The [Microsoft Enterprise and Developer Privacy Statement] describes the privacy statement of this software.

## License
This extension is [licensed under the MIT License] and subject to the terms of the [End User License Agreement](EULA.md). 

[Microsoft Enterprise and Developer Privacy Statement]:https://go.microsoft.com/fwlink/?LinkId=786907&lang=en7
[licensed under the MIT License]: /LICENSE
[Microsoft Open Source Code of Conduct]:https://opensource.microsoft.com/codeofconduct/
[Code of Conduct FAQ]:https://opensource.microsoft.com/codeofconduct/faq/
[opencode@microsoft.com]:mailto:opencode@microsoft.com
