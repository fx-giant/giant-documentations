# Density Map



A density map is a visualisation of a world map whereby the values are displayed on an interactive map as color-coded areas. Values with higher amount will have a stronger colour, representing the higher density of the locations on the map. The values can be displayed by different colours based on the pallete, style and threshold setting, which aids in identifying certain trends. For example, you can display areas with a high concentration of retail stores in dark red, with the colour tone getting lighter when approaching areas with lower concentration of retail stores. The density map is generally used by analysts in order for them to represent variability of the data across countries or regions, in a graphical way.

## Data Binding

For the density map chart, there are 4 bindings available to generate the chart which are:

1) **Country Code** (Mandatory) - ISO Alpha-2 Code (Reference here: https://www.iban.com/country-codes)
2) **State Name**
3) **Actual Value** (Mandatory)
4) **Target Value**

For each property, there are specific data types need to fulfill in order for the density map to render correctly, as shown below:

|Bindings|Data Type|
|---|---|
|Country Code|Text|
|State Name|Text|
|Target Value|Numeric|
|Actual Value|Numeric|

**Country Code** data can be used to create a relationship with the **Actual Value** to display the data density information on the world map. The color of each value within the density map will change based on the comparison with other values.

If the **State Name** field is bound, the map will further show the data density information at the state level, on the map.

When all **Country Code**, **State Name**, **Actual Value** and **Target Value** field are bound, the information displayed for the **Actual Value** versus the **Target Value** will be based on the **Threshold setting** which consists of:

- Trending (Increasing Better/Decreasing Better)
- Range % of Target
- Different colour setting to represent each threshold level. By default, the traffic light colour setting is applied to the chart.

## Other Settings

### All/Top/Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows **OR** selected number of bottom-most data rows.

### Trending

When you have the **Target Value** field binding specified, you can choose the trending value either Increasing Better or Decreasing Better. For example, the trend Increasing Better is used to track Actual Sales vs Target Sales figures. The trend Decreasing Better is used to track the actual number of crime cases reported against the target number of crime cases.

### Range (% of Target)

When you have the **Target Value** field binding, you can specify the threshold for the percentage achievement in this section. The default colours are Red for 0-30%, Yellow for 31-70% and Green for 71-100%.

### Filter

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.

### Style

### Density Colour

You can choose the colour to represent the data available for the locations in the map. The colour tone will reflect the data density in relation to the bound data fields.

### Empty Value Colour

You can choose a different colour to represent the unavailable data for the locations in the map. If the **State Name** column is bound, the map will only display the Empty Value Colour for states without any data available.

If **State Name** column is NOT bound, the entire map (except the locations where the **Country Code** data are present), will display the Empty Value Colour for states.
 

## Use Cases

### CoVid19 Infections in USA
COVID-19 infection data from all the states in the USA for 03/07/2020 is recorded in this dataset. The Density Map can be used to display the rate of recovery between the states by comparing each state's total number of discharged patients against the total number of cases. Download sample data [here](./sample-data/density-map/USA-Covid19-Cases-03.07.2020.csv).

Below are the fields used for the data binding to generate the chart:

|Bindings|Field to Select|
|---|---|
|Country Code|Country ISO|(MANDATORY)
|State Name|State|
|Actual Value|Discharged Patients|(MANDATORY)
|Target Value|Total Cases|

Here's a output of the chart once the fields above are bound:

- With **Country Code** and **Actual Value** data bindings:
[(./images/density-map/country-level.JPG)]

- With **Country Code**, **State Name** and **Actual Value** data bindings:
[(./images/density-map/state-level.JPG)]

- With **Country Code**, **State Name**, **Actual Value** and **Target Value** data bindings:
[(./images/density-map/threshold.JPG)]

From the map, we are able to see that as of 03/07/2020, most of the states in the US have a low recovery rate. Most of the area are shown in Red colour, which means that the number of patients which have recovered are low compared to the total number of infections. There are no state at all that falls within the Green threshold, which shows a very worrying trend in terms of patients' recovery. One interesting point to note is Alaska; although the area covered by the state's bounderies are quite large, the total cases is only 1,166 cases and out of this number, 452 patients have recovered. Overall, Alaska falls within the Yellow range of the threshold.