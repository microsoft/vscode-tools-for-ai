## Create and manage Azure compute targets

With Azure Machine Learning for VS Code, you can prepare your data, train models, and deploy them both locally and on remote compute targets.

This extension supports several different remote compute targets for Azure Machine Learning. See the [full list of supported compute targets](https://docs.microsoft.com/en-us/azure/machine-learning/service/how-to-set-up-training-targets) for Azure Machine Learning.

### Create compute targets for Azure Machine Learning in VS Code

**To create a compute target:**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

2. In the tree view, expand your Azure subscription and Azure Machine Learning service workspace. In the animated image, the subscription name is 'Free Trial' and the workspace is 'TeamWorkspace'. 

3. Under the workspace node, right-click the **Compute** node and choose **Create Compute**.

4. Choose the compute target type from the list. 

5. In the Command Palette, select a Virtual Machine size.

6. In the Command Palette, enter a name for the compute target in the field. 

7. Specify any advanced properties in the JSON config file that opens in a new tab. You can specify properties such as a maximum node count..

8. When you are done configuring your compute target, click **Submit** in the bottom-right corner of the screen.

Here is an example for creating an Azure Machine Learning Compute (AMLCompute):
[![Create AML Compute in VS Code](./media/CreateARemoteCompute.gif)](./media/CreateARemoteCompute.gif#lightbox)

#### The 'run configuration' file

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

## Next steps
- To learn how to train models and manage your experiments from Visual Studio Code , see [Training models and managing experiments in Visual Studio Code](train-models-aml-vscode.md)
- To learn how to deploy and manage models from Visual Studio Code , see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)

## References
- To get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
