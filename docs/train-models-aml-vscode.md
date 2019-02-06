## Train and tune models

Use Azure Machine Learning for VS Code (Preview) to rapidly iterate on your code, step through and debug, and use your source code control solution of choice. 

### The 'run configuration' file

The VS Code extension will automatically create a local compute target and run configurations for your **local** and **docker** environments on your local computer. The run configuration files can be found under the associated compute target. 

This is a snippet from the default local run configuration file. By default, `userManagedDependencies: True`  so you must install all of your libraries/dependencies yourself and then local experiment runs will use your default Python environment as specified by the VS Code Python extension.

```yaml
# user_managed_dependencies = True indicates that the environment will be user managed. False indicates that AzureML will manage the user environment.
    userManagedDependencies: True
# The python interpreter path
    interpreterPath: python
# Path to the conda dependencies file to use for this run. If a project
# contains multiple programs with different sets of dependencies, it may be
# convenient to manage those environments with separate files.
    condaDependenciesFile: aml_config/conda_dependencies.yml
# Docker details
    docker:
# Set True to perform this run inside a Docker container.
    enabled: false
```

**To run your experiment locally with Azure Machine Learning:**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

1. In the tree view, expand your Azure subscription and Azure Machine Learning service workspace. 

1. Under the workspace node, expand the **Compute** node and right-click on the **Run Config** of compute you want to use. 

1. Select **Run Experiment**.

1. Select the script to run from the File Explorer. 

1. Click **View Experiment Run** to see the integrated Azure Machine Learning portal to monitor your runs and see your trained models.

Here is an example for running an experiment locally:
[![Running an experiment locally](./media/RunExperimentLocally.gif)](./media/RunExperimentLocally.gif#lightbox)

### Use remote computes for experiments in VS Code

To use a remote compute target when training, you need to create a run configuration file. This file tells Azure Machine Learning not only where to run your experiment but also how to prepare the environment.

#### The conda dependencies file

By default, a new conda environment is created for you and your installation dependencies are managed. However, you must specify your dependencies and their versions in the `aml_config/conda_dependencies.yml` file. 

This is a snippet from the default 'aml_config/conda_dependencies.yml'. For example, you can specify 'tensorflow=1.12.0' as seen below. If you do not specify the version of the dependency, then the latest version will be used.  
You can add additional dependencies in the config file.

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

**To run your experiment with Azure Machine Learning on a remote compute target:**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

1. In the tree view, expand your Azure subscription and Azure Machine Learning service workspace. 

1. Right-click on your python script in the editor window and select **AML: Run as Experiment in Azure**. 

1. In the Command Palette, select the compute target. 

1. In the Command Palette, enter the run configuration name in the field. 

1. Edit the conda_dependencies.yml file to specify the experiment's runtime dependencies, then click **Submit** in the bottom-right corner of the screen. 

1. Click **View Experiment Run** to see the integrated Azure Machine Learning portal to monitor your runs and see your trained models.

Here is an example for running an experiment on a remote compute target:
[![Running an experiment on a remote target](./media/runningOnARemoteTarget.gif)](./media/runningOnARemoteTarget.gif#lightbox)


## Next steps

- To learn how to deploy and manage models from Visual Studio Code , see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)

## References
- To learn more about how to get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- To learn how to create and use Azure Virtual Machines, Azure Batch AI clusters and Azure Kubernetes clusters from Visual Studio Code to train and deploy your models, see [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md)
