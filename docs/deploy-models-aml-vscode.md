# Deploy and manage models with Azure Machine Learning
Azure Machine Learning enables deploying and managing your machine learning models in the cloud and on the edge. 

## Register your model with Azure Machine Learning

Once your model is trained, you can register it with Azure Machine Learning to track it and deploy.
1. Open the Azure Machine Learning view in the Azure activity bar
2. Expand your Azure subscription and Azure Machine Learning workspace nodes
3. Right-click on the `Models` node and select `Register Model`
4. Select either to upload a single model from a **model file** or if you have a model with multiple files (like a Tensorflow model often does) then select **model folder**
5. Use the file picker to select your file or path

![compute](./media/registermodel.gif)

## Deploy your service

You can deploy your service to the following deployment targets in the cloud:
- `Azure Container Instance` - spins up a single container instance, starts up faster. You do not need to create an `Azure Container Instance` to test in advance, this will be created automatically. 
- `Azure Kubernetes Service`. Learn how to create an `Azure Kubernetes Service` in [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md). 

To deploy a service, 
1. Expand the "Models" node and select the model to be deployed. Right click on the model and select `Deploy Service from Registered Model`.
2. Select the service type between `Azure Container Instance` and `Azure Kubernetes Service` in the Command Palette.
3. Input the service name. Press `Enter` to browse to your scoring script, and then press `Enter` again to browse to the conda file - usually a yml file that defines environment dependencies.
4. If needed, change advanced settings in the json file that shows up, and then click on "Submit" in the notification message box.
5. Deployment will take a few minutes and you will see a "Deploy Service" message in the status bar while it is in progress.

**Example for Azure Container Instance**
![compute](./media/deploy.gif)

## References

- To learn more about how to get started with Azure Machine Learning in Visual Studio Code, see [Getting started with Azure Machine Learning](/docs/getting-started-aml-vscode.md)
- To learn how to create Azure Machine Learning compute targets from Visual Studio Code to train and deploy your models, see [Create and manage compute targets in Visual Studio Code](manage-compute-aml-vscode.md)
- To learn how to train models and manage your experiments from Visual Studio Code, see [Training models and managing experiments in Visual Studio Code](train-models-aml-vscode.md)
- To learn how to deploy and manage models from Visual Studio Code, see [Deploying and managing models in Visual Studio Code](deploy-models-aml-vscode.md)
