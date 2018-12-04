# Getting started with Azure Machine Learning in Visual Studio Code
Azure Machine Learning for Visual Studio Code, previously called Visual Studio Code Tools for AI**, is an extension to easily build, train, and deploy machine learning models to the cloud or the edge with [Azure Machine Learning service](https://azure.microsoft.com/en-us/services/machine-learning-service/).

** Previous documentation and vsix installer are moved to the archive folder.

## 1. Installing the extension by following the [installation steps](./installation.md)

## 2. Preparing Visual Studio Code for Azure Machine Learning

### Log into your Azure Account
The [Azure Account extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account) was automatically installed in Visual Studio Code during the install step. 

Please use it to login by using the `Azure: Sign In` command 

To learn more about how to create or filter your Azure subscriptions, here is a quick reference of the commands available 

| Command | Description |
| --- |---|
| `Azure: Sign In`  | Sign in to your Azure subscription.
| `Azure: Sign Out` | Sign out of your Azure subscription.
| `Azure: Select Subscriptions` | Pick the set of subscriptions you want to work with. 
| `Azure: Create an Account`  | If you don't have an Azure Account, you can [sign up](https://azure.microsoft.com/en-us/free/?utm_source=campaign&utm_campaign=vscode-azure-account&mktingSource=vscode-azure-account) for one today and receive $200 in free credits.


## 3. Getting started with Azure Machine Learning

### Create an Azure Machine Learning workspace

1. Open the `Azure activity` bar in Visual Studio Code.
1. Open the Azure Machine Learning view
1. Right-click your Azure subscription and select `Create Workspace`. 
1. Select an existing resource group or create a new one using the wizard in the command palette.
1. Specify a name for your new workspace
1. Hit enter

![install](./media/createworkspace.gif)

### Create an Azure Machine Learning experiment

This will enable you to keep track of your experiments using Azure Machine Learning

1. Right-click an Azure Machine Learning workspace and select `Create Experiment` from the context menu.
1. Name your experiment and hit enter.

### Attach your folder to your experiment

Right click on an Azure Machine Learning experiment and select `Attach Folder to Experiement` - This will enable associating each of your experiment runs with your experiment so all of your key metrics will be stored in the experiment history and the models you train will get automatically uploaded to Azure Machine Learning and stored with your experimment metrics and logs.

![install](./media/attachfolder.gif)

## Next steps
- To learn how to create and manage compute resources in Azure Machine Learning from within VS Code, see [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md)
- To learn how to train models and manage your experiments from Visual Studio Code, see [Training models and managing experiments in Visual Studio Code](train-models-aml-vscode.md)
- To learn how to deploy and manage models from Visual Studio Code, see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)
