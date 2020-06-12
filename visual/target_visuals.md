## Target Visuals

![Radial Gauge](./images/target-visuals/radial_gauge.PNG) ![Cylinder Gauge](./images/target-visuals/cylinder_gauge.PNG) 
![Bullet Vertical](./images/target-visuals/bullet_vertical.PNG) ![Bullet Horizontal](./images/target-visuals/bullet_horizontal.PNG) 
![Thermometer Vertical](./images/target-visuals/thermometer_vertical.PNG) ![Thermometer Horizontal](./images/target-visuals/thermometer_horizontal.PNG)

Target visuals are visuals that indicates progress towards meeting a target. 
There are three main types of visuals, Gauge, Bullet and Thermometer, which are then further broken down into six different visuals 
including Radial Gauge, Cylinder Gauge, Bullet Vertical, Bullet Horizontal, Thermometer Vertical and Thermometer Horizontal.
<br/><br/>First, a **Radial Gauge** has an appearance similar to a speedometer in a car, with a needle that moves to indicate the 
proximity of the current value to the goal. When you hover your cursor over the needle, more information will be shown.
<br/><br/>Second, a **Cylinder Gauge** is a 3D cylinder bar chart that would fill up as the actual value increases with the filled colour 
being the threshold set in the settings. When you hover your cursor over the filled area, more information will be shown.
<br/><br/>Third, a **Bullet Vertical or Bullet Horizontal** is a bullet chart that depicts the actual value as a white bar overlapping on the 
threshold bar with colours shown according to your settings. When you hover your cursor over the white bar, more information will be shown.
<br/><br/>Fourth, a **Thermometer Vertical or Thermometer Horizontal** is a thermometer chart that has similar appearance as a bullet chart 
except that the bar indicating the actual value are shown on the right side of the threshold bar and it is blue colour. When you hover 
your cursor over the blue bar, more information will be shown.

## Data Binding

The Data Binding options are the same across all target visuals. There are two mandatory bindings which are **Actual** value and **Target** value.


|Bindings|Data Type|
|---|---|
|Actual|Numeric|
|Target|Numeric|

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

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows **OR** selected number of bottom-most data rows.

### Threshold

You can choose between 'Increasing Better' or 'Decreasing Better' for Trending, and to set number of threshold quartiles and range of each
quartile. You can also change the colour of each quartile by clicking on the colour bar and a colour palette will pop up. You can even
add more quartile if you need more and remove them by pressing on 'X' button beside the percentage symbol.

### Filter

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.


## Use Case for Radial Gauge
### Bank's Website Weekly Downtime
A dataset is generated using Mockaroo. Download sample data [here](./sample-data/target-visuals/downtime.csv).

Provided within the dataset are the necessary fields needed to generate the radial gauge.

|Bindings|Select|
|---|---|
|Actual|actual_downtime|
|Target|estimated_downtime|

The line graph shows a steady increase in revenue from its initial point to its end point. This means that Nike has a constant growth in their revenue as the years pass on. Their highest revenue is in the year of 2019, where they earned US$39.117 million. This is an 8.3% increase in revenue as compared to 2018, where they collected US$36.397 million. As the revenue is on a steady path of increase, Nike can continue their current marketing and business plans for the future as the data shows that their marketing campaigns had been successful in generating a steady sales.

**Output**

![Nike Revenue](./images/area-line-graph/output-1.PNG)

### Wildlife Population throughout the Years (Area Chart)
A sample Wildlife Population dataset is used for the area chart, whereby the total number of 3 animals (Bears, Dolphins and Whales) sighted at the selected research venue are displayed throughout the years of 2012 to 2017. The area chart is suitable to display the data in a grouped format, which makes comparison easier for analysis. Download sample data [here](./sample-data/area-line-graph/Wildlife_Population.xlsx).

Provided within the dataset are the necessary fields needed to generate the area graph. The **Year** field will be placed in the **X-Axis** setting, whereas the **Population** field will be placed in the **Y-Axis** setting. As there are multiple animals listed within the dataset, the **Animals** columns is used for the **Group** field setting.

|Bindings|Select|
|---|---|
|X-Axis|Year|
|Y-Axis|Population|
|Group|Animals|

The chart shows the total number of respective wildlife animals sighted during each year of sampling at the selected research area, whereby each of the animals has a varied counts throughout the years. The number of **Bears** sighted by researchers has an increase in count throughout the years, as opposed to the number of **Dolphins** sighted which are steadily declining year after year. However, the number of **Whales** sighted fluctuated throughout the years of 2012 to 2017.

**Output**

![Wildlife Population](./images/area-line-graph/output-2.PNG)

**Analysis**

From the use case, it gives us an idea of the survival status for the three different animals within the years of 2012 to 2017, in the area where the research was conducted. Overall, the highest number of wildlife sighting is **Bears** with a count of 184 in the year 2017, whereby it also has an increasing trend from the year 2012. As for **Dolphins**, the number of sighting drastically decreases within the timeline of 2012 to 2017, which is something to be worried about. Having the count of only 1 in the year of 2017 from the highest count of 150 in the year 2012, this indicates that either the **Dolphins** are becoming extinct in the area of research **OR** they have chosen to migrate to another area due to external factors such as pollution, rise in the sea water temperature or threat. The number of sightings for **Whales** fluctuated from year to year, with the count ranging from 54 - 100. By analysing this graph, wildlife conservation organisations can take the initiative to focus more efforts on protecting the **Dolphins** due to their extreme low count as of 2017, finding methods to save their habitat to make it more favourable for **Dolphins** in the future. The same can be said for the **Whales** as the inconsistent numbers shows that certain measures need to be taken to protect them. As for the **Bears**, the increasing trend shows that conservation methods are working in preserving the numbers and they should be maintained.
