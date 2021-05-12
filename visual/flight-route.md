
# Flight Route
### Description

A flight route map is a visualisation of a world map whereby the origins and their destinations are displayed on an interactive map. By clicking on the origin, we can know which destinations the origin can go to. It can be used for showing the air traffic network. The charts also can display the values, values with higher amounts will have a stronger colour and a bolder line width, representing the higher density of the destination of the selected origin on the map.

## Diagram Design / Configuration
### Binding
- The bindings required are 6 mandatory dimensions binding and one optional measurements binding.

	![Data-Binding](./images/flight-route/Data-Binding.png)
	
	|Path|Type of Bindings|
	|---|---|
	|Origin Path|Mandatory Dimensions Binding|
	|Origin Latitude Path|Mandatory Dimensions Binding|
	|Origin Longitude Path|Mandatory Dimensions Binding|
	|Destination Path|Mandatory Dimensions Binding|
	|Destination Latitude Path|Mandatory Dimensions Binding|
	|Destination Longitude Path|Mandatory Dimensions Binding|
	|Size Path|Optional Measurements Binding|
	
## Other Settings

### Sort

For huge data sets, a setting called Sort can be used to alter the timeline chart on different specifics that the user wants to view or create on the chart.

### Filter

Another setting that could be used is Filter where it applies filters to restrict or focus on data shown in the chart.

### Cross Chart
You can use this setting if you wish to publish selected data across charts within dashboard.

### Image URL
You can use this setting if you wish to change the default flight image by providing an image URL link.

### Label Title
You can use this setting if you wish to change the title of the label. E.g: This is a filght from `Origin`

### Density Color
You can choose the colour to represent the data available for the destinations of the selected origin in the map.

## Use cases
**Airfreighter Flight Route**
 The current dataset displays a list of airfreighters' origin and together with its destinations. Download sample data [here](./sample-data/flight-route/flight_route.xlsx).
 
|Bindings |Data Type|
|---|---|
|Origin Path|Origin Name|
|Origin Latitude Path|Origin Latitude|
|Origin Longitude Path|Origin Longitude|
|Destination Path|Destination Name|
|Destination Latitude Path|Destination Latitude|
|Destination Longitude Path|Destination Longitude|
|Size Path|Parcel (ton)|

In the style tab, we set the image URL to `http://172.16.53.228/websites/analytics/images/cover_09.jpg`

![Image_URL_Setting](./images/flight-route/Image_URL_Setting.png)

Set the label title to `Airfreighter from `

![Label_Title_Setting](./images/flight-route/Label_Title_Setting.png)

Lastly, set the color density.

![Density_Color_Setting](./images/flight-route/Density_Color_Setting.png)

Here's the output of the chart once the fields above are bound:

![use_case_1](./images/flight-route/use_case1.png)

The destinations of airfreight have been shown based on their latitude and longitude. By clicking the origin icon or **Click to change origin city** to show the flight's destination with lines. The color and the width of the line will represent the amount of parcel carry on that airfreight. We also can mouse over the destination icon or the line to see more detail in the tooltips.
