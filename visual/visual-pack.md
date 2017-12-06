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
    "canConfigureThreshold": false
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
