## Map

![Map](./images/map/map.PNG) 

A Map chart allows us to visualize spatial relationships in data by indicating data on a geographical map. A map chart is used when specific 
locations are included such that there are longitude and latitude, as well as clear distribution or clustering. For example, you could
use a map chart to illustrate the business performance of each branch offices located in different regions.

<br/>

## Data Binding

There are two mandatory bindings which are **Longitude** and **Latitude**.

|Bindings|Data Type|
|---|---|
|Longitude|Longitude value|
|Latitude|Latitude value|

### Longitude/Latitude

The **Longitude** and **Latitude** bindings determine the specific location of data bubble(s) shown on the map chart. Both values should be in numerical data type such that it is <0.000000>. It should not be in GPS coordinate values
such that it is <0° 0' 0" N> or <0° 0' 0" E>.

### Group

The **Group** binding determines the category to group the longitude and latitude values in the chart. It can be in Text or Numeric data type.

### Size

The **Size** binding determines the size of the data points marked on the map chart. It is a Numeric data type.

### Actual/Target 

Only Numeric data type can be used for both **Actual** and **Target** bindings with an exception for 'Unique' and 'Count' expressions.
For example, if you are to include a non-numeric data type field named 'Movie Name' and you would like to:
1. Find out how many non-repeated movies are in the connected source --> 'Unique' expression can be applied on non-numeric field to 
generate the total number of rows without repeated value.
2. Find out how many movies are there in total --> 'Count' expression can be applied on non-numeric field to generate the total number of
rows.

Ultimately, only numerical values will be shown.

## Other Settings

### All/Top/Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the 
number of data points required to show the selected number of top-most data rows **OR** selected number of bottom-most data rows.

### Size/Actual/Target Label

The **Label** text area allows you to input a description to define Size/Actual/Target bindings and be shown in the map chart. It can be in Text or Numeric data type.

### Threshold

You can choose between 'Increasing Better' or 'Decreasing Better' for Trending, and to set the number of threshold quartiles and the range of each
quartile. You can change the colour representing each quartile by clicking on the colour bar and choosing from the colour palette. You can also
add more quartile by pressing on "+ Add more" button or remove them by pressing on 'X' button beside the percentage symbol.

### Filter

Add filters to restrict your data so that analysis will be focused on data that are shown in the chart.

### Zoom In/Out

You could zoom in and out the map chart by using "+" and "-" buttons located at top right corner, respectively. Alternatively, you could
also use your mouse scroll wheel.

<br/>

## Use Case
### Mobile Phone Sales Company
A mobile phone sales company that has sales representatives working across four branch offices throughout Malaysia, including Kedah, Penang,
Selangor and Johor. Each sales representative has a monthly sales target of 20 mobile phones sold. Each branch office has different number
of sales representatives hired, so the cumulative monthly sales target of each branch office is different. The thresholds defined by the sales
manager are such that, 14 - 24 sales are classified as Good, 6 - 14 sales are classified as Average, and 0 - 6 sales are classified as Bad.

The sales manager would like to have a look at the locations of each branch office, number of sales representatives hired in each branch
office, cumulative sales target of each branch office and the performance of Actual vs Target sales of each branch office for January.

Using the sample data [here](./sample-data/map/map.csv), configure the chart with settings as follows:

|Bindings|Select|
|---|---|
|Longitude|*longitude*|
|Latitude|*latitude*|
|Group|*branch_name*|
|Size|\[Unique]*sales rep id*|
|Actual|\[Sum]*won_sales*|
|Target|\[Sum]*sales_target*|
|Size Label|No. of Sales Rep|
|Actual Label|Total Sales Won|
|Target Label|Total Sales Target|
|Trending|Increasing Better|
|Threshold|From 0%, To 30%, To 70%, To 120%|
|Filter(s)|*[01-01-2020 to 31-01-2020]date*|

**Output**

![Mobile Phone Sales Company](./images/map/map_output.PNG)

**Analysis**

From the chart, the sales manager could immediately know that there are 4 data bubbles indicating 4 branch offices. 
The different sizes indicate the number of sales representatives in each branch office. 
The different colour of each data bubbles indicate the cumulative monthly won sales as compared to the cumulative monthly sales target. 
Hovering over each data bubble, the sales manager could see the branch name, total sales won in January for each branch office, total sales target of all sales representatives in each branch office and also the number of sales representatives. 
From the colour representing each data bubble, the sales manager could quickly learn that the branch offices in Kedah and Selangor are performing within the average range which is represented by yellow colour. 
From there, the sales manager could look into the branch offices that did not hit their sales target and to find out what is the cause/reason/issue. 
Another perspective is that the sales manager could use the map chart to help in making decision whether certain branch offices should be closed down as they are consistently having a loss in profit, or certain branch offices should be allocated more budget to operate as they are consistently bringing in profit to the business. 