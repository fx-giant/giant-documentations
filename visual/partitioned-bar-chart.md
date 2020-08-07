## Partitioned Bar Chart

![PartitionedBarChart](./images/partitioned-bar-chart/partitioned-bar-chart.PNG) 

A Partitioned Bar Chart enables you to visually group bars and help users analyze both the whole picture and individual logical groups at the same time.

## Data Binding

There are three mandatory bindings which include X-Axis, Y-Axis and Group.

|Bindings|Data Type|
|---|---|
|X-Axis|Unique string|
|Y-Axis|Numeric|
|Group|String|

### X-Axis

A field with String data type can be used for **X-Axis** binding. However, it should be a non-repetitive, unique value. X-Axis value(s) will appear on the vertical axis.

### Y-Axis

A field with Numeric data type can be used for **Y-Axis** binding. Y-Axis value(s) will appear on the horizontal axis and be visualised as a bar to indicate the numerical value of its respective X-Axis binding.

### Group

A field with String data type can be used for **Group** binding. Group value(s) will appear on the top left corner of each partition to categorize X-Axis values that have similar characteristics.

## Other Settings

### All/Top/Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows **OR** selected number of bottom-most data rows.

### Sort(s)

You can use this setting to arrange your data points based on the field that you need. For example, to sort by Country in ascending order.

### Filter(s)

Add filter(s) to restrict your data so that analysis will be focused on data which are shown in the chart.

## Use Case
### Video Game Software Client
Steam, is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers. It is a cloud-based gaming library thus allowing users to store a large collection of games without using too much computer memory.

The product manager in Steam was given a budget to plan and execute marketing strategies for selected game(s) on their platform for the month of August. In order to do this, an analyst was appointed to analyse which game(s) should be included in the marketing strategies. 

Using the sample data [here](./sample-data/partitioned-bar-chart/partitioned-bar-chart.csv), configure the chart with settings as follows:

|Bindings|Select|
|---|---|
|X-Axis|*game_title*|
|Y-Axis|[Sum]*monthly_average_players*|
|Group|*game_category*|
|Sort(s)|Move [Sum]*monthly_average_players* to the top|
|Filter(s)|[July 2020]*month_year*|

**Output**

![Monthly Average Players - July 2020](./images/partitioned-bar-chart/partitioned-bar-chart-output.PNG)

**Analysis**

From the output as shown above, a partitioned bar chart is used to group game titles according to its respective genres and to show the monthly average players of July 2020. 
The analyst suggests to look at the average monthly players because users who engaged with the game(s) are more likely to come across the marketing promotions as compared to game(s) with high revenue. 
The high revenue might be due to the combination of high price tags alongside with sudden hype around the game for a short period of time.
It consists of 4 genres - Sports, Multiplayer Online Battle Arena (MOBA), First-Person Shooter (FPS) and Action-adventure, with 3 games in each genre, sorted by the highest monthly average players for July 2020.

From the chart, you could see that CS:GO from First-Person Shooter and Dota 2 from MOBA are leading by a large margin compared to the rest. 
Hence, these 2 games should be prioritize and could allocate more budget for these 2.
Other than targeting individual title, the analyst suggests that we could target the genre(s) too. In this case, FPS and Action-adventure should be prioritize for the marketing budget allocation.
However, CS:GO and Dota 2 are the 2 games that will always be allocated budget no matter which approach is used due to the absurdly large difference in margin.