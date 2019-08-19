# Giant 101: Using pie charts

## Introduction:
Pie charts effectively show the summary/proportions of the data you have. When you want to understand what item makes most of your sales or what age group makes up most of your consumer base, pie-charts are very effective as they are very simple.

![pieicon](images\giant101-piechart\pie.PNG)

## Example 1: 

When using GIANT, it is very important to always think about the structure of your data before using it to create your chart. GIANT has many built-in functions that make it easy for you to aggregate data within the system so you might want to think about this before trying to aggregate your data externally. Ideally, you would use pie charts when there are 5 or less categories so it does not get too messy.

In this example, I will be using a source called **Stationary Sales**. 

![data](images\giant101-piechart\data-structure.PNG)

This is the structure of the data I will be using. I will be showing the **total sales of each region** to show the proportion of sales across regions. In this case, this is important if you want to show which region has performed better.

![data-binding](images\giant101-piechart\data-bind.PNG)

First, we connect to the **Stationery Sales** source. Our category axis is the categories we want to visualize. In this case it is **region**. Given the structure of our data we need to sum the number of **units** in order to get the **total number of sales** in each region for our value-axis. If you were to use any other built-in function, the numbers would not be accurate and you would be getting the wrong information. This is why it is important to understand your data structure. 

This is the given output:

![pie-chart](images\giant101-piechart\pie-chart.PNG)

This succesfully shows the proportion of total sales within each region. However, we can make improvements to this chart.

![pie-chart2](images\giant101-piechart\pie-chart-improved.PNG)

We remove the legend because there are already labels which exist to help show the data to the audience. This makes the information easier to read for the targeted audience.

## Example 2:

If we were only interested in looking at the sales within specific regions within a specific year period, we would need to use the **filter** tool.

![pie-chart2](images\giant101-piechart\pie-chart-filter.PNG)

 If the company we were showcasing to was only interested in **total sales within 2016 for the West, North and South region** we would filter in order to show case the data we want. Here you can see we filter by **North, South and West** and by data only within **2016**. This is the given output:

![pie-chart2](images\giant101-piechart\pie-chart-filter-d.PNG)

From here we can see that South has been providing most sales within 2016. So if we were in 2016, we would think of sending more inventory to the South region because they contribute to 49.29% of our sales.

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

## Important notes:

- It is important to know that the pie chart is a simple chart that cannot handle data that requires 3 dimensions. 

- You want to make it as easy as possible for your audience to understand your data. If you have categorical data that can be easily shown using a pie chart, I recommend using it rather than a bar chart as it is easier for the audience to read.