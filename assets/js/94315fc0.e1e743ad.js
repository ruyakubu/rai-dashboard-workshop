"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,h=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={id:"rai-ms-learn",title:"1. RAI dashboard (lesson & lab)",sidebar_position:1,slug:"/rai-dashboard-ms-learn"},o=void 0,s={unversionedId:"responsible-ai-dashboard-mslearn/rai-ms-learn",id:"responsible-ai-dashboard-mslearn/rai-ms-learn",title:"1. RAI dashboard (lesson & lab)",description:"\ud83c\udfa5 Responsible AI dashboard capabilities and features",source:"@site/docs/responsible-ai-dashboard-mslearn/intro.md",sourceDirName:"responsible-ai-dashboard-mslearn",slug:"/rai-dashboard-ms-learn",permalink:"/rai-dashboard-workshop/docs/rai-dashboard-ms-learn",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"rai-ms-learn",title:"1. RAI dashboard (lesson & lab)",sidebar_position:1,slug:"/rai-dashboard-ms-learn"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/rai-dashboard-workshop/docs/welcome"},next:{title:"Overview",permalink:"/rai-dashboard-workshop/docs/content-safety-overview"}},l={},d=[{value:"Use Case Overview",id:"use-case-overview",level:2},{value:"Data",id:"data",level:2},{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udfa5 Responsible AI dashboard capabilities and features")),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/G-nBfBNvtg4?si=ooYayi7fY-_SQdfk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h1",{id:"responsible-ai-dashboard-workshop"},"Responsible AI Dashboard workshop"),(0,n.kt)("p",null,"This workshop gives you a hands on experience on how to use an the Responsible AI dashboard from Azure Machine Learn to a trained classification model for diabetes hospital readmission. The lab will walk you through the steps of training a model, deploying it and then use the dashboard to debug and assess the model for fairness, inclusiveness, transparency, accountability and reliability concerns."),(0,n.kt)("h2",{id:"use-case-overview"},"Use Case Overview"),(0,n.kt)("p",null,"We will be using a Diabetes Hospital Readmission dataset to train a classification model that predicts whether a diabetic patient will be Readmitted or Not Readmitted back in a hospital < 30 days after being discharged. "),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("p",null,"We\u2019ll be using the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/Diabetes+130-US+hospitals+for+years+1999-2008#"},"UCI's Diabetes 130-US hospitals for years 1999\u20132008")," dataset"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Basic understanding of Machine Learning concepts"),(0,n.kt)("li",{parentName:"ul"},"If you're new to machine learning, we recommend you take the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/ML-For-Beginners"},"ML for Beginners")," before you start this workshop."),(0,n.kt)("li",{parentName:"ul"},"You do not need an Azure subscription to complete this hands-on workshop. MS Learn sandbox environment will provide Azure resources you need to complete this workshop.")),(0,n.kt)("h1",{id:"objectives"},"Objectives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work with an interactive UI dashboard to debug and mitigate model issues faster"),(0,n.kt)("li",{parentName:"ul"},"Produce AI systems that are more reliable and trustworthy"),(0,n.kt)("li",{parentName:"ul"},"Provide AI model explanability for compliance regulations or auditors better"),(0,n.kt)("li",{parentName:"ul"},"Helpful for decision-makers and stakeholders to be able to understand and make well informed decisions based on the model's outcomes and behavior")),(0,n.kt)("h1",{id:"duration"},"Duration"),(0,n.kt)("p",null,"Let's uncover the benefits of using Azure Machine Learning's Responsible AI dashboard in 1 hour."),(0,n.kt)("h1",{id:"lets-get-started"},"Let's get started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/train-model-debug-with-responsible-ai-dashboard-azure-machine-learning/"},"here")," to get started")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MS Learn",src:r(6578).Z,width:"912",height:"522"})))}p.isMDXComponent=!0},6578:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rai-dash-ms-learn-bd0cde3afcb64639bfc133d79b336bab.png"}}]);