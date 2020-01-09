# Combination Chart

![Combination](./images/combination-chart/combination.PNG)

Combination Chart is a chart that combines the features of the different graphs into a single chart. Generally, the combination chart is a mix of a bar graph and a line graph, and there are options available to display the data points such as data markers and area graph. Combination charts are most useful when you have multiple measurements to show in a single chart, and this may involve more than one analysis type. For example, you may want to show Total Sales Amount as Line chart to analyse the sales trend and at the same time, view the Number of Transactions as Bar chart to compare the figures, both analysis by monthly. In this case, using Combination Chart will enable you to achieve it.

## Data Binding

For the combination chart, there are a few mandatory bindings to generate the chart which are the **X-Axis** and **Y-Axis** properties. However, for Combination Chart analysis to make sense, you will need to also fill in more than one **Y-Axis** field. For each property, there are specific data types need to fulfill in order for the combination chart to render correctly, such as can be seen below:

|Bindings |Data Type|
|---|---|
|X-Axis|Text|
|Y-Axis|Numeric|

### X-Axis

A field with Text data type can be used for **X-Axis** binding. This will be displayed as the Category values.

### Y-Axis

A field with Numeric data type can be used for **Y-Axis** binding. When you have only one data column bound to the Y-Axis, the chart will look like a Column, Line or Area chart (if you choose to show the data points as Bar, Line or Area chart type). When you have more than one data column bound to the Y-Axis, you can configure the Chart Type for each of the column selected, depending on the analysis required.

## Other Settings

### All/Top/Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows OR selected number of bottom-most data rows.

### Drill Down

If your data contains hierarchy (for example: Region > Country > State), you can use this field to drill down your data from the highest level to the lower levels.

### Sort

You can use this section to specify the order in which your data should be arranged. For example, to sort by Country in ascending order.

### Filter

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.

## Use Cases

### ABC's Financial Performance
This dataset shows the revenue and profit margin of ABC company throughout the year of 2015 to 2019. A combination chart can be used to plot the annual revenue of the company and show how the profit margin changes yearly. Download sample data [here](./sample-data/combination-chart/abc-financial-performance.xlsx).

Refer below on the field bindings used for the creation of the combination chart. For the **X-Axis** setting, the **Year** field is used since we need to analyse the data by yearly. The columns **Rainy Days** and **Profit Margin** fields are used for the **Y-Axis** as we want to analyse both figures in the same chart.

|Bindings |Select| Chart Type|
|---|---|---|
|X-Axis|Year|Not Applicable|
|Y-Axis|Revenue|Bar Graph|
|Y-Axis|Profit Margin|Line Graph|

From the chart analysis, it can be concluded that although ABC company receives a low amount of revenue within some years, it can still manage to gain a high profit margin within the same years respectively. For example, the year 2019 shows the biggest difference between the total revenue gained against the profit margin calculated, noting that there could be other internal or external aspects of ABC company that could be affecting the profit margin drastically.

**Output**

![Financial Performance](./images/combination-chart/output-1.PNG)

### Newrock Funland's Profits on Rainy Days
Newrock Funland theme park has a dataset that stores the information of their monthly profits with the total amount of rainy days within the month. A combination chart can be used to compare the different outcomes of each month by utilising the line and bar graph. Download sample data [here](./sample-data/combination-chart/nf-rainyprofits.csv).

Provided within the dataset are the necessary fields needed to generate the combination chart. The **Rainy Days** and **Profit** fields are used for the **Y-Axis** field, and the **Month** field is placed in the **X-Axis** field.

|Bindings |Field to Select|Chart Type|
|---|---|---|
|X-Axis|Month|Not Applicable|
|Y-Axis|Rainy Days|Bar Graph|
|Y-Axis|Profit|Line Graph|

Displayed in the combination chart is the profit margin vs rainy days that occur monthly for Newrock Funland. As there are more rainy days that occur, Newrock Funland gained less profit within the month respectively. During the non-rainy seasons such as seen from May to October, the profits gained are much better which may correspond to higher number of customers visits.

**Output**

![Newrock Funland](./images/combination-chart/output-2.PNG)

**Analysis**

By analysing the chart deeper, it can be seen that the monthly profit gained by Newrock Funland is inversely proportional with the amount of rainy days that occur within the month. The Profits are much less when there are more rainy days in a month. From this, the theme park management can refer to the combination chart trends to prepare for contigencies or back up plans to gain profit during the rainy season from November to April. Not only that, by knowing in which months more profit is collected, it can be assumed that there is a higher customer count that visits the theme park. The management can then set up other alternatives to gain more profits from other sales channels in future for the affected months.