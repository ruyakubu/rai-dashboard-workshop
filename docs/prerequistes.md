---
sidebar_position: 2
---

# Prerequisites

## Azure subscription account

In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code.

## Install and Setup your cloud resources

We'll be using Azure Cloud Shell to automate and expedite creating your Azure Machine Learning workspace; as well as running the jobs to train and register your model.  You'll be using a bash script.  And finally, created the Responsible AI dashboard that you'll be using in this workshop.

1. Log into the [Azure portal](http://portal.azure.com/) with your account subscription

![Azure Cloud Shell icon](/img/tutorial/azure-cloud-shell.png "Azure Cloud Shell icon")

2. Select the "Azure Cloud Shell" icon.  

A command terminall will open at the bottom of the page.
![Azure Cloud Shell terminal](/img/tutorial/cloud-shell-terminal.png "Azure Cloud Shell terminal")	

3. In Azure Cloud Shell, clone the github repository
```shell
git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git
```
4. Change to the project directory
```shell
cd RAI-Diabetes-Hospital-Readmission-classification
```

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

7. Create an Azure resource group.  For location, enter *westus*, *westus2*, *eastus* or *westeurope*,
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

14. Click on the "Next" button below to proceed to the *Error Analysis* lab.
