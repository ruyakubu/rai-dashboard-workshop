"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3676:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2},i="Prerequisites",s={unversionedId:"prerequistes",id:"prerequistes",isDocsHomePage:!1,title:"Prerequisites",description:"Azure subscription account",source:"@site/docs/prerequistes.md",sourceDirName:".",slug:"/prerequistes",permalink:"/rai-dashboard-workshop/docs/prerequistes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/prerequistes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/rai-dashboard-workshop/docs/welcome"},next:{title:"Find model errors",permalink:"/rai-dashboard-workshop/docs/find-treemap-errors"}},l=[{value:"Azure subscription account",id:"azure-subscription-account",children:[]},{value:"Install and Setup your cloud resources",id:"install-and-setup-your-cloud-resources",children:[{value:"Azure Login",id:"azure-login",children:[]},{value:"Create Resource Group and Azure ML workspace",id:"create-resource-group-and-azure-ml-workspace",children:[]},{value:"Run jobs for training the model and creating the RAI dashboard",id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard",children:[]}]},{value:"Disbetes Hospital Readmission repository",id:"disbetes-hospital-readmission-repository",children:[]}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h2",{id:"azure-subscription-account"},"Azure subscription account"),(0,a.kt)("p",null,"In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code."),(0,a.kt)("h2",{id:"install-and-setup-your-cloud-resources"},"Install and Setup your cloud resources"),(0,a.kt)("p",null,"We'll be using Github codespaces to automate and expedite creating your Azure Machine Learning workspace; as well as running the jobs to train and register your model.  And finally, created the Responsible AI dashboard that you'll be using in this workshop."),(0,a.kt)("p",null,"To get started, go to the project Github repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification"},"https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the green ",(0,a.kt)("strong",{parentName:"li"},'"Code"')," button for the repository.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Github code button",src:r(10).Z,title:"Github Code button"}),"\t"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Switch the tab below from "Local" to ',(0,a.kt)("strong",{parentName:"li"},'"Codespaces"'),"."),(0,a.kt)("li",{parentName:"ol"},'Click on the "New Codespace" button.  This will launch a new browser window as it loads the dev container for this project.  ',(0,a.kt)("strong",{parentName:"li"},"Note"),":  This will take a couple of minutes."),(0,a.kt)("li",{parentName:"ol"},"After the container is loaded, Visual Studio code will be launched in your browser.")),(0,a.kt)("h3",{id:"azure-login"},"Azure Login"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"At the Terminal command prompt, enter the following Azure CLI command to log into your Azure account.  Open the link provided and enter access code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"az login --use-device-code\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Once you have successfully logged in, set your account to the the current subscription.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"az account set -s <enter-your-subscription-id-here>\n")),(0,a.kt)("h3",{id:"create-resource-group-and-azure-ml-workspace"},"Create Resource Group and Azure ML workspace"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Create an Azure resource group.  For ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=machine-learning-service"},"location"),", enter the region closest to you. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"az group create --name <resource-group-name> --location <location>\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Create an Azure Machine Learning workspace using the resource group name you created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"az ml workspace create -n <workspace-name> -g <resource-group-name>\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Set your environment default to the resource group and Azure ML workspace.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"\n')),(0,a.kt)("h3",{id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard"},"Run jobs for training the model and creating the RAI dashboard"),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Run the following bash script that will create a compute instance; register the train/test datasets; train and register the model; then create the RAI dashboard for you.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bash cloud/setup.sh\n")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"After the setup script has successfully completed, log into ",(0,a.kt)("a",{parentName:"li",href:"https://ml.azure.com"},"Azure Machine Learning studio")," to monitor the pipeline job for creating the RAI dashboard.  Then, click on the ",(0,a.kt)("strong",{parentName:"li"},"Pipelines")," tab to get the job status.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Azure ML Job status",src:r(9016).Z,title:"Azure ML job status page"}),"\t"),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"To view the progression of the pipeline job creating the RAI dashboard, click on the job name. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"RAI dashboard pipeline",src:r(4783).Z,title:"RAI dashboard pipeline"}),"\t"),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"Terrific...you're ready to start using the dashboard!")),(0,a.kt)("h2",{id:"disbetes-hospital-readmission-repository"},"Disbetes Hospital Readmission repository"),(0,a.kt)("p",null,"You'll need to clone the GitHub repository for the Diabetes Hospital Readmission which contains the train and test dataset.  As well as the notebook to train and register the model.  In addition, we build the Responsible AI dashboard for the trained model."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification"},"https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification"))))}p.isMDXComponent=!0},9016:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/azureml_jobs_page-a1f6a2de5d57fc4c9c85f2f15165cdb9.png"},10:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/github-code-button-8d8d53aa6e2d2be3fac0aac4c94bffc2.png"},4783:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/rai_dashboard_pipeline-879d80eeee762e5c53465d91accba4c1.png"}}]);