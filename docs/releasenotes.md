# Release Notes
## 0.5.0 (2019-04-25)
* Streamline experiment submission steps (more to come)
* Convert to using json rather than yaml for runconfig
* Provide default runconfig templates for common ML framework usage
* Bug fixes and usability improvements

## 0.4.5 (2019-03-13)
* Update Azure ML runtime dependency
* Many bug fixes and internal implementation improvements

## 0.4.2 (2019-01-17)
* Fix Mac upgrade from version 0.3.1 of the extension.

## 0.4.1 (2019-01-04)
* Fix problems that caused Mac and Linux to fail to install the extension's runtime dependencies (Azure ML SDK).

## 0.4.0 (2018-12-13)
* This release provides a significant change to how you interact with experiments and folders. Instead of "attaching" a folder to an experiment, you now just need to set an experiment as "active". This can be done by right clicking on an experiment and setting it as "active". The extension will also attempt to associate the folder you have opened in Visual Studio code with the active experiment when performing affected operations.

* Run configurations are now only exposed as child nodes of the computes, rather than a separate node.

* This release also also adds the ability to re-run an experiment using the last run configuration used for a previous run to make it easier to re-run an experiment after you have made changes to a script in development. This functionality is currently accessible via the "AML: Repeat Run with Last Configuration" command or by right clicking on a script file after performing at least one experiment run.

* Many fixes including:
  * Automatic install or update of the extension's runtime dependency on the Azure ML Python SDK.
  * When creating computes, only show compute sizes available for the active workspace's region.
  * Ability to view compute properties and edit configurable AmlCompute properties.

## 0.3.2 (2018-12-04)

The extension has been redesigned to focus on providing a great developer experience working with the Azure Machine Learning service.

In the [archive](/archive) folder, you can find the [0.3.1 vsix installer](/archive/ms-toolsai.vscode-ai-0.3.1.vsix) that includes  previous features before this redesign, along with corresponding docs.


## 0.2.0 (2018-08-25)
-	When first starting Tools for AI, an installation page is shown for guiding local AI development environment setup. Users can launch a one-click installer from this page to install required software packages into the default Python environment.
-	We design a new start page to help users build first AI application / train first AI Model within 3 steps. The start page also contains useful AI examples and development resources.
-	View local Jupyter notebooks.
-	Built-in documentation search for TensorFlow / Keras / PyTorch APIs. Right-click the function name, and select “Search in Documentation Viewer” context menu.
-	Docker image list is updated for job submission to remote machines. And a new [all-in-one docker image](https://hub.docker.com/r/toolsforai/all-in-one/) including all popular AI / DL frameworks is provided.
-	A more proactive feedback channel is built - will prompt user to give feedback when some conditions met.
-	Azure Batch AI support is temporarily removed, will get the support of Batch AI back soon.
-	Telemetry and stability improvement.
