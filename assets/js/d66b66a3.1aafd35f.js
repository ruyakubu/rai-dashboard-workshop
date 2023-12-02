"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||y[h]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",sidebar_position:4,slug:"/content-safety-analyze-text"},i=void 0,l={unversionedId:"azure-content-safety/lab4-analyze-text/cs-analyze-text-lab4'",id:"azure-content-safety/lab4-analyze-text/cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",description:"When dealing with text, it is either user or application generated. With Generative AI, we need to be mindful that the text to be examined is either user input prompts or AI generated responses. For example, one of the challenges of using social media or Chat applications to a demographic of high school students is that it introduces system vulnerabilities for users to enter text that have profanity, bullying, harassment, derogatory implications etc.",source:"@site/docs/azure-content-safety/lab4-analyze-text/lab4-analyze-text.md",sourceDirName:"azure-content-safety/lab4-analyze-text",slug:"/content-safety-analyze-text",permalink:"/rai-dashboard-workshop/docs/content-safety-analyze-text",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"cs-analyze-text-lab4'",title:"Lab# 4: Analyze Text",sidebar_position:4,slug:"/content-safety-analyze-text"},sidebar:"mySidebar",previous:{title:"Lab# 3: Setup Azure connections",permalink:"/rai-dashboard-workshop/docs/setup-azure-connections"},next:{title:"Lab# 5: Analyze Image",permalink:"/rai-dashboard-workshop/docs/content-safety-analyze-image"}},s={},c=[],p={toc:c},u="wrapper";function y(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5753).Z,width:"2111",height:"891"})),(0,r.kt)("p",null,"When dealing with text, it is either user or application generated. With Generative AI, we need to be mindful that the text to be examined is either user input prompts or AI generated responses. For example, one of the challenges of using social media or Chat applications to a demographic of high school students is that it introduces system vulnerabilities for users to enter text that have profanity, bullying, harassment, derogatory implications etc. "),(0,r.kt)("p",null,"Let\u2019s explore how the Content Safety API handles text."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("em",{parentName:"li"},"text_content_safety.ipynb")," notebook."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Select Kernel")," on the upper right of the notebook."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Python Environments")," in the kernel drop-down menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4032).Z,width:"1908",height:"401"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Choose the conda ",(0,r.kt)("strong",{parentName:"li"},"Python 3.8")," kernel."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Run All")," to execute the ",(0,r.kt)("em",{parentName:"li"},"text_content_safety.ipynb")," notebook."),(0,r.kt)("li",{parentName:"ol"},"Verify that all cells ran successfully."),(0,r.kt)("li",{parentName:"ol"},"In cell #3, the input_text set to ",(0,r.kt)("em",{parentName:"li"},"\u201cYou are stupid.\u201d")),(0,r.kt)("li",{parentName:"ol"},"In the last cell, you\u2019ll see that the Content Safety API found the input text to be \u201cHate\u201d content with a severity of 2."),(0,r.kt)("li",{parentName:"ol"},"Now try changing the input_text to your own text and see what the output will be.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": you can add code on how you want the application to behavior or what warning message to display, based on the severity level."))}y.isMDXComponent=!0},4032:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cs-select-kernel-python-env-bc827fd661f3b3df9a404b9e2f015f5e.png"},5753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cs-text-filter-70ac8b039aefd48a47221ae6a01eeb01.png"}}]);