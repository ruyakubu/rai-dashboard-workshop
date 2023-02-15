---
title: Find errors using Heat map
sidebar_position: 2
slug: /find-heatmap-errors
---

## Use Heat map to analysis feature contributing to higher error

From the Feature List, "Age" was one of the top error contributors. So, we'll use the Heat map tab to explore which age group of the patients are driving the model to perform poorly.

1. Under the Heat Map tab, select *"Age"* in the ***"Rows: Feature 1"*** drop-down menu to see what factor it plays in the model's errors. After selecting the *"Age"*, we can see how the dashboard has a built-in intelligence to divide the feature into different cells with the possible conditions (e.g., *"Over 60 years"*, *"30–60 years"* or *"30 years or younger"*). 

![select heat map feature](/img/tutorial/2-select-heatmap-feature.png "Select Heat map feature")

2. Hover your mouse over each cell, you can see the number of correct vs incorrect predictions, error coverage and error rate for the data group represented in the cell. 

3. Observe how the cell with *"Over 60 years"* has **536** correct and **126** incorrect model predictions. The error coverage is **73.81%**, and error rate **18.79%**. This means that out of 168 total incorrect predictions that the model made from the test data, 126 of the incorrect predictions came from *"Age==Over 60 years"*. Even though the error rate of 18.79% is low, an error coverage of 73.81% is a huge number. That means a majority of the model's inaccuracies come from data where patients are older than 60 years old. This is problematic.

![Age heat map metrics](/img/tutorial/2-age-heatmap-metrics.png "Heat map Age metrics")

* The cell with *"30–60 years"* has **273** correct and **25** incorrect model predictions. The error coverage is **25.60%**, and error rate **13.61%**. Even though, the patients with *"Age"* equal to 30–60 years" have a very low error rate, the error coverage of 25.60% is a quarter of all the model's error, which is an issue.
* The cell with *"30 years or younger"* has **17** correct and **1** incorrect model predictions. The error coverage is **0.60%**, and error rate **5.56%**. Only having 1 incorrect model prediction is insignificant. Plus, both the error coverage and error rate are low. It's safe to say the model is performing very well in this cohort, however we have to also consider that its total data size of 18 is a very small sample size.

Since our observation shows that *Age* plays a significant role in the model's erroneous predictions, we are going to create cohorts for each age group for further analysis in the next lab.

***Cohort #3:*** *Patients with "Age == Over 60 years"*

Similar to the Tree map, to create a cohort from the Heat Map take the following steps:

1. Click on the *"Over 60 years"* cell. You'll see a blue border around the square cell.

2. Next, click on the **"Save as a new cohort"** button at the top right-hand corner of the Error Analysis section. A new pane will pop-up with a summary of new cohort, which includes error coverage, error rate, correct/incorrect prediction, total data size, and filters in the data feature.

3. In the "Cohort name" box, enter "Age==Over 60 years". 

4. Then click on the "Save" button to create the cohort.

5. To deselect the cell, click on it again or click on the "Clear all" button.

6. Repeat the steps to create a cohort for each of the other two Age cells: 
* ***Cohort #4:*** *Patients with "Age == 30–30 years"*
* ***Cohort #5:*** *Patients with "Age <= 30 years"*

