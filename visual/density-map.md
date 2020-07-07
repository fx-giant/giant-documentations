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

**Country Code** data can be used to create a relationship with **Actual Value** to display density information on a world map. The color of each value within the density map will change by the comparison among other values, as described below:

If **State Name** data is binded, the map will further show state level density information on the map. 

When all **Country Code**, **State Name**, **Actual Value** and **Target Value** data are binded, information displayed will be based on the **Threshold** setting which consists of:

- Trending (Increasing Better/Decreasing Better)
- Range % of Target
- Separate colour setting to display threshold levels

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

Changes the colour of the locations with data binding to reflect users choice. The colour tone will reflect the population density in relation to the binded data.

### Empty Value Colour

Changes the colour of locations with no value on the map. If **State Name** data is binded, the map will only display the above colour for states without any data bindings. 

If **State Name** data is NOT binded, the entire map, minus the locations where **Country Code** bindings are present, will display the above colour for states. 

## Use Cases

### CoVid19 Infections in USA
Covid19 infection data from all the states in the USA for 03/07/2020 is recorded in this dataset. 2016 to 2018 on the amount of tickets sold from each month. A Density Map can be used to display which states have a denser population of infections compared to the others. Download sample data [here](./sample-data/density-map/Covid19-Info.csv).

Below are the fields used for the data binding to generate the chart:

|Bindings|Field to Select|
|---|---|
|Country Code|Country ISO|(MANDATORY)
|State Name|State|
|Actual Value|Actual Infections|(MANDATORY)
|Target Value|Target Infections|

The map displays the density information of Covid-19 infections in the USA for the 3rd of July 2020. When **Country Code** data and **Actual Value** data is binded, the density information is displayed on the world map on a country level. When **State Name** data is binded, state level density information is displayed. 

From this map, when **Country Code**, **State Name** and **Actual Value** data fields are binded, we are able to see that the densest location in terms of Covid-19 infections are in New York, with 31,836 infections. The least dense location is Alaska, with only 13 cases.

When **Target Value** data is binded, the map displays threshold information on the map. 

The trending in this case is **decreasing better**, and we are able to see that Alaska has the closest **Actual Value** as compared to its **Target Value**, therefore displays the lowest threshold information. In comparison, New York has the highest number of infections and is the furthest from it's target, therefore displays the highest threshold information. 