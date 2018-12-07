# Azure Machine Learning for Visual Studio Code
Azure Machine Learning for Visual Studio Code, previously called Visual Studio Code Tools for AI**, is an extension to easily build, train, and deploy machine learning models to the cloud or the edge with [Azure Machine Learning service](https://azure.microsoft.com/en-us/services/machine-learning-service/).

With Azure Machine Learning service, you can:
- Build and train machine learning models faster, and easily deploy to the cloud or the edge.
- Use the latest open source technologies such as [TensorFlow](https://www.tensorflow.org), [PyTorch](https://pytorch.org/), or Jupyter.
- Experiment locally and then quickly scale up or out with large GPU-enabled clusters in the cloud.
- Speed up data science with automated machine learning and hyper-parameter tuning.
- Track your experiments, manage models, and easily deploy with integrated CI/CD tooling.

** Previous documentation and vsix installer have been moved to the [archive](/archive) folder.

## Supported Operating Systems
Currently this extension supports the following 64-bit operating systems:
- Windows
- macOS
- Linux Ubuntu

## Getting Started

### *Pre-req: Set up the Azure ML environment in VS Code*

Make sure to follow the [Installation](/docs/installation.md) steps before getting started. 

Here's an essential install step that is worth calling out: Once the VS Code AML extension is installed, please follow up these steps to set up the environment in VS Code.
1. Open the command palette `Ctrl+Shift+P`
2. Run the `Azure ML: Install Azure ML SDK` command to install the Azure Machine Learning SDK. This will create a local private Python environment which has the Visual Studio Code prerequisites for working with Azure Machine Learning.
3. In the integrated terminal window you will be prompted to specify the Python interpreter to use, or you can simply hit **Enter** to use your default Python interpreter.

## References
- [Release notes](/docs/releasenotes.md)
- [Installation](/docs/installation.md)
- [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- [Create and manage Azure compute targets](/docs/manage-compute-aml-vscode.md)
- [Train and tune models](/docs/train-models-aml-vscode.md)
- [Deploy and manage models](/docs/deploy-models-aml-vscode.md)

## Support
Support for this extension is provided on our [GitHub Issue Tracker](http://github.com/Microsoft/vscode-tools-for-ai/issues). You can submit a bug report, a feature suggestion or participate in discussions.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct]. For more information see the [Code of Conduct FAQ] or contact [pyaiteam@microsoft.com] with any additional questions or comments.

## Privacy Statement
The [Microsoft Enterprise and Developer Privacy Statement] describes the privacy statement of this software.

## License
This extension is subject to the terms of the [End User License Agreement]. 

[Microsoft Enterprise and Developer Privacy Statement]:https://go.microsoft.com/fwlink/?LinkId=786907&lang=en7
[Microsoft Open Source Code of Conduct]:https://opensource.microsoft.com/codeofconduct/
[Code of Conduct FAQ]:https://opensource.microsoft.com/codeofconduct/faq/
[opencode@microsoft.com]:mailto:opencode@microsoft.com
[End User License Agreement]:https://www.visualstudio.com/license-terms/mlt552233/