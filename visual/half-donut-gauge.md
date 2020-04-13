# Half Donut Gauge

![Icon](./images/half-donut-gauge/half-donut-gauge.PNG)

Half Donut Gauge is a type of chart that displays overall performance of specific data by comparing the actual value against a target value. This chart is commonly used to show KPI, daily sales target and etc. 

## Diagram Design / Configuration

### Binding
- The bindings required are 2 measurements binding which are :-
    >Actual and Target value

    ![Binding](./images/half-donut-gauge/binding.PNG)

### Sorting
You can use this setting to arrange your data points based on the field that you need. For example, to sort by Country in ascending order.

### Filter

There are few options as shown in the picture below to filter on data.

    ![Filter](./images/half-donut-gauge/filter.PNG)

Add filters to restrict your data so that analysis will be focused on data which are shown in the chart.

### Top Bottom Filter

There are three options to filter by row limit

    ![TopBottomFilter](./images/half-donut-gauge/topbottomfilter.PNG)

- All
- Top
- Bottom

By default, the option selected is All (which means, all the data points will be shown in the chart). Select Top or Bottom, followed by the number of data points required to show the selected number of top-most data rows OR selected number of bottom-most data rows.

## Use Cases

### Retail Warehouse Stock Availability

Through the gauge, you can visualize specific stock availability. Decision such as restock or order from supplier can be made to prevent total depletion of specific product which will affect the business operation. Based on the diagram, we can conclude that the product is currently available at an acceptable level.

![Warehouse](./images/half-donut-gauge/warehouse.PNG)

Sample data download [here](./sample-data/half-donut-gauge/warehouse-stock-availability.csv).

### Vehicle Tyre Safety Check (Logistic Company)

For logistic companies that own a lot of vehicles, safety measure is always a pain point as they can't manage to monitor the vehicles' tires condition of such huge amount of vehicles. Half donut chart can be utilized to monitor whether the tires current pressure are within the safe limit or not. Based on the diagram, we can conclude this specific tyre is not safe to be used as it falls between the yellow bar and indicate it should be changed as soon as possible. 

![Tyre](./images/half-donut-gauge/tyre.PNG)

Sample data download [here](./sample-data/half-donut-gauge/tyre-safety-monitor.csv).
