"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:"2.1 Azure RAI dashboard",sidebar_position:1,slug:"/azure-prerequistes"},i="(Azure) Prerequisites",s={unversionedId:"azure-content-safety/prerequisites/azure-prerequistes",id:"azure-content-safety/prerequisites/azure-prerequistes",title:"2.1 Azure RAI dashboard",description:"Azure subscription account",source:"@site/docs/azure-content-safety/prerequisites/azure-prerequistes.md",sourceDirName:"azure-content-safety/prerequisites",slug:"/azure-prerequistes",permalink:"/rai-dashboard-workshop/docs/azure-prerequistes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"2.1 Azure RAI dashboard",sidebar_position:1,slug:"/azure-prerequistes"},sidebar:"mySidebar",previous:{title:"Lab# 2: Launch GitHub codespaces project",permalink:"/rai-dashboard-workshop/docs/content-safety-codespaces"},next:{title:"Lab# 3: Analyze Text",permalink:"/rai-dashboard-workshop/docs/content-safety-analyze-text"}},l={},c=[{value:"Azure subscription account",id:"azure-subscription-account",level:2},{value:"Setup your cloud resources",id:"setup-your-cloud-resources",level:2},{value:"Azure Login",id:"azure-login",level:3},{value:"Create Resource Group and Azure ML workspace",id:"create-resource-group-and-azure-ml-workspace",level:3},{value:"Run jobs for training the model and creating the RAI dashboard",id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"azure-prerequisites"},"(Azure) Prerequisites"),(0,o.kt)("h2",{id:"azure-subscription-account"},"Azure subscription account"),(0,o.kt)("p",null,"In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account promo code.  You'll need to successfully complete the azure pass redemption process for setting up your account before you can start the steps below."),(0,o.kt)("p",null,"To redeem a promo code, visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoftazurepass.com/"},"microsoftazurepass.com")," and follow these ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoftazurepass.com/Home/HowTo"},"Azure Pass redemption instructions"),"."),(0,o.kt)("h2",{id:"setup-your-cloud-resources"},"Setup your cloud resources"),(0,o.kt)("p",null,"We'll be using Azure Cloud Shell to create your Azure Machine Learning workspace; as well as running the jobs to train and register your model. And finally, create the Responsible AI dashboard that you'll be using in this workshop.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To start, log into the ",(0,o.kt)("a",{parentName:"p",href:"http://portal.azure.com/"},"Azure portal")," with your account subscription.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Subscriptions" icon, to access your ',(0,o.kt)("strong",{parentName:"p"},"subscription ID"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription icon",src:a(6866).Z,title:"Azure subscription icon",width:"2492",height:"517"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'On the "Subscriptions" page, copy the "subscription Id" and store it to use later.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription id",src:a(8114).Z,title:"Azure subscription id",width:"2480",height:"588"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Select the "Azure Cloud Shell" icon.  ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell icon",src:a(3498).Z,title:"Azure Cloud Shell icon",width:"2268",height:"105"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'A command terminal will open at the bottom of the page.  Select the "Bash" option.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:a(6163).Z,title:"Cloud Shell bash",width:"2889",height:"1661"}),"\t"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'A Cloud Shell needs to create a storage account and mount a file system for you.  Under the "Subscription" drop-down menu, select your subscription.  Then, click on the "Create storage" button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:a(3092).Z,title:"Cloud Shell bash",width:"2867",height:"875"}),"\t"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"This should open a Cloud Shell command line terminal.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell terminal",src:a(5840).Z,title:"Azure Cloud Shell terminal",width:"1176",height:"350"}),"\t"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In Azure Cloud Shell command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Change to the project directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd RAI-Diabetes-Hospital-Readmission-classification\n")),(0,o.kt)("h3",{id:"azure-login"},"Azure Login"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"At the terminal command prompt, enter the following Azure CLI command to log into your Azure account. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az login --use-device-code\n")),(0,o.kt)("p",null,"Then, open the link provided and enter the access code from the Cloud Shell message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Login URL",src:a(3374).Z,title:"Device Login URL",width:"1852",height:"82"}),"\t"),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'This will open a new browser window.  Enter the access code and click on the "Next" button.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Pick the account you used to setup the Azure subscription which shows the name and email your used. Then, click on the "Continue" button to sign into the Microsoft Azure CLI.  After you have successfully signed in, closed the browser window tab.  Return back to the Azure portal tab.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have successfully logged in, set your account to your subscription.  Use the ",(0,o.kt)("strong",{parentName:"p"},"subscription Id")," that you copied earlier."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az account set -s <enter-your-subscription-id-here>\n")),(0,o.kt)("h3",{id:"create-resource-group-and-azure-ml-workspace"},"Create Resource Group and Azure ML workspace"),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Find an Azure region that is closest to you. Pick a location name close to you to use for this workshop (e.g. ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westus")),",  ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"eastus"))," ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westeurope")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"southafricanorth")),",... etc).  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az account list-locations --query "[*].name" --out tsv | sort\n')),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Create an Azure resource group.  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create --name <resource-group-name> --location <location>\n")),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Create an Azure Machine Learning workspace using the resource group name you created.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml workspace create -n <workspace-name> -g <resource-group-name>\n")),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Set your environment default to the resource group and Azure ML workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"\n')),(0,o.kt)("h3",{id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard"},"Run jobs for training the model and creating the RAI dashboard"),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"Register the training and testing dataset to the Azure Machine Learning workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml data create -f cloud/train_data.yml\n\naz ml data create -f cloud/test_data.yml\n")),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},"Create a compute instance for running the jobs.  Then, copy the compute name (e.g., ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"compute-xxxxxxxxxxxx")),") at the end of the run to use later.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"uuid=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w 12 | head -n 1)\ncomputename=compute-$uuid\n\naz ml compute create --name $computename --type computeinstance --size STANDARD_DS12_V2\n\necho 'copy the compute name to use later:' \necho $computename\n")),(0,o.kt)("ol",{start:20},(0,o.kt)("li",{parentName:"ol"},'On the Cloud Shell menu, click on the "Open editor" pane to edit some of the files.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open editor",src:a(7873).Z,title:"Open editor",width:"2503",height:"455"}),"\t"),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("em",{parentName:"li"},"RAI-Diabetes-Hospital-Readmission-classification")," folder to expand the directory.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Expand directory",src:a(8907).Z,title:"Expand directory",width:"2890",height:"969"}),"\t"),(0,o.kt)("ol",{start:22},(0,o.kt)("li",{parentName:"ol"},'Navigate to the "cloud/training_job.yml" file.  Then replace the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},'"compute: azureml:compute-xxxxxxxxxxxx"')),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Training job update",src:a(2708).Z,title:"training job update",width:"2892",height:"1132"}),"\t"),(0,o.kt)("ol",{start:23},(0,o.kt)("li",{parentName:"ol"},'Right-click anywhere in the file, then select the "Save" option to save the file.  You can use Save short-cut keys as well.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save editor",src:a(8076).Z,title:"Save edit",width:"2893",height:"1132"}),"\t"),(0,o.kt)("ol",{start:24},(0,o.kt)("li",{parentName:"ol"},'Next, navigate to the "cloud/rai_dashboard_pipeline.yml" file.  Then update the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},'"compute: azureml:compute-xxxxxxxxxxxx"')),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rai pipeline update",src:a(4599).Z,title:"Rai pipeline update",width:"2892",height:"1132"}),"\t"),(0,o.kt)("ol",{start:25},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right-click anywhere in the file, then select the "Save" option to save the file.  You can also use Save short-cut keys as well.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right-click anywhere in the file, then select the "Quit" option to close the editor window.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back at the Cloud Shell command prompt, submit the job to train the model.  Wait for the job to update its run status during the training."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'run_id=$(az ml job create --name my_training_job -f cloud/training_job.yml --query name -o tsv)\n\n# wait for job to finish while checking for status\nif [[ -z "$run_id" ]]\nthen\n  echo "Job creation failed"\n  exit 3\nfi\nstatus=$(az ml job show -n $run_id --query status -o tsv)\nif [[ -z "$status" ]]\nthen\n  echo "Status query failed"\n  exit 4\nfi\nrunning=("Queued" "Starting" "Preparing" "Running" "Finalizing")\nwhile [[ ${running[*]} =~ $status ]]\ndo\n  sleep 8 \n  status=$(az ml job show -n $run_id --query status -o tsv)\n  echo $status\ndone\n')),(0,o.kt)("ol",{start:28},(0,o.kt)("li",{parentName:"ol"},"After the training job has completed successfully, register the model to the Azure Machine Learning workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az ml model create --name rai_hospital_model --path "azureml://jobs/$run_id/outputs/model_output" --type mlflow_model\n')),(0,o.kt)("ol",{start:29},(0,o.kt)("li",{parentName:"ol"},"Submit the job pipeline to create the RAI dashboard.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml job create --file cloud/rai_dashboard_pipeline.yml\n")),(0,o.kt)("ol",{start:30},(0,o.kt)("li",{parentName:"ol"},"Log into ",(0,o.kt)("a",{parentName:"li",href:"https://ml.azure.com"},"Azure Machine Learning studio")," to monitor the pipeline job for creating the RAI dashboard.  ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure ML studio",src:a(379).Z,title:"Azure ML studio page",width:"2363",height:"1663"})),(0,o.kt)("ol",{start:31},(0,o.kt)("li",{parentName:"ol"},"Click on your Azure ML workspace name.  Then, click on the ",(0,o.kt)("strong",{parentName:"li"},"Pipelines")," tab to get the job status.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure ML Job status",src:a(9719).Z,title:"Azure ML job status page",width:"883",height:"673"}),"\t"),(0,o.kt)("ol",{start:32},(0,o.kt)("li",{parentName:"ol"},'To view the progression of the pipeline job creating the RAI dashboard, click on the job "Display name". ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard pipeline",src:a(1431).Z,title:"RAI dashboard pipeline",width:"1472",height:"820"}),"\t"),(0,o.kt)("ol",{start:33},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Models")," tab on the left-hand navigation.  Then click on the name of the model to open the details page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lastly, click on the ",(0,o.kt)("em",{parentName:"p"},'"Responsible AI"'),' tab to view the RAI dashboard.  Then, click on the "Name" to view the dashboard.'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard tab",src:a(3051).Z,title:"RAI dashboard tab",width:"1416",height:"630"}),"\t"),(0,o.kt)("ol",{start:35},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Terrific...you're ready to start using the dashboard!  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Next" button below to proceed to the ',(0,o.kt)("em",{parentName:"p"},"Error Analysis")," lab."))))}d.isMDXComponent=!0},3498:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-cloud-shell-3fd4ef22c2037cdb5e3fa87714a5a05a.png"},8114:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-subscriptions-copy-975a8defcfeadf8482aff19fd99c5d58.png"},6866:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-subscriptions-c7ace6ac3d0c0059ead6d4ed452e87aa.png"},379:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azureml-studio-e12cca04e412606f8292daa25062763c.png"},9719:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azureml_jobs_page-a1f6a2de5d57fc4c9c85f2f15165cdb9.png"},6163:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-bash-0ccfafbeaf7318d9b37ea44862851b56.png"},3092:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-create-storage-9de13991e6f96cc1335e956bf6c02f0a.png"},5840:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-terminal-32a8fab51b18c4d35a6585c9ea235bb7.png"},3374:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/device-login-url-7259a2a4c8cb9ec364b039fa8f34abc3.png"},8907:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/expand-project-directory-ad6ae07fdfb95869ab4a03fc6d93837a.png"},7873:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/open-editor-93deb6020369c8cadce53124cc0d58fe.png"},3051:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai-dashboard-tab-561f9c43b60eb2311a9e5c17e63430ad.png"},4599:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai-pipeline-compute-update-d40534a26baa978c0226ccd5310ec6cf.png"},1431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai_dashboard_pipeline-879d80eeee762e5c53465d91accba4c1.png"},8076:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/save-open-editor-eb93f6e1555eff477e97219deea43818.png"},2708:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/training-job-compute-update-d3d96d8ff6502d57cbcf032c08c04940.png"}}]);