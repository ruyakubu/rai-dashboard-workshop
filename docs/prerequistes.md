---
sidebar_position: 2
---

# Prerequisites

## Azure subscription account

In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code.

## Install and Setup your cloud resources

We'll be using Github codespaces to automate and expedite creating your Azure Machine Learning workspace; as well as running the jobs to train and register your model.  And finally, created the Responsible AI dashboard that you'll be using in this workshop.

To get started, go to the project Github repo: https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification

1. Click on the green **"Code"** button for the repository.

![Github code button](/img/tutorial/github-code-button.png "Github Code button")	

2. Switch the tab below from "Local" to **"Codespaces"**.
3. Click on the "New Codespace" button.  This will launch a new browser window as it loads the dev container for this project.  **Note**:  This will take a couple of minutes.
4. After the container is loaded, Visual Studio code will be launched in your browser.

### Azure Login

5. At the Terminal command prompt, enter the following Azure CLI command to log into your Azure account.  Open the link provided and enter access code
```shell
az login --use-device-code
```
6. Once you have successfully logged in, set your account to the the current subscription.
```shell
az account set -s <enter-your-subscription-id-here>
```
### Create Resource Group and Azure ML workspace

7. Create an Azure resource group.  For [location](https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=machine-learning-service), enter the region closest to you. 
```shell
az group create --name <resource-group-name> --location <location>
```
8. Create an Azure Machine Learning workspace using the resource group name you created.
```shell
az ml workspace create -n <workspace-name> -g <resource-group-name>
```
9. Set your environment default to the resource group and Azure ML workspace.
```shell
az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"
```

###  Run jobs for training the model and creating the RAI dashboard

10. Run the following bash script that will create a compute instance; register the train/test datasets; train and register the model; then create the RAI dashboard for you.

```shell
bash cloud/setup.sh
```

11.  After the setup script has successfully completed, log into [Azure Machine Learning studio](https://ml.azure.com) to monitor the pipeline job for creating the RAI dashboard.  Then, click on the **Pipelines** tab to get the job status.

![Azure ML Job status](/img/tutorial/azureml_jobs_page.png "Azure ML job status page")	

12.  To view the progression of the pipeline job creating the RAI dashboard, click on the job name. 

![RAI dashboard pipeline](/img/tutorial/rai_dashboard_pipeline.png "RAI dashboard pipeline")	

13. Terrific...you're ready to start using the dashboard!


## Disbetes Hospital Readmission repository

You'll need to clone the GitHub repository for the Diabetes Hospital Readmission which contains the train and test dataset.  As well as the notebook to train and register the model.  In addition, we build the Responsible AI dashboard for the trained model.

- https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification

