# SVG Funnel

## Stacked SVG Funnel 
- Stacked SVG Funnel is a spiced up variation on a regular stacked bar or column chart. It uses a meaningful subject-related image to frame the values of the whole divided into segments comprising that whole. 

## Non-Stacked Svg Funnel
- Non-Stacked Svg Funnel is a pictograph to show data using images. A pictograph uses picture symbols to convey the meaning of statistical information. Each image stands for a certain number of things. 

## Diagram Design / Configuration

### Bindings
- There are 2 modes in SVG Funnel, stacked and non-stacked. To change the mode, use the **IsStack** toggle.

    ![IsStack Toggle](./images/svg-funnel/isStack-toggle.PNG)

#### Stacked Mode

![Stacked Bindings](./images/svg-funnel/stacked-bindings.PNG)

- The bindings required are 1 dimension and 1 measurement.
    > Name will be the dimension and Value will be the measurement.
- The optional binding is color path.
- The name will be the label for each level while value will determine the area of the dimension in the SVG. The color path will determine the color of each part.
- Color Palette can be used to configure the color of the SVG. 
    > Note: If color path is provided, color palette will be ignored.
- SVG Path can be set by entering the desired SVG image path in the *Icon SVG Path* input field or uploading a Svg file.

- Sample Output
    ![Sample Output](./images/svg-funnel/sample-output.PNG)

- Sample SVG [here](./sample-data/svg-funnel/sample-svg/sample.svg).
    >Copy and paste the svg path to see the below output.
![Example SVG Path](./images/svg-funnel/sample-svg.PNG)
- If no path or file inserted, the default human icon will be used.
    > Note: If file is uploaded, path will be ignored.

#### Non Stacked Mode

![Non Stacked Bindings](./images/svg-funnel/non-stacked-bindings.PNG)

- The bindings required are 1 dimension and 1 measurement.
    > Name will be the dimension and Value will be the measurement.
- The name will be the label for each level while value will determine the number of SVG of the label.
- SVG Path can be set by entering the desired SVG image path in the *Icon SVG Path* input field or uploading a Svg file.
- Display Orientation: To switch the chart to horizontal or vertical.
- Show Maximum Number of Icon: To show the number of icons for each name same as the number of icons of the name with highest value.

    ![Show Maximum Number of Icon](./images/svg-funnel/show-maximum-number-of-icons.PNG)

- Display Label: To Show Value, Show Percentage or Show Percentage and Value.

    ![Show Percent](./images/svg-funnel/show-percent.PNG)

    ![Show Percent and Value](./images/svg-funnel/show-value-and-percent.PNG)

- Show Number with Suffix: To show large number in suffix. (Eg: 1000000 will be 1.00M)

    ![Show Number with Suffix](./images/svg-funnel/show-number-with-suffix.PNG)

- Color: To set the color of the icons.

    ![Color](./images/svg-funnel/color-blue.PNG)

- Scale: To set the value represented by the icon.

    ![Scale 8000](./images/svg-funnel/scale-8000.PNG)

- Sample Output
    ![Sample Output](./images/svg-funnel/non-stacked-sample-output.PNG)

### Caveats
- If there is a null column in name field, it will still work with only value.
- If there is a null column in value field, it will not exist in the diagram but will only exist in the legend.
- If there is a negative value, the chart will not function properly.

Example: 
![Caveat 1](./images/svg-funnel/caveats-1.PNG)
![Caveat 2](./images/svg-funnel/caveat-2.PNG)

## Use Cases

### Stacked Mode

- ### Coca Cola Ingredients
    We can use SVG Funnel to show the ingredients of coca cola. We can use coca cola icon to make the visual fascinating and attractive.
Sample data download [here](./sample-data/svg-funnel/coca-cola-ingredients.csv). Get Coca Cola SVG [here](./sample-data/svg-funnel/coca-cola-svg/coca-cola.svg).

    #### Ouput
    ![Coca Cola](./images/svg-funnel/coca-cola.PNG)

    #### Binding 
    The diagram below shows the data binding for coca cola ingredients use case.

    ![Data binding](./images/svg-funnel/coca-cola-binding.PNG)

- ### Airplane Materials
    We can use SVG Funnel to show the materials of an airplane. We can use an airplane icon to visualize the material of an airplane. 
    Sample data download [here](./sample-data/svg-funnel/airplane-material.csv). Get Airplane SVG Path [here](./sample-data/svg-funnel/airplane-svg/airplane-svg.txt)

    #### Output

    ![Airplane](./images/svg-funnel/airplane-material.PNG)

    #### Binding
    The diagram below shows the data binding for airplane materials use case.
    
    ![Data binding](./images/svg-funnel/airplane-material-binding.PNG)
