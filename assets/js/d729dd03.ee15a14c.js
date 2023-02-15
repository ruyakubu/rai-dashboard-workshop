"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=o.createContext({}),l=function(e){var t=o.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(h.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,h=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,f=p["".concat(h,".").concat(u)]||p[u]||c[u]||n;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3771:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var o=r(7462),a=(r(7294),r(3905));const n={title:"Find model errors",sidebar_position:1,slug:"/find-treemap-errors"},i="Find model errors",s={unversionedId:"lab1-error-analysis/find-treemap-errors",id:"lab1-error-analysis/find-treemap-errors",isDocsHomePage:!1,title:"Find model errors",description:'We rely on traditional model performance to give us the overall "accuracy" of a model.  However,  we fail to realize that there are areas in the data where the model performs very poorly.  The Error Analysis section of the RAI dashboard helps provide an error distribution of the feature groups contributing to the error rate of the model.  Errors are often not distributed evenly across different data subgroups and Error Analysis helps you identify features with the highest error rates.',source:"@site/docs/lab1-error-analysis/find-treemap-errors.md",sourceDirName:"lab1-error-analysis",slug:"/find-treemap-errors",permalink:"/rai-dashboard-workshop/docs/find-treemap-errors",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/lab1-error-analysis/find-treemap-errors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Find model errors",sidebar_position:1,slug:"/find-treemap-errors"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/rai-dashboard-workshop/docs/prerequistes"},next:{title:"Find errors using Heat map",permalink:"/rai-dashboard-workshop/docs/find-heatmap-errors"}},h=[{value:"Identify and create a cohort for the tree path with the highest errors",id:"identify-and-create-a-cohort-for-the-tree-path-with-the-highest-errors",children:[]},{value:"Identify and create a cohort for the tree path with the least errors",id:"identify-and-create-a-cohort-for-the-tree-path-with-the-least-errors",children:[]},{value:"Use the Feature List to identify the top feature contributing to model errors",id:"use-the-feature-list-to-identify-the-top-feature-contributing-to-model-errors",children:[]}],l={toc:h},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"find-model-errors"},"Find model errors"),(0,a.kt)("p",null,'We rely on traditional model performance to give us the overall "accuracy" of a model.  However,  we fail to realize that there are areas in the data where the model performs very poorly.  The Error Analysis section of the RAI dashboard helps provide an error distribution of the feature groups contributing to the error rate of the model.  Errors are often not distributed evenly across different data subgroups and Error Analysis helps you identify features with the highest error rates. '),(0,a.kt)("p",null,"In this lab, we are going to explore how to use Error Analysis to find errors in the trained model to identify where the errors are. In addition, we\u2019ll learn how to create cohorts of data to investigate why a model is performing poorly in some cohorts and not in others."),(0,a.kt)("h2",{id:"identify-and-create-a-cohort-for-the-tree-path-with-the-highest-errors"},"Identify and create a cohort for the tree path with the highest errors"),(0,a.kt)("p",null,"To start the analysis, you can observe that the root node shows that out of 994 total test data, 168 incorrect predictions were found while evaluating the model. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When trying to find error affecting the model's performance, the first thing to do is find the tree path with the highest number of errors. The shade of red shows what percentage of this node\u2019s datapoints are receiving erroneous predictions. The darker the red the higher the error rate.  In our case the tree path with the darkest red color has a leaf-node ",(0,a.kt)("em",{parentName:"p"},"num_medications \u2264 21.50")," on the bottom right-hand side of the tree.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To select the path leading up to the node, double-click on the leaf node. This highlights the path and displays the feature condition for each node in the path.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a cohort out of the selected path by clicking on the \u201cSave as a new cohort\u201d button on the upper right-hand side of the Error Analysis section."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create highest error cohort",src:r(3108).Z,title:"Highest error rate"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The dashboard displays the \u201cFilters\u201d in this selection: num_medications <= 21.50, num_medications > 11.50, prior_inpatient > 0.00. "),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Name the cohort: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Err: Prior_Inpatient >0; Num_meds >11.50 & <= 21.50")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"save highest error cohort",src:r(4422).Z,title:"Save Highest error rate"})),(0,a.kt)("h2",{id:"identify-and-create-a-cohort-for-the-tree-path-with-the-least-errors"},"Identify and create a cohort for the tree path with the least errors"),(0,a.kt)("p",null,"For contrast purposes, create another cohort with the tree path with the least number of errors to see if we can gain insights as to why the model perform well in one cohort vs another. The leaf node with the feature condition ",(0,a.kt)("em",{parentName:"p"},"num_lab_procedures \u2264 56.50"),", on the far left-hand side of the tree, is the path of the tree with the least errors."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create least error cohort",src:r(9134).Z,title:"Least error rate"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Double-click on the node and save the selected path in a cohort.\nThe "Filter" in this dataset is: num_lab_procedures <= 56.50, number_diagnoses <= 6.50, prior_inpatient <= 0.00.'),(0,a.kt)("li",{parentName:"ol"},"Name the cohort: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Prior_Inpatient = 0; num_diagnoses <= 6.50; lab_procedures <= 56.50")))),(0,a.kt)("h2",{id:"use-the-feature-list-to-identify-the-top-feature-contributing-to-model-errors"},"Use the Feature List to identify the top feature contributing to model errors"),(0,a.kt)("p",null,'One of the advantages of using RAI dashboard to debug a model is that it provides the "Feature List" pane, which is a list of features in the test dataset that are error contributors. The list is sorted based on contribution of the features to the errors. The higher a feature is on this list, the higher its contribution importance to your model errors.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view Feature List",src:r(9759).Z,title:"Feature List"})),(0,a.kt)("p",null,'In our Diabetes Hospital Readmission model, the "Feature List" indicates the following features to be among the top contributors of the model\'s errors:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Age"),(0,a.kt)("li",{parentName:"ul"},"num_medications"),(0,a.kt)("li",{parentName:"ul"},"medicare"),(0,a.kt)("li",{parentName:"ul"},"time_in_hospital"),(0,a.kt)("li",{parentName:"ul"},"num_procedures"),(0,a.kt)("li",{parentName:"ul"},"insulin"),(0,a.kt)("li",{parentName:"ul"},"discharge_destination")))}p.isMDXComponent=!0},4422:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-save-error-tree-e3395da1fd9eb88553093a9cdcc728a3.png"},3108:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-select-error-tree-2b5bcbf3de01dab87b98328aa045bca8.png"},9134:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-select-least-error-tree-81ddabc0dd71ad1dce86ee04648b8af3.png"},9759:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-view-feature-list-e0ee157bdc463f6ad318347820313424.png"}}]);