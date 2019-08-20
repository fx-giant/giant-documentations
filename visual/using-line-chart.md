# Giant 101: Using line charts

## Introduction:

Line charts effectively show the comparison and trends of data. Line charts are easy for the audience to understand and can also be used to show KPI's of a company. It is most effective when using date-time data. For example, using line charts you can show sales across years which is important in order to understand how your company is progressing.

![lineicon](images\giant-101-linechart\line-icon.PNG)

## Example 1:

When using GIANT, it is very important to always think about the structure of your data before using it to create your chart. GIANT has many built-in functions that make it easy for you to aggregate data within the system so you might want to think about this before trying to aggregate your data externally.

In this example I will be showing the **total sales across years** using the **Stationary Sales** data source.

![lineicon](images\giant-101-linechart\data-structure.PNG)

This is the data structure of the sample data I am using. I have to use the built-in aggregate functions given my data structure if I want to show the **total sales across years**. 

![lineicon](images\giant-101-linechart\data-bind.PNG)

After we connect to our data source: **Stationery Sales**, we choose our x-axis to be **year** to represent the time and our y-axis as the **Sum** of **Units**. We have to use the **sum** built-in function because of the way our data is structured so we can visualize what we want.

This is the given output:

![linegraph](images\giant-101-linechart\line-graph.PNG)

Since we are only showing the total number of sales across years there is no need for a legend. 

![example2](images/giant-101-linechart/legend.PNG)

Click the hamburger icon in the top right of your screen and you will see the **legend** option. Click the legend option and select **no legend**. 

## Example 2:

Now I will be showing an example using data on the **profit growth across time for DHL Malaysia**. We are showcasing DHL trends in profit growth over time across years. The idea of comparing any KPI over months in specific years gives a good gauge of how a company is performing. A linechart shows this information very effectively.

![example2](images/giant-101-linechart/data-structure2.PNG)

Given the structure of my data, I will not have to use any of GIANT's built-in aggregate functions because my data is organised in this manner. However, this may not be the case for your data. Always take the time to understand how to utilize GIANT's built-in functions if your data is not structured the way you want it to be.

![example2](images/giant-101-linechart/data-bind-2.PNG)

First, we connect to our source: **dhl-profit-growth.xlsx**. Our x-axis will be **Month name** to represent the months over time and our y-axis will be **profit growth**

![example2](images/giant-101-linechart/data-bind-x.PNG)

Always remember to change the **Display Name** of your columns when choosing your axis. We want to make sure that the naming of your axis are appropriate for the target audience to read. Ideally, we do not want any "_" or "-" within our display name. Our axis should be labeled to reflect our ideas of what we want to show.

This is our given output:

![example2](images/giant-101-linechart/line-graph-2.PNG)

This linechart succesfully shows our data. However, what is wrong with it? Notice our months are not ordered. Because my **Month_name** column is of data-type: *text*, GIANT orders the months alphabetically. There are two methods of solving this.

![example2](images/giant-101-linechart/data-order.PNG)

Within my data I had an extra column called **Month** which are integers assigned to each month e.g. **January = 1**, **February =2** etc. So I go to the **Sort(s)** bar and I order in **Ascending** order by my column **Month**.

This gives me the following output:

![example2](images/giant-101-linechart/line-graph-improved.PNG)

Now our months are sorted! 

The second method would be to **rename the values within your columns**. If you have a column similar to mine: **Month_name**, instead of naming your months like **January**, **February** etc. , you would name it **01 Jan**, **02 Feb**. This way, given your column is of data type *string* or *text*, GIANT will recognise and order your months accordingly.

## Giant's built in functions:

**Unique** - Counts the distinct values within the column you choose. For example, if your data contains multiple names, it only takes into account a name once. This is particularly useful when wanting to know how many unique users exist in your consumer base.

**Count** - Counts the number of rows within a column.

**Maximum** - Takes the maximum value within your column.

**Minimum** - Takes the minimum value within your column.

**Sum** - Sums the numeric values within your column.

**Average** - Takes the average value within your column.

**None** - Does not affect your column. Used when your current data is already aggregated.

**Group by** - Used when you want to look at the data within different groups of your data. For example: **Sales within categories for different age groups**.

**Sort** - Sorts your data in ascending/descending order depending on the data/data-type.

**Filter** - Allows you to choose columns within your table to filter our specific criteria for the data you want to show.

## Important points:

- If the data you want to showcase has more than 2 dimensions, choose a different chart to represent your data.

- If you wanted to perform more specific analysis by making comparisons, limit the data points. For example: if you wanted to show the **top products sold across time**, you might want to limit it to the **top 10** products so your chart does not get messy. 

![example2](images/giant-101-linechart/limit.PNG)

You can do this by going to the **All/Top/Bottom** feature under **settings**. Click the **All** button and click **Top**.

![example2](images/giant-101-linechart/limit2.PNG)

You can then set the number of which you want to limit your data. In this example, I choose the **top 10** points of my data. This will filter your data based on the axis of your data. You can also filter by seeing the bottom by clicking the **bottom** button.

- In certain situations, if you have certain **continous data**, you may want to use a bar chart instead.
 
 
 Here it the link to line-chart documentation:
    [using-bar-chart.md](giant-documentations\visual\using-bar-chart.md)