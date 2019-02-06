# Install Azure Machine Learning for Visual Studio Code

## 0. Pre-requisites: install Visual Studio Code
Please first install Visual Studio Code by following the [Visual Studio Code installation instructions](https://code.visualstudio.com/docs/setup/setup-overview).

## 1. Install the Azure Machine Learning for Visual Studio Code extension
There are 3 ways to install:

### 1. From within Visual Studio Code

1. Bring up the **Extensions** view in VS Code by clicking on the Extensions icon in the **Activity Bar** on the side of VS Code or the **View > Extensions** command (**Ctrl+Shift+X**).

![extensions](./media/installation/extensions.png)

2. **Search** in upper right-hand corner for "Azure Machine Learning".

![extensions](./media/installation/extensions-search.png)

3. Click the **Intall** button and after a successful install, you'll see an **Reload** button which will prompt you to restart VS Code to enable the extension.

### 2. Install from [Visual Studio Code MarketPlace]
1. Go to [Visual Studio Code MarketPlace] and search for "Azure Machine Learning" in the search box.

![extensions](./media/installation/extensions-search-on-marketplace.png)

2. Click on the **"Azure Machine Learning"** item to navigate to the item detail page.

![extensions](./media/installation/marketplace-install.png)

3. Click **Install**, a dialog will pop up to confirm whether VS Code is installed, install VS Code if you do not have it installed.

4. Click the **Install** button and after a successful install, you'll see an **Reload** button which will prompt you to restart VS Code to enable the extension.

### 3. Download the installer file from [Visual Studio Code MarketPlace]
If you prefer an offline install or install at a later time, follow these steps.

1. Go to [Visual Studio Code MarketPlace] and search for "Azure Machine Learning" in the search box.

2. Click **"Download Extension"** to download the extension package to your local disk.

![extensions](./media/installation/extensions-download.png)

3. In Visual Studio Code, choose **EXTENSIONS:Install from VSIX...** and open the vsix file you just downloaded to install it.
You can also enter "vsix" in **Command Palette** (**Ctrl+Shift+P**) to execute this command.

![extensions](./media/installation/extensions-install.png)

[Visual Studio Code MarketPlace]:https://marketplace.visualstudio.com/vscode

## 2. Install the Python extension for Visual Studio Code

This extension automatically installs the [Microsoft Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) as a dependency to provide a better experience working with Python. 

- To learn more about Python in Visual Studio Code [see the docs](https://code.visualstudio.com/docs/languages/python)
- For a walkthrough of editing, running, and debugging code, see the [Python Hello World Tutorial](https://code.visualstudio.com/docs/python/python-tutorial)

> **Tip**: Check out the [IntelliCode extension for VS Code (preview)](https://go.microsoft.com/fwlink/?linkid=2006060). IntelliCode provides a set of AI-assisted capabilities for IntelliSense in Python, such as inferring the most relevant auto-completions based on the current code context.

## 3. Azure Machine Learning SDK Installation
1. In the bottom-right corner of the window, a notification will appear indicating that the Azure ML SDK is being automatically installed.    A local private Python environment is created that has the Visual Studio Code prerequisites for working with Azure Machine Learning.

   ![install Azure Machine Learning SDK for Python](./media/runtimedependencies.PNG)


