## DEPRECATED - This extension has been re-designed to focus on providing a great experience working with the Azure Machine Learning service. Please check out the latest doc in the [parent folder](..).

# Visual Studio Code Tools for AI
Visual Studio Code Tools for AI is an extension to build, test, and deploy machine learning and deep learning models. It seamlessly integrates with Azure Machine Learning for robust experimentation capabilities, including but not limited to running data preparation and model training experiments both locally and on remote compute targets.

Get started with deep learning using [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org), or other machine learning or deep-learning frameworks today.  

**Training a model using Azure Machine Learning**
![compute](./docs/media/runexperiment.gif)

## Quick Links

**Getting Started**

- [Release notes](/docs/releasenotes.md)
- [Installation](/docs/installation.md)
- [Start page](/docs/startPage.md)
- [Prepare development environment](/docs/prepare-localmachine.md)
- [Deep learning sample recipes](https://github.com/Microsoft/samples-for-ai)
- [View deep learning document in VS Code](/docs/docviewer.md)
- [Frequently Asked Questions](/docs/faq.md)

**Using Azure Machine Learning**
- [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- [Create and manage Azure compute targets](/docs/manage-compute-aml-vscode.md)
- [Train and tune models](/docs/train-models-aml-vscode.md)
- [Deploy and manage models](/docs/deploy-models-aml-vscode.md)
  
**Quickstarts**

- [TensorFlow + Python](/docs/tensorflow-local.md)
- [Train models in the cloud](/docs/quickstart-01-submitting-training-jobs.md)
- [Manage job history](/docs/quickstart-02-job-view.md)
- [Manage storage](/docs/quickstart-03-storage-explorer.md)
- [Train models in PAI](/docs/quickstart-05-pai.md) 
- [Open Jupyter notebooks in VS Code](/docs/quickstart-06-jupyter.md)
- [Run TensorBoard locally in VS Code](/docs/quickstart-07-tensorboard.md)

## Supported Operating Systems
Currently this extension supports the following 64-bit operating systems:
- Windows
- macOS

## Features

### Develop deep learning and AI solutions across Windows and MacOS
VS Code Tools for AI is a cross-platform extension that supports deep learning frameworks including [Microsoft Cognitive Toolkit (CNTK)](http://www.microsoft.com/en-us/cognitive-toolkit), [Google TensorFlow](https://www.tensorflow.org) and more.  

Because it's an IDE we've enabled familiar code editor features like syntax highlighting, IntelliSense (auto-completion) and text auto formatting. You can interactively test your deep learning application in your local environment using step-through debugging on local variables and models. 

![deep learning ide](/docs/media/deeplearning-ide.png)

### Get started quickly with the Start Page  
Tools for AI Start Page is built to accelerate your start in AI world with 
- Easy instructions to guide you to build your first AI application within 3 steps;
- AI inferencing/training samples and AI related learning materials for you to quickly learn and build your own AI solutions. 

![sample explorer](/docs/media/homepage/startPage.png)

[Learn more about Start Page](/docs/startPage.md)  

### View deep learning document in VS Code
VS Code Tools for AI is shipped with document for some common deep learning frameworks. You can manage and browse the document in VS Code and search for API reference in editor window through simple command.

![doc viewer](/docs/media/docviewer/docviewer.png)


### Find and share examples via the gallery  
Visual Studio Code Tools for AI is integrated with Azure Machine Learning to make it easy to browse through a gallery of sample experiments using CNTK, TensorFlow, MMLSpark and more. This makes it easy to learn and share with others. 

[Learn more about creating projects from the sample gallery](/docs/quickstart-00-project-from-azuremachinelearning-gallery.md)

![AML sample explorer](/docs/media/aml-samples/sampleexplorer.png)

### Scale out deep learning model training and/or inferencing to the cloud
This extension makes it easy to train models on your local computer or you can submit jobs to the cloud by using our integration with Azure Machine Learning. You can submit jobs to different compute targets like Spark clusters, Azure GPU virtual machines and more. Besides, [Open Platform for AI (PAI)](https://github.com/Microsoft/pai) is also supported.

[Learn more about training models in the cloud](/docs/quickstart-01-submitting-training-jobs.md)
 
![submit job](/docs/media/job/submit-target.png)

### View recent job performance and details
Once the jobs are submitted, you can list the jobs, check the job details and download models, logs, etc. from the run history.

[Learn more about job history](/docs/quickstart-02-job-view.md)

![Job View](/docs/media/job/job-view.png)

### Manage storage on compute targets
The extension provides a storage explorer which enables you to manage your files on remote machines, PAI clusters, etc. You can create/delete folders, upload/download files within the VS Code easily.

[Learn more about storage explorer](/docs/quickstart-03-storage-explorer.md)

![Storage View](/docs/media/storage/StorageExplorer.png)

### Jupyter notebook server manager
The extension implements a built-in Jupyter server notebook server manager, which enables you to open a Jupyter notebook inside VS Code for viewing and editing.

[Learn more about Jupyter notebook in VS Code](/docs/quickstart-06-jupyter.md)

![Jupyter View](/docs/media/jupyter/jupyter_webview.png)

### Run TensorBoard locally in VS Code

The extension enables you to run TensorBoard in VS Code and view the model graph in an external browser. You could shutdown the TensorBoard server anytime in the VS Code terminal.

[Learn more about TensorBoard](/docs/quickstart-07-tensorboard.md)

![TensorBoard View](/docs/media/tensorboard/tensorboard_browser.png)

## Commands
The extension provides several commands in the Command Palette for working with deep learning and machine learning:
- **AI: Azure - Login**:  Login to Azure to access resources used by Azure ML.
- **AI: Azure - Set Subscription**:  Set your Azure Subscription to use for Azure ML.
- **AI: Open Azure ML Sample Explorer**: Quickly get started with machine learning and deep learning experimentation by downloading sample projects you can run and modify to meet your needs.
- **AI: Azure ML - Open Terminal**: Open Azure ML CLI terminal to access full feature set.
- **AI: Add Platform Configuration**: Configure compute target (remote VM, PAI cluster) used for training job.
- **AI: Edit Platform Configuration**: Modify compute target settings.
- **AI: Remove Platform Configuration**: Remove a compute target configuration.
- **AI: Submit Job**: Submit a training job to remote Linux VMs, PAI clusters etc.
- **AI: Edit Job Properties**: Modify job settings.
- **AI: List Jobs**: View list of recent jobs you've submitted and their details.
- **AI: Open Storage Explorer**: View and manage storage on remote compute targets.
- **AI: Local - Run TensorBoard**: Run TensorBoard locally.

## Support
Support for this extension is provided on our [GitHub Issue Tracker](http://github.com/Microsoft/vscode-tools-for-ai/issues). You can submit a bug report, a feature suggestion or participate in discussions.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct]. For more information see the [Code of Conduct FAQ] or contact [opencode@microsoft.com] with any additional questions or comments.

## Privacy Statement
The [Microsoft Enterprise and Developer Privacy Statement] describes the privacy statement of this software.

## License
This extension is subject to the terms of the [End User License Agreement]. 

[Microsoft Enterprise and Developer Privacy Statement]:https://go.microsoft.com/fwlink/?LinkId=786907&lang=en7
[Microsoft Open Source Code of Conduct]:https://opensource.microsoft.com/codeofconduct/
[Code of Conduct FAQ]:https://opensource.microsoft.com/codeofconduct/faq/
[opencode@microsoft.com]:mailto:opencode@microsoft.com
[End User License Agreement]:https://www.visualstudio.com/license-terms/mlt552233/