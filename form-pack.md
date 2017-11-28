# Form Pack

Structure:

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
    "version": "0.0.0"
  }]
}
```
And this is the structure in a simple way:
```
{
    "forms": [{
        "formId": this is guid and must be unique,
        "formName": name of form, only use alphanumeric,
        "title": this is the title to be displayed in the form listing
        "serviceUrl": the target of where the API request will be sent
        "version": form version
    },{

    },....
    {

    }]
}
```
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
```
{
    "forms": [{
        "formId": this is guid and must be unique,
        "formName": name of form, only use alphanumeric,
        "title": this is the title to be displayed in the form listing
        "serviceUrl": the target of where the API request will be sent
        "version": form version


        //optional
        "html": name of html file, this will override the formName,
        "script": name of html file, this will override the formName,
        "style": name of html file, this will override the formName,
        "dataStore": the GIANT datastore structure, see bellow for explanation
    },{

    },....
    {

    }]
}
```

## GIANT DataStore structure

In any event that you need to use custom header, you can define it using dataStore and put the configuration inside. The structure of datastore is as follow:
``` json
"dataStore": {
    "dType": "roleApiDatastore", /// dont change this
    "serviceUrl": "http://localhost", ///same as the service url
    "headers": {
        "X-HEADER-NAME": "ABCDEFG"  //request headers to be sent
        .....
    },
    "allowCustomRouting": false /// for special custom routing
}
```

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
        "allowCustomRouting": "false
    }
  }]
}
```