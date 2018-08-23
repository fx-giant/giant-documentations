# Visual Pack

## Requirements:

### Skill Set: 
- Javascript
- HTML
- CSS
- [KnockoutJS](http://knockoutjs.com)


## Structure:

``` 
{root}
|-config.json
|-quadrant-properties-{name}.html
|-quadrant-properties-{name}.js
|-{style1}.css
|-{style2}.css
...
|-{style-n}.css
|
|-{script1}.js
|-{script2}.js
...
```

**config.json**: This json is the configuration of the form and each form pack must consists of this config file. Here is the sample of simplest form of config.json content:
``` json
{
    "visualName": "{name}",
    "displayName": "{name}",
    "groupId": "visual.sandbox.{name}",
    "packageId": "sample",
    "author": "Hans Yulian",
    "version": "1.0.0",
    "scripts": [
        "{script1}.js",
        "{script2}.js"
    ],
    "styles": [
        "{style1}.css"
    ],
    "canConfigure3D": false,
    "canConfigureLegend": false,
    "canConfigureAnimation": false,
    "canConfigureColor": false,
    "canConfigureThreshold": false,
}
```

## Configurations
|name | description|
|-|-|
|visualName| name of visual, use camel case|
|displayName| visual pack's diplay name when creating new visual|
|groupId| Group ID|
|packageId| package id, used to replace old visual pack with new one when group and package id match is found|
|author| name of author |
|version| visual pack version|
|scripts| list of scripts to load in sequence|
|styles| list of styles to load in sequence|
|canConfigure3D| toggle of GIANT's 3D configuration |
|canConfigureLegend| toggle of GIANT's legend configuration |
|canConfigureAnimation| toggle of GIANT's animation configuration|
|canConfigureColor| toggle of GIANT's color configuration|
|canConfigureThreshold | toggle of GIANT's threshold configuration |

## Additional properties
When using some of GIANT's configuration such as ```canConfigure3D```, ```canConfigureLegend```, there are additional properties will be added as follow:

| configuration | property name | type | 
| - | - | - |
| canConfigure3D | is3D | boolean |
| canConfigureLegend | legend | legend object |
| canConfigureAnimation | isAnimated | boolean |
| canConfigureColor | colors | array of string |
| canConfigureThreshold | thresholdType | string of threshold type |
| canConfigureThreshold | thresholdSetting | thresholdSetting |

### Legend Object
example:
```
{
    legend: {
        dType: "legend",
        position: "north",
        visibility: "visible"
    }
}
```

The legend information passed have the following properties:

| property name | type | values |
| - | - | - |
| dType | string | legend |
| position | string | none, north, east, south, west |
| visibility | string | hidden, visible |

### thresholdType: 
values: higherIsBetter / lowerIsBetter

### thresholdSetting
example:
```
{
    ...
    thresholdSetting: {
        dType: "thresholdSetting",
        thresholds: [{
                dType: "threshold",
                from: 0,
                to: 30,
                color: "#D91427"
            },
            {
                dType: "threshold",
                from: 30,
                to: 70,
                color: "#F2910A"
            },
            {
                dType: "threshold",
                from: 70,
                to: 120,
                color: "#219131"
            }
        ],
        majorSteps: 10,
        minorSteps: 5,
        tickForeground: "rgba(0,0,0,0)",
        minorTickIndicatorColor: "rgba(0,0,0,0)",
        majorTickIndicatorColor: "rgba(0,0,0,0)"
    },
    thresholdType: "higherIsBetter"
}
```


**thresholdSetting**

| parameter name | data type | values |
| - | - | - |
| dType | string | thresholdSetting | 
| thresholds | array of thresholdObject  | |
| majorSteps | number | |
| minorSteps | number | |
| tickForeground | string | any color |
| minorTickindicatorColor | string | any color |
| majorTickIndicatorColor | string | any color |


**thresholdObject**

| parameter name | data type | values |
| - | - | - |
| dType | string | threshold |
| from | number |  |
| to | number | |
| color | string | any color code |

### Full Example
Here is the example of visual parameters with all of the configuration provided:
```
{
    colors: ["#00AEEF", "#8DC63F", "#FFC20E", "#F06EAA", "#AE9986", "#009BA5", "#00A651", "#F7941D", "#B656AB", "#ABA000", "#F3716D", "#8D7B6B", "#EF413D", "#AD772B", "#878787"],
    is3D: false,
    isAnimated: false,
    legend: {
        dType: "legend",
        position: "north",
        visibility: "visible"
    },
    "thresholdSetting": {
        dType: "thresholdSetting",
        thresholds: [{
                dType: "threshold",
                from: 0,
                to: 30,
                color: "#D91427"
            },
            {
                dType: "threshold",
                from: 30,
                to: 70,
                color: "#F2910A"
            },
            {
                dType: "threshold",
                from: 70,
                to: 120,
                color: "#219131"
            }
        ],
        majorSteps: 10,
        minorSteps: 5,
        tickForeground: "rgba(0,0,0,0)",
        minorTickIndicatorColor: "rgba(0,0,0,0)",
        majorTickIndicatorColor: "rgba(0,0,0,0)"
    },
    thresholdType: "higherIsBetter"
}
```

Notes:
- Quadrant Properties HTML and JS are mandatory
- There is a structure for javascript file as follow:
``` js
//the name "thisIsFormName" for this must be the same with the declared as form name in config json
namespace("leesa.visual")["{name}"] = (function () {

  var observable = ko.observable;


  function viewModel(params) {



    var me = this;
    $.extend(me, {
      
    })
  }


  return {                  /// this structure is a must to be returned for the GIANT to use
    viewModel: viewModel
  }

})();

```
