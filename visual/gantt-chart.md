# Gantt Chart
![gantt-chart](./images/gantt-chart/gantt-chart.svg)    
Gantt Chart is a type of bar chart that is typically used for project planning and to illustrate project or activity schedules. Each bar represents a task or an activity where the length of the bar is determined by the start and end date of the task.

## Diagram Design / Configuration
---

### Binding
- The bindings required are 4 dimensions binding.  
    >Module, Breakdown, Start Date Time and End Date Time for dimensions.
      
  ![Binding](./images/gantt-chart/binding.PNG)
  
- The optional binding is color binding which binds the color of the bars.

 ![Color Binding](./images/gantt-chart/color-binding.PNG)
 ![Color Binding Example](./images/gantt-chart/color-binding-example.PNG)
Sample data download [here](./sample-data/gantt-chart/sample-project-mgmt-color.csv).

### Drill Down
**Drill Down** setting can be used to drill down data according to its hierarchy. 

### Sort
For large data sets, a setting called **Sort** can be used change the arrangement of the data according to user's preference.

### Filter
**Filter** setting can be used to choose the range of data displayed on the chart.

## Use cases

### Project Management Flow on Product Launching   
   
This dataset shows the project management flow of a product launch from the research to launch of the product. Download sample data [here](./sample-data/gantt-chart/sample-project-mgmt.csv).

This Gantt Chart is suitable to be used to illustrate the project management flow of the product launch as it consists of four fields, **Tasks**, **Subtask**, **Task Start** and **Task End**. An additional field, **Status Color** can be used to customize the color of each task. 

|Bindings |Select|
|---|---|
|Module|Tasks|
|Breakdown|Subtask|
|Start Date Time|Task Start|
|End Date Time|Task End|
|Status Color|Color|

Based on the chart, we can conclude that five teams have different subtasks to complete throughout the project duration. Each team has different number of bars depending on the number of subtasks to be completed by them. 

From using this chart, project managers will be able to refer to this chart to determine if the scheduled deadlines are met. From the distribution of the subtasks, project managers will also be able to identify the amount of resources needed by each team to accomplish their tasks. 

![Project Management Flow](./images/gantt-chart/sample-project-mgmt.png)
