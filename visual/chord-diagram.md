# Chord Diagram

![Chord Diagram](./images/chord-diagram/chord.PNG)

Chord Diagram visualises the flows or connections between several entities. The entities are represented by the fragment on the outer part of the circular diagram, whereby their connections are used to display the relationships between the entities. This makes Chord Diagrams ideal for visualising the connections within a dataset or connections between different groups of data. Each connection will have a value assigned to it, represented proportionally by the size of each arc. Furthermore, the usage of colour is used to differentiate the categories, which aids in making comparisons and distinguishing groups.

> *NOTE:* An issue that can occur within Chord Diagrams is overcluttering if there are too many connections being displayed at once.

## Data Binding

For the chord diagram, there are a few mandatory bindings to generate the chart which are the **Source**, **Destination** and **Actual** properties. For each property, there are specific data types need to fulfill in order for the combination chart to render correctly, such as can be seen below:

For each field, specific data type need to be fulfilled in order for the chart to render correctly, as shown below:

|Bindings |Data Type|
|---|---|
|Source|Text|
|Destination|Text|
|Actual|Numeric|

### Source

A field with text data type can be used for **Source** binding. This will be displayed as the Category or Entity values, whereby it represents the origin, beginning or initial flow of a particular data.

### Destination

A field with text data type can be used for **Destination** binding. This will also be displayed as another Category or Entity value **BUT** it is needed to be paired with the **Source** binding to properly generate the relationship. It represents the destination, ending or final flow of a particular data from above **Source**.

### Actual

A field with numeric data type can be used for **Actual** binding. The size of each arc will correspond to the value of Actual field binding i.e. data with bigger values will be shown in a larger arc size.

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

The segments in the chord diagram represents two things - the **current hair colour** and the **preferred hair colour** of the teenagers. When there is an arc connecting the data **from the particular category** INTO the **same category**, it means that the teenagers prefer to **maintain their current hair colour**. On the other hand, when there is an arc **connecting the data from** the particular category OUT TO **another category**, it means that the teenagers prefer to **change their hair colour** to that other hair colour category. The **size** of the arc corresponds to the number of teenagers that either prefer to maintain their current hair colour OR change their hair colour. By analysing the chart, we can see that at least half of teenagers with **Red** and **Blond** hair prefer to maintain their current hair colour. Teenagers with **Black** and **Brown** hair make up the most of those who prefer to change their hair colour to other colours.

**Output**

![Hair Preference](./images/chord-diagram/output-1.PNG)

### Import Trade of Certain Countries that Start with 'A'
This dataset shows a list of the import and export trade within the year of 2009 among the countries that start with the letter *'A'*. As the dataset has a few fields that have the value of 0(which means no trade activity available between the two countries), a Complex Chord Chart will be generated. Download sample data [here](./sample-data/chord-diagram/trade-a.csv).

From the dataset, the **Export Country** and **Import Country** fields will be used for the **Source** and **Destination** settings as they are the values used to reflect the relationship between the countries. The **Frequency** field is used for the arcs within the chord diagram to appear; this shows the number of trade activities between the countries.

|Bindings |Select|
|---|---|
|Source|Export Country|
|Destination|Import Country|
|Actual|Frequency|

From the chord diagram, it can be seen that the major countries that participated in the trade activities are displayed with a bigger segment and arc i.e. Argentina and Austria. It can also be seen that some of the countries had little to no export activities with the other countries.

**Output**

>*NOTE:* Due to the length of some country names being too long, some data labels are cut off/extended outside the diagram.

![Import Trade A](./images/chord-diagram/output-2.PNG)

**Analysis**

The chart displays the countries that had the highest count of export trading activities compared with the other countries, which are Austria, Argentina, Azerbaijan and Algeria. This can be said as their segments within the chord diagram have bigger arc compared to the rest, which are most likely to only import items from the trade. Most probably, the export trade happened frequently within the four said countries due to the amount of resources that they could send overseas, whereas the remaining countries would either require more resources or afford more resources respectively. From the diagram, it can be concluded that the diagram can be used by numerous trade companies to check on which countries are more keen in exporting or importing items according to the size of their segment and arcs.