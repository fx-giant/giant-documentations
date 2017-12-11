# Form Pack Exceptions

When uploading a form pack, there are some possibilities that exception might occur. This is one of the example of exception when uploading a form pack:

![Exception Example](https://github.com/fx-giant/giant-documentations/blob/master/form/images/form-exception-1.png)

The type of exception is described after ```FX.BDA.App.Common.Exceptions.BusinessException```, for example:

![Exception Type](https://github.com/fx-giant/giant-documentations/blob/master/form/images/form-exception-2.png)

Use the type of exception to lookup for description and possible solution as follow:

| Type | Description | Solution |
| - | - | - |
| FormPackConfigJsonNotFoundException| Unable to find ```config.json``` file | please check the form pack, make sure that the ```config.json``` file is exists in the root of zip file| 
| FormPackConfigJsonInvalidException| ```config.json``` file is found, but the content is not a valid JSON format | make sure that the ```config.json``` file containing a proper JSON configuration | 
FormPackConfigJsonRequiredPropertiesNotFoundException| some mandatory property in ```config.json``` file | please check your ```config.json``` configuration and make sure all mandatory properties are defined |
