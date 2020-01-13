# Chord Diagram

![Chord Diagram](./images/chord-diagram/chord.PNG)

Chord Diagram visualises the flows or connections between several entities. The entities are represented by the fragment on the outer part of the diagram, where their connections are used to display the similarities between each entity. This makes Chord Diagrams ideal for comparing the similarities within a dataset or between different groups of data. Each connection will have a value assigned to it, represented proportionally by the size of each arc. Furthermore, the usage of colour is used to differentiate the categories, which aids in making comparisons and distinguishing groups.

> *NOTE:* An issue that could occur within Chord Diagrams is overcluttering if there are too many connections being displayed at once.

## Data Binding

For the chord diagram, there are a few mandatory bindings to generate the chart which are the **Source**, **Destination** and **Actual** properties. For each property, there are specific data types need to fulfill in order for the combination chart to render correctly, such as can be seen below:

For each field, specific data type need to be fulfilled in order for the Word Cloud chart to render correctly, as shown below:

|Bindings |Data Type|
|---|---|
|Source|Text|
|Destination|Text|
|Actual|Numeric|

### Source

A field with text data type can be used for **Source** binding. This will be displayed as the Category or Entity values, where it represents the origin or initial flow of a particular data.

### Destination

A field with text data type can be used for **Destination** binding. This will also be displayed as another Category or Entity value **BUT** it is needed to be paired with the **Source** binding to properly generate the relationship, where it represents the destination or end flow of a particular data from above **Source**.

### Actual

A field with numeric data type can be used for **Actual** binding. The size of each arc will correspond to the value of Actual field binding i.e. sum of data with bigger values will be shown in a larger arc size.

## Other Settings

### All/Top/Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows **OR** selected number of bottom-most data rows.

### Sort

You can use this setting to arrange your data points based on the field that you need. For example, to sort by Country in ascending order.

### Filter

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.

## Use Cases

### Hair Preferences among Teenagers in the USA
A dataset showing the hair colour preferences among teenagers in the United States of America is displayed within this use case.  By using the Chord Diagram, the relationship between the categories can be visualised from its source to its wanted destination. Download sample data [here](./sample-data/chord-diagram/hair.csv).

Below are the fields used for the data binding to generate the chart:

|Bindings |Field to Select|
|---|---|
|Source|Has|
|Destination|Prefers|
|Actual|Count|

Displayed in the chord diagram are the count value of the teenagers that either **Has** or **Prefers** the hair colours respectively. The values are represented through the different segments of the diagram with the size and colour of the arcs. From this, it can be seen that teenagers with the most **Has** value of brown colour much more **Prefers** to change their hair colour, as opposed to the teenagers with the least **Has** value of red colour would much rather **Prefers** to maintain their hair colour.

**Output**

![Hair Preference](./images/chord-diagram/output-1.PNG)

### Import Trade of Certain Countries that Start with 'A'
This dataset shows a list of the import and export trade within the year of 2009 among the countries that start with the letter *'A'*. As the dataset has a few fields that have the value of 0, a Complex Chord Chart will be generated. Download sample data [here](./sample-data/chord-diagram/trade-a.csv).

As the dataset had provided several similar fields, only a few of the fields would need to be used to generate the diagram accordingly. The **Export Country** and **Import Country** fields will be used for the **Source** and **Destination** settings as they are the countries used to reflect the relationship. The **Frequency** field is used for adding a numerical value for the arcs within the chord diagram to appear.

|Bindings |Select|
|---|---|
|Source|Export Country|
|Destination|Import Country|
|Actual|Frequency|

Within this chord diagram is the import and export trade frequency that happens within the countries, where it can be seen that major countries that participate in the trade are displayed with a bigger segment and arc. It can also be seen that some of the countries have little to no export values to the other countries.

**Output**

>*NOTE:* Due to the length of some country names being too long, some labels were cut off/extended outside the diagram.

![Import Trade A](./images/chord-diagram/output-2.PNG)

**Analysis**

The conclusion of the use case chart displays the countries that have the highest count of export trading among other countries, which are Austria, Argentina, Azerbaijan, and Algeria. This can be said as their segments within the chord diagram have a slightly big arc compared to the rest, which are most likely to only import items from the trade. By analysing the chart deeper, the export trade happens frequently within the four said countries is due to the amount of resources that they can send overseas, whereas the remaining countries would either require more resources or afford more resources respectively. From the diagram, it can be concluded that the complex diagram can be used by numerous trade companies to check on which countries more keen in exporting or importing according to the size of their segment and arcs.