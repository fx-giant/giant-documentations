# Form Development
This documentation will provide you a full end-to-end development of a simple form while explaining GIANT standard in the process.

# Prerequisite
- HTML knowledge
- Javascript knowledge
- CSS knowledge
- Knockout JS knowledge
- MVVM knowledge

# Knowing GIANT
There are some of the most common javascript and css libraries available in GIANT by default. In the event you are going to use the library that already available in GIANT, you don't need to import them through usual html ```<link>``` and ```<script>``` tag anymore. These libraries are:
1. Bootstrap
2. JQuery
3. KnockoutJS
4. D3JS
5. MomentJS
6. Underscore
7. QuillJS
8. AmCharts
9. LodashJS
10. (and some more)

You can always view source GIANT and see what are the available libraries.

# GIANT Standard for Form
1. For HTML, don't put ```<html>``` and ```<head>``` tag anymore, your form is directly a body for the page.
2. Javascript is only the View Model, View Model structure will be explained together with the sample below.
3. CSS file is optional, but avoid using inline style and putting ```<style>``` in HTML

# Getting Started
We recommend you to take a look at a sample simple form from [sample pack](https://github.com/fx-giant/giant-documentations/blob/master/form/sample/sample.zip) and start your development by following the example given.

1. **Preparing Folder**

Now, let's prepare a folder with this structure:
```
form
├── config.json
├── tutorial.html
├── tutorial.js
└── tutorial.css
```
2. ```config.json```

We will put the configuration of the form pack. Detailed explanation of the configuration can be taken from [configuring GIANT form](https://github.com/fx-giant/giant-documentations/blob/master/form/configuring-giant-form.md)
``` json
{
  "forms": [{
    "formId": "8dbeaabd-35d7-639b-9043-3e83974dcf6c",
    "formName": "tutorial",
    "title": "Tutorial Form",
    "serviceUrl": "http://localhost",
    "version": "1.0.0"
  }]
}
```

3. ```tutorial.html```

The HTML that we provide now will be used to be rendered in this region:

![Form Area](https://github.com/fx-giant/giant-documentations/blob/master/form/images/form-area.png)

Let's start with the skeleton of the HTML first:

``` html
<div class="sample-form">
	<div class="jumbotron text-center">
		<h1>This is just a sample form</h1>

		<p class=' description'>This form's id is
			<span class=' form-id' data-bind='text:formId'></span>
		</p>

	</div>
</div>
```

4. ```tutorial.js```

Let's put the skeleton of our javascript view model. This is the convention used in GIANT for view models:
``` js
namespace("fx.giantFormDesign")["tutorial"] = (function () {

	var observable = ko.observable;
	var formRecordApi = fx.DataContext.Application.formRecord;

	function viewModel(params) {

        var koFormId = params.formId;
        
		var me = this;
		$.extend(me, {
			formId: koFormId,

		})
	}


	return {
		viewModel: viewModel
	}

})();
```

5. ```tutorial.css```

And put our simple styling
``` css
.sample-form {
    padding: 20px;
}

.sample-form .title {
    font-weight: bold;
    font-size: 25px;
}

.sample-form .description {
    font-size: 18px;
}

.sample-form .form-id {
    color: blue;
}
```

6. **Zip the folder**, you need to make sure the zip file will have structure as follow:

```
form.zip
├── config.json
├── tutorial.html
├── tutorial.js
└── tutorial.css
```
Sometimes you might zip it in this structure instead:

```
form.zip
└── form
    ├── config.json
    ├── tutorial.html
    ├── tutorial.js
    └── tutorial.css
```
This zip file will throw **configuration not found** exception in GIANT because the config file must be in the root folder in order for it to be detected by GIANT

7. **Uploading Form**

Take the zip file, go to this menu: ``` My Form(s) ---> Add ```, and put the form pack there.

![Form Upload](https://github.com/fx-giant/giant-documentations/blob/master/form/images/form-upload.png)

8. After upload form, you can click on the newly uploaded form and you will see this:

![Form Preview](https://github.com/fx-giant/giant-documentations/blob/master/form/images/form-preview-sample.png)

9. Now we will put a form API request. The API request will be sent to the serviceUrl configuration of the form (refer back the config).

**tutorial.html**

```html
<div class="sample-form">
	<div class="jumbotron text-center">
		<h1>This is just a sample form</h1>

		<p class=' description'>This form's id is
			<span class=' form-id' data-bind='text:formId'></span>
		</p>

    </div>
    
	<div class="container">
		<div class="panel-group">
			<div class="panel panel-primary">
				<div class="panel-heading">Send Request</div>
				<div class="panel-body">
                    <!-- We use this button to send request -->
					<div class="btn btn-primary" data-bind="click:executeGetAll">Execute</div>
					<h4>Response:</h4>
					<pre data-bind="text:getAllResponse"></pre>
				</div>
			</div>
        </div>
    </div>
</div>
```

**tutorial.js**

```js
namespace("fx.giantFormDesign")["tutorial"] = (function () {

	var observable = ko.observable;
	var formRecordApi = fx.DataContext.Application.formRecord;

	function viewModel(params) {

        var koFormId = params.formId;
        //make a new observable
		var koGetAllResponse = observable();
		
		//this function will be executed by the button
		function executeGetAll() {
			formRecordApi.getAll(koFormId(), {
				"query1": "This is query string 1",
				"query2": "Another query string again"
			}, {
		
		success: function (response) {
					responseString = JSON.stringify(response, null, 4);
					koGetAllResponse(responseString);
				}
			})
		}

		var me = this;
		$.extend(me, {
			formId: koFormId,

			//binding for UI
			getAllResponse: koGetAllResponse,
			executeGetAll: executeGetAll,
		})
	}


	return {
		viewModel: viewModel
	}

})();
```
Now zip again the folder and upload the form. The form will be updated and you will be able to see the button. If the button is pressed, it will send api request to ```http://localhost``` (because it's configured to in the config) as: ```http://localhost/?userId={yourUserId}&userName={yourUserName}&query1=This is query string 1&query2=Another query string again```. ```userId``` and ```userName``` is put there by GIANT.

## Form Record API

In ```fx.DataContext.Application.formRecord```, there are 6 commonly used functions:

|Name|Parameters|Method Sent| Return Type |
|-|-|-|-|-|
|getAll|- formId (GUID)<br/> - stringQuery (JSON Object) <br/> - options (Callback Object)|GET| Array |
|get| - formId (GUID)<br/> - id (GUID)<br/> - options (Callback Object)|GET| Object |
|post| - formId (GUID)<br/> - payload (JSON Object)<br/> - options (Callback Object)|POST| Any |
|put| - formId (GUID)<br/> - id (GUID) <br> - payload (JSON Object) <br/> - options (Callback Object)|PUT| Any |
|delete| - formId (GUID)<br/> - id (GUID) <br/> - options (Callback Object)|DELETE| Any|
|action| - formId (GUID)<br/> - payload (JSON Object)<br/> - options (Callback Object)|DELETE| Any|

Note: 
- post, put, and delete will ignore any return informations provided by external service
- action is the only post method that will return any response provided by the external service and can send to any url provided that ```_url``` is provided in the body of the request

Then, from the GIANT Server, the request will be modified and forwarded to follow the following format depends on the type of data store you are using for your form:

### roleApiDataStore
| Name | Forward |
| - | - |
|getAll | {{serviceUrl}} |
| get | {{serviceUrl}}/{{role}} |
| post | {{serviceUrl}}/{{role}} |
| put | {{serviceUrl}}/{{role}}/{{id}} |
| delete | {{serviceUrl}}/{{role}}/{{id}} |
| action | / |

### genericApiDataStore
| Name | Forward |
| - | - |
|getAll | {{serviceUrl}} |
| get | {{serviceUrl}} |
| post | {{serviceUrl}} |
| put | {{serviceUrl}}/{{id}} |
| delete | {{serviceUrl}}/{{id}} |
| action | / |



Note:
- Default Giant String Query consists of:
	- userId={userId}
	- userName={loginName}
- Role is the user current role in camel case form
- There are several headers that is provided by default in the request sent by GIANT:
	- x-giant-userid: User ID of the requester
	- organizationid: Portfolio ID of the requester
- Options usually will use:
	- success : ```function (data){};```
	- error : ```function (data){};```

## Form View Model Params

The view model of form accepting an object called as ```params```
``` js
function viewModel(params) {

}
```
This is the commonly used property of ```params```:
|Property Name| Type | Description
|-|-|-|
|formId| ko.observable | current active form's id |
|formRecordId | ko.observable | currently active form's form record id if applicable |
| formSettings | ko.observable | GIANT's form setting object
| queryStrings | ko.observable | The parsed current query string
| redirectToForm | function | Redirect to form of a given id, with given data passed through query strings
| userProfile | object | Contains the current user's profile information

```redirectToForm(formId, dataOrFormRecordId)```:
- **formId** is the id of other form that is accessible
- **dataOrFormRecordId**: 
	- if this is an object, the object will be converted to a query string in the URL,
	- if this is a string, the string will be used as ```?formRecordId={value}```
