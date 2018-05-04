# Visual Studio Code Tools for AI
Visual Studio Code Tools for AI is an extension to build, test, and deploy Deep Learning / AI solutions. It seamlessly integrates with Azure Machine Learning for robust experimentation capabilities, including but not limited to submitting data preparation and model training jobs transparently to different compute targets. Additionally, it provides support for custom metrics and run history tracking, enabling data science reproducibility and auditing. Enterprise ready collaboration, allow to securely work on project with other people.

Get started with deep learning using [Microsoft Cognitive Toolkit (CNTK)](http://www.microsoft.com/en-us/cognitive-toolkit), [Google TensorFlow](https://www.tensorflow.org), or other deep-learning frameworks today.  

## Quick Links

**Getting Started**

- [Installation](/docs/installation.md)
- [Prepare development environment](/docs/prepare-localmachine.md)
- [Deep learning sample recipes](https://github.com/Microsoft/samples-for-ai)
- [Frequently Asked Questions](/docs/faq.md)

**Quickstarts**

- [Tensorflow + Python](/docs/tensorflow-local.md)
- [Create AI project from samples gallery](/docs/quickstart-00-project-from-azuremachinelearning-gallery.md)
- [Training models in the cloud](/docs/quickstart-01-submitting-training-jobs.md)
- [Manage job history](/docs/quickstart-02-job-view.md)
- [Manage storage](/docs/quickstart-03-storage-explorer.md)
- [Train MNIST using TensorFlow in Azure Batch AI](/docs/quickstart-04-train-azure-batchai.md) 

## Supported Operating Systems
Currently this extension supports the following 64-bit operating systems:
- Windows
- macOS

## Features

### Develop deep learning and AI solutions across Windows and MacOS
VS Code Tools for AI is a cross-platform extension that supports deep learning frameworks including [Microsoft Cognitive Toolkit (CNTK)](http://www.microsoft.com/en-us/cognitive-toolkit), [Google TensorFlow](https://www.tensorflow.org) and more.  

Because it's an IDE we've enabled familiar code editor features like syntax highlighting, IntelliSense (auto-completion) and text auto formatting. You can interactively test your deep learning application in your local environment using step-through debugging on local variables and models. 

![deep learning ide](/docs/media/deeplearning-ide.png)

### Find and share examples via the gallery  
Visual Studio Code Tools for AI is integrated with Azure Machine Learning to make it easy to browse through a gallery of sample experiments using CNTK, TensorFlow, MMLSpark and more. This makes it easy to learn and share with others. 

[Learn more about creating projects from the sample gallery](/docs/quickstart-00-project-from-azuremachinelearning-gallery.md)

![sample explorer](/docs/media/sampleexplorer.png)

### Scale out deep learning model training and/or inferencing to the cloud
This extension makes it easy to train models on your local computer or you can submit jobs to the cloud by using our integration with Azure Machine Learning. You can submit jobs to different compute targets like Spark clusters, Azure GPU virtual machines and more. Besides, [Azure Batch](https://azure.microsoft.com/en-us/services/batch/) and [Open Platform for AI (PAI)](https://github.com/Microsoft/pai) are also supported.

[Learn more about training models in the cloud](/docs/quickstart-01-submitting-training-jobs.md)
 
![submit job](/docs/media/submitjob_targets.png)

### View recent job performance and details
Once the jobs are submitted, you can list the jobs, check the job details and download models, logs, etc. from the run history.

[Learn more about job history](/docs/quickstart-02-job-view.md)

![Job View](/docs/media/JobView.png)

### Manage storage on compute targets
The extension provides a storage explorer which enables you to manage your files on remote machines, Azure Batch clusters, PAI clusters, etc. You can create/delete folders, upload/download files within the VS Code easily.

[Learn more about storage explorer](/docs/quickstart-03-storage-explorer.md)

![Job View](/docs/media/StorageExplorer.png)

## Commands
The extension provides several commands in the Command Palette for working with deep learning and machine learning:
- **AI: List Jobs**: View list of recent jobs you've submitted and their details
- **AI: Open Azure ML Sample Explorer**: Quickly get started with machine learning and deep learning experimentation by downloading sample projects you can run and modify to meet your needs 
- **AI: Azure ML - Set Subscription**:  Set your Azure Subscription to use for Azure Machine Learning experimentation 
- **AI: Azure ML - Open Terminal**: Open Azure CLI terminal to access full Azure feature set
- **AI: Add Platform Configuration**: Configure Azure Machine learning compute target

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