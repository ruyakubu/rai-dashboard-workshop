"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1684],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||a;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6414:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot to use your data",sidebar_position:4,slug:"/chatbot-with-your-data"},i=void 0,l={unversionedId:"azure-prompt-flow/lab5-chatbot-with-your-data/pf-chatbot-with-your-data-lab5'",id:"azure-prompt-flow/lab5-chatbot-with-your-data/pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot to use your data",description:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In the exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user.",source:"@site/docs/azure-prompt-flow/lab5-chatbot-with-your-data/lab5-chatbot-with-your-data.md",sourceDirName:"azure-prompt-flow/lab5-chatbot-with-your-data",slug:"/chatbot-with-your-data",permalink:"/rai-dashboard-workshop/docs/chatbot-with-your-data",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot to use your data",sidebar_position:4,slug:"/chatbot-with-your-data"},sidebar:"mySidebar",previous:{title:"Lab# 4: bring your own data",permalink:"/rai-dashboard-workshop/docs/bring-your-data"},next:{title:"Lab# 6: Run custom chatbot",permalink:"/rai-dashboard-workshop/docs/run-custom-chatbot"}},s={},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the precise exercise you create a vector index and train to search for your vector embeddings.  In the exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user."),(0,r.kt)("p",null,"We'll be using the following tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Embedding"),": converts text to number tokens.  Store to token in vector arrays based on then relation to each other."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vector index lookup"),": Takes user input question and queries the vector index with the closest answers to the question."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prompt"),": enters user to add rules on the response show be sent to user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LLM"),": provides the LLM prompt or LLM model response to user")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Prompt Flow service for Visual Studio code, by clicking the icon.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4594).Z,width:"847",height:"287"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"TOOLS")," toolbar, select the ",(0,r.kt)("strong",{parentName:"li"},"Embedding")," tool by clicking on plus icon ",(0,r.kt)("strong",{parentName:"li"},"+"),".  ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(7888).Z,width:"358",height:"427"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Name")," for the node (e.g. embed_question) in the pop-up entry on top of the page. Then press ",(0,r.kt)("strong",{parentName:"li"},"Enter"),".  This will generate a new Embedding section at the bottom of the flow.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4939).Z,width:"945",height:"406"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"AzureOpenAIconnection")," name you created earlier."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Text-embedding-ada-002")," deployment name you created earlier"),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Input"),", select ",(0,r.kt)("em",{parentName:"li"},"${inputs.question}"),".  This should create a node under the input node.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2554).Z,width:"1255",height:"422"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vector Index Lookup*")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"TOOLS")," toolbar, select the ",(0,r.kt)("strong",{parentName:"li"},"Vector Index Lookup")," tool by clicking on plus icon ",(0,r.kt)("strong",{parentName:"li"},"+"),".  "),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Name")," for the node (e.g. search_vector_index).  This will generate a new ",(0,r.kt)("strong",{parentName:"li"},"Vector Index Lookup")," section at the bottom of the flow."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Path"),", copy and paste the Datastore URI you retrieve earlier for the vector index."),(0,r.kt)("li",{parentName:"ol"},"Select the embedding output as the ",(0,r.kt)("strong",{parentName:"li"},"query")," field (e.g. ",(0,r.kt)("em",{parentName:"li"},"${embed_question.output}"),")."),(0,r.kt)("li",{parentName:"ol"},"Leave default value for ",(0,r.kt)("strong",{parentName:"li"},"top_k"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Feel free move the nodes around to make it easier to view the flow."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(5335).Z,width:"1280",height:"327"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Construct Prompt")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"TOOLS")," toolbar, select the ",(0,r.kt)("strong",{parentName:"li"},"Prompt")," tool by clicking on plus icon ",(0,r.kt)("strong",{parentName:"li"},"+"),".  This will generate a new Prompt section at the bottom of the flow."),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"Name")," for the node (e.g. generate_prompt).  This will generate a new Prompt section at the bottom of the flow."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},".jinja2")," link to open the prompt editor.  This will open a new tab in the editor."),(0,r.kt)("li",{parentName:"ol"},"Delete all the text in the file.  Then, copy the following text in the Prompt textbox:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"system:\nYou are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the potential answers, simply respond with \"I don't know.  \n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(524).Z,width:"1284",height:"380"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Close the .jinja2 prompt editor tab.  Then return to the flow.dag.yaml tab."),(0,r.kt)("li",{parentName:"ol"},"In your prompt section of the flow, you would see the prompt flow automatically generated the input fields from the placeholder fields in your .jinja2 file."),(0,r.kt)("li",{parentName:"ol"},"Select ${inputs.question} for the ",(0,r.kt)("strong",{parentName:"li"},"question")," field."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"contexts"),", select ${Search_Vector_Index.output}."),(0,r.kt)("li",{parentName:"ol"},"Select the ${inputs.chat_history} for ",(0,r.kt)("strong",{parentName:"li"},"chat_history"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(9965).Z,width:"1375",height:"399"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"chat")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"chat")," node and drag it below the ",(0,r.kt)("strong",{parentName:"li"},"generate_prompt")," node.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(7301).Z,width:"350",height:"424"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"chat")," to scroll up to the ",(0,r.kt)("em",{parentName:"li"},"chat")," section."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},".jinja2")," link for the chat to open the prompt editor.  This will open a new tab in the editor.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2815).Z,width:"669",height:"347"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Delete all the text in the file.  Then, copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{{prompt_response}}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Close the ",(0,r.kt)("strong",{parentName:"li"},".jinja2")," prompt editor tab.  Then return to the ",(0,r.kt)("strong",{parentName:"li"},"flow.dag.yaml")," tab."),(0,r.kt)("li",{parentName:"ol"},"In your chat section of the flow, you would see that prompt flow automatically generated a ",(0,r.kt)("strong",{parentName:"li"},"prompt_response")," input fields from the placeholder fields in your .jinja2 file."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"prompt_response")," value, select ${generate_prompt.output}.")))}h.isMDXComponent=!0},4939:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-embedding-node-0efbf0e16d5b7aecbd917dbb955d6616.png"},2815:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chat-jinja2-e12c302331fc29bfd646c7b0eb1c54e0.png"},7301:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/chat-node-a559006b1f5cfc83dbb2123788e5a588.png"},524:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/construct-prompt-2291b048c217c92e7eb6f6e70ba458fc.png"},2554:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/embed-section-501e2e6ad73e06ca25adc198f0938cd5.png"},7888:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/flow-tools-480fe56a56c497cfde43713c215a0380.png"},9965:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prompt-inputs-81c8855deaaa1bac67e7889b32600803.png"},4594:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/promptflow-icon-5bc755d099b85202709ae9aabb71b857.png"},5335:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/search-vector-88b150e9f60372e4d3085f7752d00b11.png"}}]);