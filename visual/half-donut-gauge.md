# Half Donut Gauge

![Icon](./images/half-donut-gauge/half-donut-gauge.PNG)

Half Donut Gauge is a type of chart that displays overall performance of specific data. This chart is commonly used to show KPI, daily sales target and etc. 

## Diagram Design / Configutation
---
### Binding
- The bindings required are 2 measurements binding which are :-
    >Actual and Target value

    ![Binding](./images/half-donut-gauge/binding.PNG)

### Filter

There are few options as shown in the picture below to filter on data.

    ![Filter](./images/half-donut-gauge/filter.PNG)

### Top Bottom Filter

There are three options to filter by row limit

    ![TopBottomFilter](./images/half-donut-gauge/topbottomfilter.PNG)

- All
- Top
- Bottom

## Use Cases
---

### Retail Warehouse Stock Availability

Through the gauge, you can visualize specific stock availability. Decision such as restock or order from supplier can be made to prevent total depletion of specific product which will affact the business operation. Based on the diagram, we can conclude that the product is currently available at an acceptable level.

![Warehouse](./images/half-donut-gauge/warehouse.PNG)

Sample data download [here](./sample-data/half-donut-gauge/warehouse-stock-availability.csv).

### Vehicle Tyre Safety Check (Logistic Company)

For logistic company that own a lot of vehicle, safety measure are always the pain point as they can't manage to monitor tyre condition of such huge amount of vehicles. Gauge chart can be utilize to monitor whether the tyre current pressure is within the safety line or not. Based on the diagram, we can conclude this specific tyre is safe as the pressure is within the yellow bar which indicates safe. 

![Tyre](./images/half-donut-gauge/tyre.PNG)

Sample data download [here](./sample-data/half-donut-gauge/tyre-safety-monitor.csv).
