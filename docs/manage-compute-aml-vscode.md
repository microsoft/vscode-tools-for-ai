## Create and manage Azure compute targets

With Azure Machine Learning for VS Code, you can prepare your data, train models, and deploy them both on your current machine (locally) and on remote compute targets.

When you set an experiment as active, the extension will automatically provide a compute target named **local**. This compute target represents the machine on which you are editing your python ML project and can be used as an Azure ML compute target.

The extension also supports remote and cloud based compute target types for Azure Machine Learning. See the [full list of supported compute targets](https://docs.microsoft.com/en-us/azure/machine-learning/service/how-to-set-up-training-targets) for Azure Machine Learning.

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

Run configuration files, or "runconfig" files specify the overall environment on which your python code will. run. Run configuration files can be found under each associated Compute node in your Workspace.

New run configurations can be created for any compute you may have in your Workspace. To add a new run configuration, right click on the compute node and choose **Create Run Configuration**.

## Next steps
- To learn how to train models and manage your experiments from Visual Studio Code , see [Training models and managing experiments in Visual Studio Code](train-models-aml-vscode.md)
- To learn how to deploy and manage models from Visual Studio Code , see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)

## References
- To get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
