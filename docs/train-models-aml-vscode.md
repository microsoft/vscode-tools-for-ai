## Train and tune models

Use Azure Machine Learning for VS Code (Preview) to rapidly iterate on your code, step through and debug, and use your source code control solution of choice. All runs that are executed are collected and can be viewed via the active Experiment in your Workspace. There are numerous ways to submit training runs on available computes. Here is a couple ways to execute a training run.

**Start by choosing a script to run**

1. Right-click on your python script either in the VS Code Explorer or the editor and select **AML: Run as Experiment in Azure**.

1. Answer all prompts that may appear in the Command Palette area of VS Code. Depending on whether you have done prior runs, prompts may vary. Typical prompts include the Azure subscription, Azure ML workspace and compute to target. Along the way you will be able to choose existing resources or create new ones from scratch.

1. The last prompt asks you to specify the run configuration. Run configurations are used to specify the overall environment in which your python script will run. This information is stored as files in your script's **.azureml** folder and can be accessed directly there or under each Compute in the Azure ML sidebar.

1. After specifying the run configuration, your run will be submitted to Azure ML. Click **View Experiment Run** to open the Azure Machine Learning portal to monitor the run.

**Start by choosing a compute target**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

1. In the tree view, expand your Azure subscription and Azure Machine Learning service Workspace.

1. Under the **Workspace** node, expand the **Compute** node and right-click on the any compute.

1. Select **Run Experiment**.

1. You will be prompted to select the script to run and, depending on the compute target you chose, the run configuration to use.

1. After specifying the run configuration, your run will be submitted to Azure ML. Click **View Experiment Run** to open the Azure Machine Learning portal to monitor the run.

Here is an example for running an experiment locally:
[![Running an experiment locally](./media/RunExperimentLocally.gif)](./media/RunExperimentLocally.gif#lightbox)

#### The conda dependencies file

By default, all conda and pip dependencies for your script are specified in the run configuration. However, you can also specifiy the environment via a `conda_dependencies.yml` file. A default version of this file is created in the .azureml subfolder of your project when an experiment is made active. To make use of it, modify the desired `.runconfig` file as follows

```json
    "environment": {
        "python": {
            "condaDependenciesFile": ".azureml/conda_dependencies.yml",
            "userManagedDependencies": true,
            ...
        },
    },
```


This is a snippet from the default 'aml_config/conda_dependencies.yml'. For example, you can specify 'tensorflow=1.12.0' as seen below. If you do not specify the version of the dependency, then the latest version will be used.

```yaml
# The dependencies defined in this file will be automatically provisioned for runs with userManagedDependencies=False.

name: project_environment
dependencies:
  # The python interpreter version.

  # Currently Azure ML only supports 3.5.2 and later.

- python=3.6.2
- tensorflow=1.12.0

- pip:
    # Required packages for AzureML execution, history, and data preparation.

  - --index-url https://azuremlsdktestpypi.azureedge.net/sdk-release/Preview/E7501C02541B433786111FE8E140CAA1
  - --extra-index-url https://pypi.python.org/simple
  - azureml-defaults

```


## Next steps

- To learn how to deploy and manage models from Visual Studio Code , see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)

## References
- To learn more about how to get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- To learn how to create and use Azure Virtual Machines, Azure Batch AI clusters and Azure Kubernetes clusters from Visual Studio Code to train and deploy your models, see [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md)
