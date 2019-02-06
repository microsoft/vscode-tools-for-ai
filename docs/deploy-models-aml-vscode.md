# Deploy and manage models
Azure Machine Learning enables deploying and managing your machine learning models in the cloud and on the edge. 

### Register your model to Azure Machine Learning from VS Code

Now that you have trained your model, you can register it in your workspace.
Registered models can be tracked and deployed.

**To register your model:**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

1. In the tree view, expand your Azure subscription and Azure Machine Learning service workspace.

1. Under the workspace node, right-click **Models** and choose **Register Model**.

1. In the Command Palette, enter a model name in the field. 

1. From the list, choose whether you want to upload a **model file** (for single models) a  **model folder** (for models with multiple files, such as Tensorflow). 

1. Select your folder or file.

1. When you are done configuring your model properties, click **Submit** in the bottom-right corner of the screen. 

Here is an example for registering your model to AML:
[![Registering a Model to AML](./media/RegisteringAModel.gif)](./media/RegisteringAModel.gif#lightbox)


### Deploy your service from VS Code

Using VS Code, you can deploy your web service to:
+ Azure Container Instance (ACI): for testing
+ Azure Kubernetes Service (AKS): for production 

You do not need to create an ACI container to test in advance since they are created on the fly. However, AKS clusters do need to be configured in advance. 

Learn more about [deployment with Azure Machine Learning](how-to-deploy-and-where.md) in general.

**To deploy a web service:**

1. Click the Azure icon in the Visual Studio Code activity bar. The Azure Machine Learning sidebar appears.

1. In the tree view, expand your Azure subscription and your Azure Machine Learning service workspace.

1. Under the workspace node, expand the **Models** node.

1. Right-click the model you want to deploy and choose **Deploy Service from Registered Model** command from the context menu.

1. In the Command Palette, choose the compute target to which to deploy from the list. 

1. In the Command Palette, enter a name for this service in the field.  

1. In the Command Palette, press the Enter key on your keyboard to browse and select the script file.

1. In the Command Palette, press the Enter key on your keyboard to browse and select the conda dependency file.

1. When you are done configuring your service properties, click **Submit** in the bottom-right corner of the screen to deploy. In this service properties file, you can specify a local Docker file or a schema.json file that you may want to use.

The web service is now deployed.

Here is an example for deploying a web service:
[![Deploying a web service](./media/CreatingAnImage.gif)](./media/CreatingAnImage.gif#lightbox)

## References

- To learn more about how to get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- To learn how to create Azure Machine Learning compute targets from Visual Studio Code to train and deploy your models, see [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md)
- To learn how to train models and manage your experiments from Visual Studio Code, see [Training models and managing experiments in Visual Studio Code](train-models-aml-vscode.md)
- To learn how to deploy and manage models from Visual Studio Code, see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)
