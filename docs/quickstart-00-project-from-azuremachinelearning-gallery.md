# Creating Project from Azure Marchine Learning Gallery

## Exploring project samples
Visual Studio Code Tools for AI comes with a Sample Explorer via integration with Azure Machine Learning. The Sample Explorer makes it easy to discover samples and try them with only a few clicks. 

> [!TIP]
> You will need Azure Machine Learning Workbench to be installed. See instructions at [How to install Azure Machine Learning Workbench](https://docs.microsoft.com/en-us/azure/machine-learning/preview/quickstart-installation)  

To open the explorer, do as follow:   
1. Open the command palette (View > **Command Palette** or **Ctrl+Shift+P**).
2. Enter "ML Sample". 
3. You get a recommendation for "Machine Learning: Open Azure Machine Learning Samples Explorer", select it and press enter. 


![sample explorer](media/sampleexplorer.png)

## Creating a new project from the sample explorer 
You can browse different samples and get more information about them. Let's browse until finding the "Classifying Iris" sample.

To create a new project based on this sample do the following:
1. Click install button on the project sample, notice the commands being prompted, walking you through the steps of creating a new project. 
2. **Enter a name** for the project, for example "Iris".
3. **Select an account**
4. **Select a workspace** and press enter.
5. **Select a project folder** to create your project

![project folder](media/SelectProjectFolder.png)

The project will then be created.

> [!TIP]
> You will need to be logged-in to access your Azure resource. Right click the "Azure ML" node in AI EXPLORER and click "AI: Azure ML - Login" to start.

![AzureML Login](media/AzureMLLogin.png)