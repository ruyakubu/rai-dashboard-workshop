"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"cs-intro",title:"Overview",sidebar_position:1,slug:"/content-safety-overview"},i="Overview",s={unversionedId:"azure-content-safety/cs-intro",id:"azure-content-safety/cs-intro",title:"Overview",description:"As we build applications that engage with people, it\u2019s vital that the content that is displayed to the end-user is not harmful or offensive.  In this workshop you will learn how to use the prebuilt AI service, Azure Safety Content, in your applications to ensure that the texts or images that are sent to the user or the user enters do not contain data that has violence, self-harm, hate or sexual information.  In addition, based on the demographic of the end-users that interact with the application, developers can control what content is acceptable based on the sensitivity level of the inappropriate content. The services support multiple languages and multiple industries such as gaming, e-commerce, social media, education, etc.",source:"@site/docs/azure-content-safety/intro.md",sourceDirName:"azure-content-safety",slug:"/content-safety-overview",permalink:"/rai-dashboard-workshop/docs/content-safety-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cs-intro",title:"Overview",sidebar_position:1,slug:"/content-safety-overview"},sidebar:"mySidebar",previous:{title:"1. RAI dashboard (lesson & lab)",permalink:"/rai-dashboard-workshop/docs/rai-dashboard-ms-learn"},next:{title:"Lab# 1: Create Azure Content Safety",permalink:"/rai-dashboard-workshop/docs/content-safety-resource"}},l={},c=[{value:"At the end of the workshop, you will:",id:"at-the-end-of-the-workshop-you-will",level:2},{value:"Perquisites:",id:"perquisites",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As we build applications that engage with people, it\u2019s vital that the content that is displayed to the end-user is not harmful or offensive.  In this workshop you will learn how to use the prebuilt AI service, Azure Safety Content, in your applications to ensure that the texts or images that are sent to the user or the user enters do not contain data that has violence, self-harm, hate or sexual information.  In addition, based on the demographic of the end-users that interact with the application, developers can control what content is acceptable based on the sensitivity level of the inappropriate content. The services support multiple languages and multiple industries such as gaming, e-commerce, social media, education, etc. "),(0,a.kt)("p",null,"There are several challenges in having a staff of moderators to review the content. The limitations are difficult to manually inspect the enormous amount of text or images. Another challenge is that the staff that are evaluating the text are subjective, insistent on what they classify as a violation, or it can be time consuming. Using the Content Safety AI service makes it possible to catch issues faster and more efficiently. This reduces unnecessary manual repetitive tasks and potentially errors. In addition, the API service has built-in profanity detection.\nWith the vast use of generative AI, there are user input prompts and dynamic AI-generated responses, Azure Content Safety serves as a useful tool to safeguard content that can be risky or undesirable."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4510).Z,width:"853",height:"480"})),(0,a.kt)("h2",{id:"at-the-end-of-the-workshop-you-will"},"At the end of the workshop, you will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn how to detect and flag text that are unsuitable for end-users."),(0,a.kt)("li",{parentName:"ul"},"Learn how to block images that are inappropriate."),(0,a.kt)("li",{parentName:"ul"},"Learn how to create applications with a safe and friendly tone. ")),(0,a.kt)("h2",{id:"perquisites"},"Perquisites:"),(0,a.kt)("p",null,"The Content Safety API can be used in different programming languages. For this lab, we\u2019ll be using Python."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of Python."),(0,a.kt)("li",{parentName:"ul"},"Login or sign up for a ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/"},"Free Azure account"),".")))}h.isMDXComponent=!0},4510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cs-severity-levels-e2a871468b7403d6b5e7a4f624b12ba7.gif"}}]);