"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[856],{3905:(e,t,A)=>{A.d(t,{Zo:()=>h,kt:()=>p});var a=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function s(e,t){if(null==e)return{};var A,a,r=function(e,t){if(null==e)return{};var A,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)A=o[a],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)A=o[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var n=a.createContext({}),l=function(e){var t=a.useContext(n),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},h=function(e){var t=l(e.components);return a.createElement(n.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var A=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=l(A),m=r,p=c["".concat(n,".").concat(m)]||c[m]||d[m]||o;return A?a.createElement(p,i(i({ref:t},h),{},{components:A})):a.createElement(p,i({ref:t},h))}));function p(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=A.length,i=new Array(o);i[0]=m;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=A[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,A)}m.displayName="MDXCreateElement"},7363:(e,t,A)=>{A.r(t),A.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>n});var a=A(7462),r=(A(7294),A(3905));const o={title:"Analyze dataset cohort",sidebar_position:1,slug:"/analyze-dataset-cohort"},i="Model Overview",s={unversionedId:"lab2-model-overview/analyze-dataset-cohort",id:"lab2-model-overview/analyze-dataset-cohort",isDocsHomePage:!1,title:"Analyze dataset cohort",description:"Part of evaluating the performance of a machine learning model is getting a wholistic understanding of its behavior.  This sometimes involves doing comparative analysis helps shed light on how the model is performing with one subgroup of the dataset vs another.   In some case feature-based analysis is necessary to isolate the data and pinpoint the root cause of some of the errors.",source:"@site/docs/lab2-model-overview/analyze-dataset-cohort.md",sourceDirName:"lab2-model-overview",slug:"/analyze-dataset-cohort",permalink:"/rai-dashboard-workshop/docs/analyze-dataset-cohort",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/lab2-model-overview/analyze-dataset-cohort.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Analyze dataset cohort",sidebar_position:1,slug:"/analyze-dataset-cohort"},sidebar:"tutorialSidebar",previous:{title:"View and manage cohort list",permalink:"/rai-dashboard-workshop/docs/manage-cohorts"},next:{title:"Analyze feature cohorts",permalink:"/rai-dashboard-workshop/docs/analyze-feature-cohort"}},n=[{value:"Review and compare model performance metric table",id:"review-and-compare-model-performance-metric-table",children:[]},{value:"Examine the Probability distribution chart",id:"examine-the-probability-distribution-chart",children:[]},{value:"Review the Metric visualization chart",id:"review-the-metric-visualization-chart",children:[]},{value:"Look at the Confusion Matrix",id:"look-at-the-confusion-matrix",children:[]}],l={toc:n},h="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-overview"},"Model Overview"),(0,r.kt)("p",null,"Part of evaluating the performance of a machine learning model is getting a wholistic understanding of its behavior.  This sometimes involves doing comparative analysis helps shed light on how the model is performing with one subgroup of the dataset vs another.   In some case feature-based analysis is necessary to isolate the data and pinpoint the root cause of some of the errors."),(0,r.kt)("p",null,"In this lab we will explore how to use the Model Overview section of the Azure Responsible AI (RAI) dashboard. We will use the cohorts created from the Error Analysis lab to investigate why the model\u2019s behavior is better in one cohort vs another cohort."),(0,r.kt)("h2",{id:"review-and-compare-model-performance-metric-table"},"Review and compare model performance metric table"),(0,r.kt)("p",null,"In the previous lab, you used the Error Analysis tool of the RAI dashboard to discover cohorts where the model had the highest error rates as well as cohort with the lowest errors. Now, you are going to investigate why the model\u2019s behavior is better in one cohort vs another cohort using the Model Overview."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset cohort metrics",src:A(5118).Z,title:"Dataset cohort metrics"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Model Overview, select the \u201cDataset Cohorts\u201d pane. This displays the different cohorts created in a table with the model metrics.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compare the cohort with the most errors ",(0,r.kt)("strong",{parentName:"p"},"\u201cErr: Prior_Inpatient > 0; Num_Meds > 11 and \u2264 21.50\u201d")," verse the least errors ",(0,r.kt)("strong",{parentName:"p"},"\u201cPrior_inpatient = 0; num_diagnose \u2264 6.50; lab_procedures < 56.50\u201d"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hover the mouse over the box plot line on the chart to see the measurement details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Observe that the accuracy score for the erroneous cohort is 0.66, which is bad. The False Positive rate is very low; meaning the model is not performing well predicting patients that are going to be Readmitted back to the hospital in 30 days. "),(0,r.kt)("p",{parentName:"li"},"Contrarily, the False Negative rate of 0.754 is high. Meaning, a majority of patients that the model is predicting has a high rate of predicting patients that will not be readmitted as readmitted in 30 days back to the hospital.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, look at the metrics for the cohort with the least errors has an accuracy score of 0.94, which is far better than the overall accuracy score of the model with all the data. However, this cohort also has a low  False positive rate at 0."))),(0,r.kt)("h2",{id:"examine-the-probability-distribution-chart"},"Examine the Probability distribution chart"),(0,r.kt)("p",null,"The Probability distribution chart shows the model\u2019s probability predicting if patients in the cohorts  will be Readmitted or Not readmitted back to the hospital within 30 days."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset cohort metrics",src:A(1830).Z,title:"Dataset cohort metrics"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compare the probability of the patients not being readmitted for all 3 cohorts."),(0,r.kt)("li",{parentName:"ol"},"You'll see that the \u201cAll data\u201d cohort with all the patients test dataset, show that a majority of the patients will not be readmitted back in the hospital within 30 days, with a median probability of patients not readmitted at 0.854 and upper quartile at 0.986, which is good. We would not want a high frequency of patients being readmitted back to a hospital in a few days after being discharged."),(0,r.kt)("li",{parentName:"ol"},"Next, the cohort with the highest error rate:  Err: Prior_Inpatient >0; Num_meds >11.50 & <= 21.50, shows a slightly lower probability at 0.89 and a median of 0.719. "),(0,r.kt)("li",{parentName:"ol"},"Lastly, the cohort with the least error rate: Prior_Inpatient = 0; num_diagnoses <= 6.50; lab_procedures <= 56.50,  show a probability of patients not readmitted has a median of 0.90 and upper quartile of 0.986. "),(0,r.kt)("li",{parentName:"ol"},'To change the chart to show the probability of patients being Readmitted for the 3 cohorts, click on the "Choose Label" button on the x-axis.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset y-axis readmitted",src:A(3953).Z,title:"Dataset cohort Y-axis Readmitted"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},'Select the "Probability:  Readmitted" radio button. On the pop window pane.'),(0,r.kt)("li",{parentName:"ol"},'Then click on "Apply" button.'),(0,r.kt)("li",{parentName:"ol"},"Compare the probability of patients being Readmitted for the 3 cohorts")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset cohort metrics",src:A(2581).Z,title:"Dataset cohort metrics"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"You see that 3 cohort have a probability of being readmitted less than 0.55.  The cohort will the least number of model errors has the lowest probability of 0.179.  The cohort with the most errors has the highest probability at 0.543.")),(0,r.kt)("h2",{id:"review-the-metric-visualization-chart"},"Review the Metric visualization chart"),(0,r.kt)("p",null,"Now let's get a deeper understanding of the model's performance by switching to the Metric visualizations pane. Since you've already reviewed the accuracy score under the \"Dataset Cohort\" above, you'll explore what other metrics can show about the 3 cohorts."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Metric visualizations tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To choose another metric, click on the "Choose Label" on the x-axis to choose "Precision score" from the list of other available metrics.  Then click on the "Apply" button.\n',(0,r.kt)("strong",{parentName:"p"},"Note"),":  Since the trained model is a classification problem, the RAI dashboard will display only classification metrics."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset cohort precision metrics",src:A(9827).Z,title:"Dataset cohort precision metrics"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From reviewing the chart, you will see that the model performance for all test data cohort and erroneous cohort is correct at ~70% of the time. The Precision score rate for the least erroneous cohort is 0.94 for patients with no prior hospitalization and the number of diagnoses is less than 7. This is consistent with the accuracy score.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally,  change the metric to \"Recall\" to see how well the model was able to correctly predict that the patients in the cohorts will be readmitted back in the hospital in 30 days. The recall shows that the model's prediction was correct less than 25% of the time for all the cohorts for patients being readmitted. This reveals that the model's predictions are not correct a majority of the time when trying to predict patients that will be readmitted within 30 days."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset cohort recall metrics",src:A(1036).Z,title:"Dataset cohort recall metrics"})),(0,r.kt)("h2",{id:"look-at-the-confusion-matrix"},"Look at the Confusion Matrix"),(0,r.kt)("p",null,"The Confusion Matrix is helpful to check the rate of the model correctly making the right prediction. This will reveal how well the model is learning for cases where the patient is Readmitted back in the hospital within 30 days vs Not Readmitted."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click on the "Confusion matrix" tab.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset confusion matrix",src:A(6501).Z,title:"Dataset confusion matrix"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'You will observe that the model is performing better with patient that are "Not Readmitted" compare to "Readmitted".  The number of True Negative should be more that False Positive.')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of True Positive (TP) is:  802"),(0,r.kt)("li",{parentName:"ul"},"The number of False Negative (FN) is: 9"),(0,r.kt)("li",{parentName:"ul"},"The number of False Positive (FP) is: 159"),(0,r.kt)("li",{parentName:"ul"},"The number of True Negative (TN) is: 24")))}c.isMDXComponent=!0},5118:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-dataset-cohort-metrics-229c419e495e3139e8844e37e9cf3a2f.png"},6501:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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qqsdUZOUQghb1q0bOaX8z/0KXy6wkq6J9+MPPnT87jcdIMrK8/ff9kih6EkIfUVre/ov57/hzGn9QjCbAXq57R1ZobX5ZX/rim2lkNvtVDnFdO8ne84KS59ZtmlTy1veOKNi2jkPzV20NS3NHHXY6XOOfejReYV+Uyr//AnoyT5PLR1jzNI0yeVjlubKDpgxwrWrn//D8+UjBlR4FkJfkORCvqJqzuQBpUxdQe/X0pHGju1Dhwze2x06Stknf7dh9yHCYhb/+eRhYwbt4VhU97l0upun62hSsuP6ziNgr2AEb9/LWl399c8vWr7unH/85JM3X/2RT37+QCmsGOOIYf3GDav2LIQ+YlNTmnknDrCrqNK4+yn+uo5g7flbxK577V5Re7v+GgVWTJ/eHN4865jWttaWjo4Yd/sqAAB6qlIWugOrO15K2X6dPbCvwErypxw57L7HliaLl489Yma5c+UAAAdGYMXd52Dt5/kD+xwijGec97envauYxlBRUd41HGmXAQA93R8tNJqENEt6yrkIu91x+28LWWxt2HT//KXfvOzL+goA6PmKWZbbdVgohuL+naS5zzlYYdYbT4ohJLH4zJOL0yzkjBICAD1bDKGU7limoXv47eWWaXgdAiuJX/7i51sKpRBC7eiJZeoKADgQlLJd7yKM+zoX4f4PrBizmmGXXHJRVS4mSRJNwgIADozACjuGCLv+6GFDhEmuYvuGH13742GDapIkd9bZZ8srAKCniy9+F2Hac4YIY1basGHTm057e6GUdq1haoAQADgwdL+LMNm1DlbsOetgtTdecem3v/DVLzhqBQAcWIpZzCdJ3NFXsZTt18J62cBKkmLr5su+8Y3uj3K5/Ec//vG82gIAerbYNck92zFE2NlYxTRmoYcEVojllQPmzJmzM7fMbwcAeq6WlpZ+/fp1X++ag5XsDKzuI1g95V2ESXX/wW84+mhdBQD0fHfffff06dNHjRrVPQcr7prkHvf3uQhfdt561ZBPfPKf7C0A4EBxyy23bNiwIXStLFpMw45L1pPORZgkSVVVlV0FABwokiS5+eabJx85rRRH5HY7aNXD1sECADiglJeX19YOK6XdK7knoWugME1DjPtv0pOlrQCA3iNJklNOOWXixIlpFrsuWZrGNI0lR7AAAF6BysrK8847r3///q3FrJDGfG7Xuwi7T/Yc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z+vrhi74wZCZH9i26CePt0/96qc+evON121t2H7+hz9y7VVXTTp6cmPm/afwesrSYt3o8ePyLYsa2/7wq+s2tmbb22re99ezH7jvwQXPrPrnC/7+yiu/f+TEEVnnz6/m6697oKF+0ahj/2LuLVf//ef+41c/v+Z/fejD3/rOVXXDPnb5pZ/rP+WtbasfX76pcV1j8sG3HPbT3y88aHCc+qapNjL7gSNY9MDCyl1z2d98/bLvl5WVNa158IS3nHHumSd/8WNfGT12wqlvmtV9l63bmo86flZ547Ky6n4tC+fNe7Zp8MihA8vbHnpm7Y3Xfv6d7/yrMSNrQxJatjWd/JdnNmx4atac0674w4Oh1NHUlp547LGn/uVxRxx60AmnvK2ybdWm9nxpzZp7F62Ldce95cRThlX6rQNe128AIXfTj7/1rV8++v45k7/whd+MmTj2iRtuKquoHnnQqCeefqpUap540ltm/+WcyvIkhFg34bCTjqlbtjU/ffyax1ZvbNnenK8cOOP4v5h82MHHTx07beKoL3/v1gnjRz/+o+sv+39fOfmMc0+acbRfoRBY9F1DJr75rRParrj1uf51R61YWb9i2TPHn/eOKTVJS9vOY/u5JMQ4qO6ghvzwT179rRnDt5/3Pz555OQxpbaOgyfMSIsd69dv6lobJdn5LI+lELsXTakePqSYpgOGDNu4pSE3YFR55aALP/epkycPfG7ZkpA2rGm1OC28nmLI3vG+j/7L/5zzwS/8cNZR6dCDjrnkuiuu/NC5NaOn1A2sTMqqly5f175xTWtbsesVncUY8p1Xws7xwKShozGEMKB2RBbCzLHVNWOm/8ev/3PGjJGr1qxbt/I5SxOxn35VsA4WPU1D/coBI8flk2zuQ48dN2vG0icXtqYVx0ybUti+8YkVW6cfdXgIYdHixROnTK0pS5Y9tag1Vk6Zctj655+oHjxq4/qth08eP++J5ypy2aQjj6qfO//Qmcc+9+zTEycd9siy+mlDc6taKyeNHPDYkpXHTj1k3qPzph17fP2KJdva4hFHTFn77OJi1eBky+ZJx063F+D10rp5TXMcVDe838P33HfC7FkLFjw2bNTBI4eWPfls/YiBVbmBoxtWL6mqrdu6ddux0yZvbShWZNu2FAdUtT+bq53asnHVuEMmLV28YMDIicMq003tubHDax5f8NjA4eMOGTfisbnzRow+aMiwkTWVedsZgQUAcIAxRAgAILAAAAQWAIDAAuhZYozFUvon3zkrFIov+vTu+aZpqZhmFvIG/ttZ8gd4nW1cvvALl/+goqLy7ee8f85xR+zxPmlH4/d/s+jkUe13L0///r2n7QqpbU2tQwf1f9Gdk/ZNn/3qzy7+9IXdHz7wu1/+8rf3x5jOPO28EdsXh8Pe9hfTxtnsgMACerO0VEwGjL7wvDd+66a7R+Q2bWgojJ08vX3tE/OXrj7nPe+pjK2/uuW29pjE8tE1AwbV1WZtTRt/89s7WrKKaRNrf/6buWeddfYRo6pvuv3uk/7itIljhz70h9vXbWnadSLKjc89cvO9T3/24kuq87Ejyz1068J8CPfdefuyNesnH3PicZNH3nLTre35Ae9+11n33n7L8nVb33LWOeOH9bNTgFfJECHwektCqWP7Pfc/MvmIKcsWP3L/48tzTcuuvemug0cPuu2hpb+/4UcrWysnjRoSQ2jcsmHFmo1XfeMrreW1J0w/akjtyP61dRNGDbzq25dPHDfiez/4+apnHr/ujoVjaqvTdEdhPbv4iYMmTR1YU1leWdW/uqJroDCmFTWTxw/76bU/fe7R25dsaJ82ZWKM2S13zp129DFV5Rb6BgQW0CsKKy0WjnzjX33gHXMKae6Mv353x8bnGxu33Xn3Iy1Nzc8+X3/C7JPfcNzxSQhJkuSTsLK++eRTTjps8uEHjR4zuG7MqEFlq+q33X7X/VWVcdmy5QdPmz1z1gnlOxeSrKmuamttedG/t3TBg7/9w8Nl+WTS8W+raFz2s5t+W4rJzCnDr7nm2s3NHfYH8OoZIgRebzFWDRh+9JETd3wQ4xEnnX7I3Y8NGDm+vCw3c8YbfnHVZbdXpHXTTw8hZDF55xknfveyS0cNH3LWueevmH/3fYeOPvutb3xqcynLcpOOPPqGr1zx2Sf7F3J13Y99zKnnzL30S5+9+Gu1NbFu8knD8rkY47Ortx40Zti2Fevn/9evqoePb1y9smF7x8bW/Mghlc8sW3fkmCH2CfBqf3G0kjvw+ip2tK7f0jx2dGcSNWzeUDGwtqairNjRunzFytHjDhlQU7l6xbKKgbX5fFm/slJTR1JXO2jNymWFUDl+3EH1K5eXD6itqx209OmnBw6tGzVi6LaNa9PyfsWOwqiRI7p6LYRYXLFseZqrHD9ubKG1MVQOaGtYX8r3yxebBw0dtnr1mgFDR9XVDly9ckWaq5owdlSMMUkMFAICCwCgJ/n/AQAA//+F5ruWBBelMAAAAABJRU5ErkJggg=="},2581:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-dataset-probab-distrib-readmit-54d31121c3de5dd66d63719e346dfad8.png"},1830:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-dataset-probability-distrib-4be2b042477bc75b595780c9e9cc5b98.png"},1036:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-dataset-recall-df9431d7893a7e0ac06f1445a0bb5c2c.png"},3953:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-dataset-y-reamitted-a823200df09bf3d043e558f394308354.png"},9827:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/4-select-dataset-precision-e11bf751815664028c1c1229ebc387a7.png"}}]);