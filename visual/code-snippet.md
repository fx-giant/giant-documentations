# Getting started
This is a code snippet to help you build your own visual pack.

## Prerequistie
* Visual pack knowledge

### Quadrant properties HTML and JS

These files define the quadrant controls presented on the quadrant-properties panel. Here are some frequently used controls:

- [single dimension binding](#single-dimension-binding)
- [single measurement binding](#single-measurement-binding)
- [multiple paths binding](#multiple-paths-binding)
- [separator](#separator)
- [textbox](#textbox)
- [select/drop-down-list](#select/drop-down-list)
- [switch](#switch)
- [top and bottom filter](#top-bottom-filter)
- [sort](#sort)
- [filter](#filter)
- [cross chart filter](#cross-chart-filter)


#### # single dimension binding

![single-dimension.PNG](./images/code-snippet/single-dimension.PNG)

- `labelKey` defines the label presented above the control.
- `addLabelKey` defines the placeholder label in the control before anything gets selected.
- `excludedBindings` defines the bindings to be excluded after they have been selected somewhere else.
- `selectedBindingContext` defines the currently selected binding and is updated when the user changes the binding.
- `*Binding` define the methods that are called to add, delete and update the binding in Visual parameters.

```html
<quadrant-control params="
    controlType: 'singleBinding',
    labelKey: 'Category',
    addLabelKey: 'Add category',
    bindingType: 'dimension',
    selectedConnectionSource : selectedConnectionSource,
    excludedBindings: excludedDimensionBindings,
    selectedBindingContext: categoryPathBindingContext,
    addBinding : addCategoryPath,
    deleteBinding: deleteCategoryPath,
    updateBinding: updateCategoryPath">
</quadrant-control>
```

```javascript
var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    selectedConnectionSource: koSelectedConnectionSource,
    excludedDimensionBindings: koExcludedDimensionBindings,
    categoryPathBindingContext: koCategoryPathBindingContext,
    categoryPath: koCategoryPath,
    addCategoryPath: addCategoryPath,
    updateCategoryPath: updateCategoryPath,
    deleteCategoryPath: deleteCategoryPath
});
```

#### # single measurement binding

![single-measurement.PNG](./images/code-snippet/single-measurement.PNG)

Refer to [single dimension binding](#single-dimension). Measurement binding has aggregate operators like `None`, `Sum`, `Avarage`, etc. that help you group your raw data.

```html
<quadrant-control params="
    controlType: 'singleBinding',
    labelKey: 'Size',
    addLabelKey: 'Add size',
    bindingType: 'measurement',
    selectedConnectionSource : selectedConnectionSource,
    excludedBindings: excludedMeasurementBindings,
    selectedBindingContext: sizePathBindingContext,
    addBinding : addSizePath,
    deleteBinding: deleteSizePath,
    updateBinding: updateSizePath">
</quadrant-control>
```

```javascript
var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    selectedConnectionSource: koSelectedConnectionSource,
    excludedMeasurementBindings: koExcludedMeasurementBindings,
    sizePathBindingContext: koSizePathBindingContext,
    sizePath: koSizePath,
    addSizePath: addSizePath,
    updateSizePath: updateSizePath,
    deleteSizePath: deleteSizePath
});
```

#### # multiple paths binding
- `addDimensionLabelKey ` defines the placeholder label in the control before anything gets selected.
- `addMeasurementLabelKey` defines the placeholder label in the control before anything gets selected.

> Notes: If either dimension or measurement binding is not needed, exclude its respective functions.

```html
<quadrant-control params="controlType: 'multiBinding',
                                        labelKey: 'qpColumns',
                                        addDimensionLabelKey: 'qpAddDimensionColumns',
                                        addMeasurementLabelKey: 'qpAddMeasurementColumns',
                                        selectedConnectionSource : selectedConnectionSource,
                                        bindings: columnsBindingContexts,
                                        addDimensionBinding : addDimensionColumn,
                                        addMeasurementBinding : addMeasurementBindingFunction,
                                        deleteBinding: deleteColumns,
                                        updateBinding: updateColumns>
</quadrant-control>
```

```javascript
//#region shorthand
var getBindingName = fxUtil.bindingName;
var bindingChartDisplayName = fxUtil.bindingChartDisplayName;
var bindingPropertyType = fxUtil.bindingPropertyType;

//#region private properties
var projectionEntityManager = quadrantComposer.projectionEntityManager;
var projectionEntityManagerPush = projectionEntityManager.push.bind(projectionEntityManager);

//#region public properties
var addMeasurementBindingFunction = (!koIsLiveSource())
    ? addMeasurementColumn
    : null;

function addDimensionColumn(binding) {
    checkBlankSuggestion();
    setColumns(binding, enumPropertyTypeDimension);
    addNPushProjections(binding, koColumnsBindingContexts);
}
function addMeasurementColumn(binding) {
    checkBlankSuggestion();
    setColumns(binding, enumPropertyTypeMeasurement);
    addNPushProjections(binding, koColumnsBindingContexts);
}

function checkBlankSuggestion() {
    var projections = koProjections();
    if (projections.length > 0)
        return;
    var visual = koVisual();
    visual.columns = [];
}

function setColumns(binding, propertyType) {
    var visual = koVisual();
    var newColumnPath = getBindingName(binding);
    var newTitle = bindingChartDisplayName(binding);;
    visual.columns.push({
        dType: "textGridColumn",
        header: newTitle,
        valuePath: newColumnPath
    });
    bindingPropertyType(binding, propertyType);
}

function deleteColumns(binding) {
    var visual = koVisual();
    var deletedColumnPath = getBindingName(binding);

    //currently will always remove the 1st match column in visual
    var matchedColumn = _.find(visual.columns, function (column) {
        return column.valuePath === deletedColumnPath;
    });
    visual.columns = _.reject(visual.columns, function (column) {
        return column === matchedColumn;
    });

    deleteProjections(binding);
    koColumnsBindingContexts.remove(binding);
}

function updateColumns(existingBinding, newBinding) {
    var visual = koVisual();
    var columns = visual.columns;
    var originColumnPath = getBindingName(existingBinding);
    var newColumnPath = getBindingName(newBinding);
    var newTitle = bindingChartDisplayName(newBinding);
    var originBindingPropertyType = existingBinding.bindingType;

    var columnIndex = _.indexOf(_.pluck(columns, 'valuePath'), originColumnPath);
    columns[columnIndex].valuePath = newColumnPath;
    columns[columnIndex].header = newTitle;
    bindingPropertyType(newBinding, originBindingPropertyType);

    var newBindingContext = updateProjection(existingBinding, newBinding);
    koColumnsBindingContexts.replace(existingBinding, newBindingContext);
}

function addNPushProjections(binding, koObservableArrayObject) {
    var bindingContext = addProjections(binding);
    koObservableArrayObject.push(bindingContext);
}

function addProjections(binding) {
    var bindingContext = projectionEntityManagerPush(binding);
    //User pass in single object, single object will be return as well
    if (!isArray(binding))
        return bindingContext[0];

    bindingContext.bindingType = bindingPropertyType(bindingContext.entity);
    return bindingContext;
}

function deleteProjections(binding) {
    projectionEntityManagerDelete(binding);
}

var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    columnsBindingContexts: koColumnsBindingContexts,
    addDimensionColumn: addDimensionColumn,
    addMeasurementColumn: addMeasurementColumn,
    addMeasurementBindingFunction: addMeasurementBindingFunction,
    updateColumns: updateColumns,
    deleteColumns: deleteColumns,
});

```

>Notes: Example of multiple paths binding can refer to data matrix chart in GIANT.

#### # separator

![separator.PNG](./images/code-snippet/separator.png)

The horizontal line between the quadrant controls.

```html
<hr class="quadrant-properties__seperator">
```

#### # textbox

![normal-textbox-input.PNG](./images/code-snippet/normal-textbox-input.PNG)

Make sure that you have `normalTextBoxInput` binding exported in the `viewModel`.

```html
<div class="sandbox__row">
    <div class="sandbox__label">Normal Text Box Input</div>
    <div class="text-box text-box--white">
        <div class="text-box__input">
            <input type="text" data-bind="value: normalTextBoxInput">
        </div>
    </div>
</div>
```

```javascript
var refreshQuadrant = fxQuadrant.refreshQuadrant;

var koNormalTextBoxInput = ko.observable().extend({ rateLimit:600 });

function initValues() {
    var visual = koVisual();
    var parameters = visual.parameters || {};
    if (parameters.yourTextProperties)
        koNormalTextBoxInput(parameters.yourTextProperties);
}

function initEvents() {
    koNormalTextBoxInput.subscribe(function(newValue) {
        var visual = koVisual();
        var parameters = visual.parameters;
        parameters.yourTextProperties = newValue;
        refreshQuadrant();
    });
}

var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    // observables
    normalTextBoxInput: koNormalTextBoxInput
});
```

#### # select/drop down list

![select.PNG](./images/code-snippet/select.png)

```html
<div class="sandbox__row">
    <div class="sandbox__label">Select</div>
    <div class="quadrant-properties_dropdown-list-container">
        <drop-down-list params="items: selectItems, selectedItem: mySelect"></drop-down-list>
    </div>
</div>
```

```javascript
var refreshQuadrant = fxQuadrant.refreshQuadrant;

var koSelectItems = ko.pureComputed(function(){
    var options = [];
    //name is the display name show in the drop down list
    //value is the key value of the option
    options.push({ name: "Up", value: "up" });
    options.push({ name: "Down", value: "down" };
    return options;
});

var koMySelect = ko.observable();

function initValues() {
    var visual = koVisual();
    var parameters = visual.parameters || {};
    if (parameters.yourSelectProperties) {
        var selectedItem = findOptionByValue(koSelectItems(), parameters.yourSelectProperties);
        koMySelect(selectedItem);
    }
}

function initEvents() {
    koMySelect.subscribe(function(newSelect) {
        var visual = koVisual();
        var parameters = visual.parameters;
        parameters.yourSelectProperties = newSelect.value;
        refreshQuadrant();
    });
}

function findOptionByValue(options, value) {
    for (var i in options) {
        if (options[i].value == value)
            return options[i];
    }
    return null;
}

var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    // observables
    selectItems: koSelectItems,
    mySelect: koMySelect
});
```

#### # switch

![switch.PNG](./images/code-snippet/switch.PNG)

```html
<div>
    <div class="quadrant-properties__label">Enable threshold</div>
    <div class="quadrant-properties__databind-item">
        <switch params="value: isThresholdEnabled, isLabelVisible: false"></switch>
    </div>
</div>
```

```javascript
var refreshQuadrant = fxQuadrant.refreshQuadrant;

var koIsThresholdEnabled = ko.observable().extend({ rateLimit:600 });

function initValues() {
    var visual = koVisual();
    var parameters = visual.parameters || {};
    if (parameters.yourBooleanProperties != undefined)
        koIsThresholdEnabled(parameters.yourBooleanProperties);
}

function initEvents() {
    koIsThresholdEnabled.subscribe(function(newValue) {
        var visual = koVisual();
        var parameters = visual.parameters;
        parameters.yourBooleanProperties = newValue;
        refreshQuadrant();
    });
}

var me = this;
$.extend(true, me, {
    // skipped some bindings above...
    // observables
    isThresholdEnabled: koIsThresholdEnabled
});
```

#### # top-bottom-filter
![top-bottom-filter.PNG](./images/code-snippet/top-bottom-filter.PNG)
```html
<quadrant-control params="controlType: 'topBottom',
                          quadrantComposer: quadrantComposer,
                         selectedConnectionSource: selectedConnectionSource">
</quadrant-control>
```

#### # sort
![sort.PNG](./images/code-snippet/sort.PNG)
```html
<quadrant-control params="controlType: 'sorting',
                          quadrantComposer: quadrantComposer,
                          selectedConnectionSource : selectedConnectionSource">
</quadrant-control>
```

#### # filter
![filter.PNG](./images/code-snippet/filter.PNG)
```html
<quadrant-control params="controlType: 'multiCondition',
                          quadrantComposer: quadrantComposer,
                          selectedConnectionSource: selectedConnectionSource,">
</quadrant-control>
```

#### # cross chart filter
![cross-chart-filter.PNG](./images/code-snippet/cross-chart-filter.PNG)
```html
<quadrant-control params="controlType: 'filterSubscriber',
                          quadrant: quadrant">
</quadrant-control>
```

> Notes: The JS functions to be implemented can be referred from other charts or samples.
