# Multisource Combination Chart

![MultisourceCombination](./images/multisource-combination/multisourcecombination.PNG)

Multisource Combination Chart is a chart that combines different data sources onto a single combination chart, where the features of the different graphs would be used to display the information. Within GIANT, there are multiple options for data display, as each data source used could be set by using different graphic styles, making the multisource combination chart very versatile chart to work with. The chart is generally used to compare different data sources with one another to find the similarities for creating trends within the chart. The data represented is similar to how a regular combination chart works, where the bars or lines would represent different categories.

## Data Binding

For the multisource combination chart, the usage of multiple data sources is highly needed in the generation of the chart, thus the setting of **Source Bindings** is used to include several Source Connections into one chart.

### Source Bindings

This is the most integral field that needs to be used in order to even display the other settings, which is the **Source Bindings** setting, where adding a new connection source is done here.

> *NOTE:* Be sure that each data source added needs to have relevance to one another.

 Following on, there are a few mandatory bindings to generate the chart within each of the added connection sources which are the **X-Axis** and **Y-Axis** properties. However, for Multisource Combination Chart analysis to make sense, you will need to also fill in more than one **Y-Axis** field. For each property, there are specific data types need to fulfill in order for the combination chart to render correctly, such as can be seen below:

|Bindings |Data Type|
|---|---|
|X-Axis|String|
|Y-Axis|Numeric|

### X-Axis

A field with String data type can be used for **X-Axis** binding. This will be displayed as the Category values.

### Y-Axis

A field with numeric data type can be used for **Y-Axis** binding. The Y-Axis values would be filled in by numerous fields as the Combination chart requires more than one **Y-Axis** field to properly be generated.

## Other Settings

### All/Top/Bottom

This setting is used to focus on the amount of categories the user wants to see, whether it would be **All** of the chart, the **Top** number within the chart, or even the **Bottom** number of the chart. By default, this setting will be placed on **All** to display the full chart accordingly.

>*NOTE:* Once reverting back to the **All** option, the **X-Axis** will not be arranged according to the initial arrangement.

### Drill Down

If your data contains hierarchy (for example: Region > Country > State), you can use this field to drill down your data from the highest level to the lower levels.

### Sort

You can use this section to specify the order in which your data should be arranged. For example, to sort by Country in ascending order.

### Filter

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.

## Use Cases

### Annual and Monthly Budgeting for FY 2015 and 2016
As this is a multisource combination chart, two separate datasets would be used to generate the chart. Thus, FY documented their Annual and Monthly budgeting throughout the year of 2015 and 2016, which could be used within the Multisource Combination chart as the data sources are seperated in two:
- *Annual:* Download sample data [here](./sample-data/multisource-combination/AnnualBudgetForecast). 
- *Monthly:* Download sample data [here](./sample-data/multisource-combination/MonthlyBudgetForecast).

Provided within both dataset are the necessary fields needed to generate the multisource combination chart. The **Revenue** field could be used as both **X-Axis** setting, whereas the remainder of the fields should be listed down within the **Y-Axis** setting. The **Y-Axis** values should have tweaks within the settings as to display the current graph in a more understandable manner.

**Annual FY Dataset**

|Bindings |Field to Select|
|---|---|
|X-Axis|Revenue|
|Y-Axis (1st Area Graph)|Contract Monthly|
|Y-Axis (2nd Area Graph)|Non-Contract Monthly|
|Y-Axis (3rd Area Graph)|Other Monthly|
|Y-Axis (Line Graph)|Total Budget Monthly|

**Monthly FY Dataset**

|Bindings |Field to Select|
|---|---|
|X-Axis|Revenue|
|Y-Axis (1st Bar Graph)|Contract|
|Y-Axis (2nd Bar Graph)|Non-Contract|
|Y-Axis (2nd Bar Graph)|Other|

Displayed in the multisource combination chart is the total budget on the actual year and the forecasted year. The annual budget for FY15 and FY16 are displayed using the bar graphs, whereas the monthly budget for each month respectively is displayed using area graph, along with the expected total monthly budget represented by the line graph.

**Output**

![FY](./images/multisource-combination/output-1.PNG)

**Analysis**

By analysing the chart deeper, it is shown within the chart that the FY15 Actual bar graph results total up to be the same with the revenue budgeting from the Total Budget Monthly area graph from the months of July to December. This proves that the two datasets are related to one another, thus further analysis and predictions could be done within the chart. The FY16 Budget and Forecast bar graphs is used to predict the total budgeting that FY would need to have in order to run their following year smoothly, where a further detailed display on the monthly contract, non-contract and others are represented within the chart. From the multisource combination chart, FY could refer to the chart as their guidance for the following years ahead, where they could list down their current revenue expenses, and forecast what their budget would be.