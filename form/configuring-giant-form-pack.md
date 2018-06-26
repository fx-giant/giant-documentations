# Form Pack

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
|-{name-1}.html
|-{name-1}.js
|-{name-1}.css
....
|-{name-n}.html
\-{name-n}.js
```

**config.json**: This json is the configuration of the form and each form pack must consists of this config file. Here is the sample of simplest form of config.json content:
``` json
{
  "forms": [{
    "formId": "37782e85-64ea-0de5-2f9c-b0c335e997fa",
    "formName": "sample",
    "title": "sample",
    "serviceUrl": "http://localhost",
    "version": "1.0.0"
  }]
}
```
|Field | Data Type | Description|
|-|-|-|
|formId| GUID | Must be unique, the forms id will be used to navigate through form
| formName | String | Name of the form, will be used to identify the html, js, and css file that will be used in the form
| title | String | Display title in the form listing 
| serviceUrl | String | The API request endpoint when using ```fx.DataContext.Application.formRecord```
| version | String | Form version

Notes:
- For each form, html and javascript are mandatory, while css is optional.

- The file that will be used as html, js, and css is based on the form name. So for example if the form name is **"thisIsFormName"**, then the GIANT will look up for file named **thisIsFormName.html**, **thisIsFormName.js**, and optionally **thisIsFormName.css**.

- There is a structure for javascript file as follow:
``` js
//the name "thisIsFormName" for this must be the same with the declared as form name in config json
namespace("fx.giantFormDesign")["thisIsFormName"] = (function () {

  var observable = ko.observable;


  function viewModel(params) {

    var koFormId = params.formId;

    var me = this;
    $.extend(me, {
      formId: koFormId
    })
  }


  return {                  /// this structure is a must to be returned for the GIANT to use
    viewModel: viewModel
  }

})();

```

The complete structure:
``` js
{
    "forms": [{
        "formId": "this is guid and must be unique",
        "formName": "name of form, only use alphanumeric",
        "title": "this is the title to be displayed in the form listing",
        "serviceUrl": "the target of where the API request will be sent",
        "version": "form version"


        //optional
        "html": "name of html file, this will override the formName",
        "script": "name of html file, this will override the formName",
        "style": "name of html file, this will override the formName",
        "dataStore": "the GIANT datastore structure, see bellow for explanation",
        "isApplication": "indicate whether the form to be appear as part of GIANT menu list for quick access.",
        "applicationIcon": "font awesome css class for the form icon in the GIANT menu list.",
        "isHideSearchbar": "flag to indicate to turn off GIANT search bar when access this form in GIANT."
    },{

    },
    
    ....
    
    {

    }]
}
```
|Field | Data Type | Description|
|-|-|-|
|html| String | Specific html file name, will override name deriven from ```formName```
|style | String | Specific css file name, will override name deriven from ```formName```
| script | String | Specific js file name, will override name deriven from ```formName```
| dataStore | DataStore | The API request endpoint when using ```fx.DataContext.Application.formRecord```, this is a more comprehensive configuration that will be explained below.
| isApplication | Boolean | Flag to indicate whether the form to be part of GIANT menu list for quick access.
| applicationIcon | String | Css class name for the form icon appear in GIANT menu list. Default icon will be used if not assign. Refer [Font Awesome](https://fontawesome.com) for list of icon class name.
| isHideSearchbar | Boolean | Flag to indicate whether GIANT search bar availibilty when access this form in GIANT


## GIANT DataStore structure

In any event that you need to use custom header, you can define it using dataStore and put the configuration inside. The structure of datastore is as follow:
``` json
"dataStore": {
    "dType": "roleApiDataStore", 
    "serviceUrl": "http://localhost", 
    "headers": {
        "X-HEADER-NAME": "ABCDEFG"  
    },
    "allowCustomRouting": false 
}
```

|Field | Data Type | Description|
|-|-|-|
|dType| String | For now, always fill this field with value **"roleApiDataStore"**.
|serviceUrl | String | The API endpoint for the form request to be sent.
| headers | String | The header that will be applied to the request
| allowCustomRouting | DataStore | enable this if you want to use "Action" and custom url in "GetAll"

so the example of a form with data store configuration is as follow:

``` json

{
  "forms": [{
    "formId": "37782e85-64ea-0de5-2f9c-b0c335e997fa",
    "formName": "sample",
    "title": "sample",
    "version": "0.0.0",
    "dataStore": {
        "dType": "roleApiDataStore",
        "serviceUrl": "http://localhost:12345/abcdef",
        "headers": {
            "X-SOME-HEADER": "ABCDEF",
            "X-ANOTHER-HEADER": "123456",
        },
        "allowCustomRouting": false
    }
  }]
}
```