## DEPRECATED DOC- This extension has been re-designed to focus on providing a great experience working with the Azure Machine Learning service. Please check out the latest doc in the [parent folder](..).
# Submitting a job to train your model locally or in the cloud
Now that the new project is open in Visual Studio Code, you can submit a model training job to your different compute targets. (local or VM with docker).

Visual Studio Code Tools for AI provides multiple ways to submit a model training job. 
* Context Menu (right click) in Explorer view - **AI: Submit Job**.

    ![submit job](media/job/submit-explorer.png)

* Context Menu (right click) in active document window - **AI: Submit Job**.

    ![submit job](media/job/submit-editorwindow.png)

* Context Menu (right click) in AI EXPLORER - **AI: Submit Job**.

    ![submit job](media/job/submit-target.png)

* From the command palette: "AI: Submit Job".

The typical job submitting flow consists of several steps:
1. Select a platform (job service)

    ![submit job](media/job/submit-select-jobservice.png)

2. Select a configuration

    ![submit job](media/job/submit-select-configuration.png)

3. Enter a job name
    
    By default the startup script name is used as the job name.
    
    ![submit job](media/job/submit-jobname.png)

4. Confirm the job properties

Once all necessary information are collected, a json file ***ai_job_properties.json*** will be created and opened in editor window. You can review and modify the job properties here. To submit the job, click **Finish** button. Click **Cancel** to cancel the job.

![submit job](media/job/submit-confirm-job.png)

By default, job property file is not always be opened for review. You can change this behavior by adding
```json
"ai.submission.always-open-jobproperties": true 
```
to VS Code User Settings (CTRL+comma).

> [!NOTE]
> The steps varies slightly depends on how you launch the command and the target platform you chose. 
> Before you submitting the job, please open a python script file which will be used as startup script.
> You can confirm/change the start script setting later by editing the job property file.

Once the job is submitted, the embedded-terminal displays the progress of the runs.

## Submitting Job with Docker when using Linux VM

When submitting job to linux VM, we could use docker to run the job by editing the `ai_job_properties.json`.

![Docker Options](./media/job/submitting-with-docker.png)

Please make sure the docker is installed and well-prepared on your Linux VM.

We provide some candidate docker image for you to choose, you may set `"userRoot": true` to avoid unexpected errors. You may also use your own dokcer image.

Please make sure the `type` is consistent with the `image`, use `"type": "NvidiaDocker"` if it's a docker image with NVIDIA GPU.

If the docker image does not exist on your Linux VM, it will pull the docker image from remote. Please make sure the network is available and be patient.