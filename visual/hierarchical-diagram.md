# Hierarchical Diagram
Hierarchical Diagram is a type of Flow Diagram that display the data flows with respect to the quantities.
This diagram put a visual emphasis on the major transfers or flows within a system with multiple levels or categories.

## Diagram Design / Configuration
---
### Binding
- The minimum bindings required are 2 dimensions binding and 1 measurement binding.  
    >Source and Target for dimensions and Value for measurement.

    ![Binding](./images/hierarchical-diagram/binding.PNG)

### Configure Level
- Additional level can be added or removed.

    **Add Level**

    ![Add Level](./images/hierarchical-diagram/add-level.PNG)

    **Remove Level**

    ![Remove Level](./images/hierarchical-diagram/remove-level.PNG)

### Label Font Size
- Font size of the label in the hierarchical can be set based on input. The accepted unit are all accepted css units (cm, mm, in, px, pt, em, ...).

    ![Label Font Size](./images/hierarchical-diagram/label-font-size.PNG)

### Level Header Position
- The level header position is the position of the header for each level. There are three options for this: top, bottom or hidden.

    ![Level Header Position](./images/hierarchical-diagram/level-header-position.PNG)


### Display value in percentage
- Calculate the percentage of each link from the source and display it in the link and tooltip.

    ![Show Percentage](./images/hierarchical-diagram/show-percentage.PNG)

### Fit to container
- If fit to container is turned on, the container will fit to the size of the container. The container height and width can be set by entering your preference height and width with css units. 
    >Set your container height if there are a lot of inputs so that the diagram can be extended.

    ![Fit To Container](./images/hierarchical-diagram/fit-to-container.PNG)

### Sort By
- To rearrange the node either using name or value.

    ![Sort By](./images/hierarchical-diagram/sort-by.PNG)

## Use cases
---
### Product Distribution of a Food & Beverage Company

A F&B Company wants to visualize their product distribution across the regions. From the diagram, the company can know the relationship between product group and product line and also the relationship between product line and region.

#### Output

![Product Distribution](./images/hierarchical-diagram/product-distribution.PNG)

#### Binding
The diagram below shows the data binding for product distribution use case.

![Product Distribution Binding](./images/hierarchical-diagram/product-distribution-binding.PNG)

---

### US President Death Reason
A list of US Presidents death reason can be shown using hierarchical diagram. This use case is a typical example of flow diagram usage. From the diagram, we can see that most of the US Presidents were assassinated.

#### Output

![US Presidents death reason](./images/hierarchical-diagram/us-president-death-reason.PNG)

#### Binding

![US Presidents death reason binding](./images/hierarchical-diagram/us-president-death-reason-binding.PNG)
