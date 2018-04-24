# Simple Form Tutorial
In this guide, we will provide a simple tutorial to create a form with provided service. Please follow these steps:

## 1. Download Tutorial Pack
Please download [Tutorial Package](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/tutorial.zip)

## 2. Extract the package
Extract the tutorial package. You should below below files in the extract folder:
```
form
├── config.json
├── userDetail.html
├── userDetail.js
├── userDetail.css
├── userList.html
├── userList.js
└── userList.css
```

## 3. Update the Form ID
- prepare 2 new GUID, you can generate the GUID from [here](https://www.guidgenerator.com/online-guid-generator.aspx)
- open the config.json
- replace the id: ```"formId": "caf86aef-b850-4541-969f-000000000001"``` with 1st new GUID
- replace the id: ```"formId": "caf86aef-b850-4541-969f-000000000002"``` with 2nd new GUID
- open userDetail.js, replace ````"caf86aef-b850-4541-969f-000000000001"```` with 1st new GUID
- open userList.js, replace ````"caf86aef-b850-4541-969f-000000000002"```` with 1st new GUID
- zip all the files in the folder

## 4. Upload to GIANT
- Login to GIANT
- Expand the side menu, select "My Form(s)"
***Caution: If you do not see this in the side menu, please check with your portfolio admin for you right to form.***
- At the "Form(s)" page, click the "Add" button
- Click the "Choose a File" button and select the new zip package for upload.

## 5. View the ready tutorial form
There are 2 new form (User List & User Detail) added in the "Form(s)" page. You can view the tutorial form.

## 6. Add new field to tutorial form
Add new field call email
- open userDetail.js, find ````const properties```` and add the new field "email" into it
```
const properties = [
		"firstName",
		"lastName",
		"gender",
		"position",
		"address1",
		"address2",
		"isActive",
		"email"
	];
```
- open userDetail.html, add the new field "email" input before "isActive" input field
```
		<div class="tutorial__row">
			<div class="tutorial__label">Email</div>
			<div class="text-box text-box--white common__box-shadow">
				<div class="text-box__input">
					<input type="text" data-bind="value: email">
				</div>
			</div>
		</div>
```
**Please refer [Sample Field HTML Code Snippet](https://github.com/fx-giant/giant-documentations/tree/master/form/tutorial#sample-field-html-code-snippet) for more type of input**

## 7. View the latest form in GIANT
- zip all the file and replace existing zip file 
- upload latest zip to GIANT
- add a new user record, you notice there is a new field "Email" at the form right before "Active"

# Sample Field HTML Code Snippet
1. Text
```
		<div class="tutorial__row">
			<div class="tutorial__label">Field Display Name</div>
			<div class="text-box text-box--white common__box-shadow">
				<div class="text-box__input">
					<input type="text" data-bind="value: field">
				</div>
			</div>
		</div>
```
![Text](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/text.png)
2. Text Area
```
		<div class="tutorial__row">
			<div class="tutorial__label">Field Display Name</div>
			<div class="text-box dac__text-area text-box--white">
				<div class="text-box__input">
					<textarea data-bind="value: field"></textarea>
				</div>
			</div>
		</div>
```
![Text Area](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/textarea.png)
3. Number
```
		<div class="tutorial__row">
			<div class="tutorial__label">Field Display Name</div>
			<div class="text-box text-box--white common__box-shadow">
				<div class="text-box__input">
					<input type="number" data-bind="value: field">
				</div>
			</div>
		</div>
```
![Number](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/number.png)
4. Drop down
```
		<div class="tutorial__row">
			<div class="tutorial__label">Field Display Name</div>
			<div class="tutorial__dropdown-container">
				<drop-down-list params="items: fieldOptions, selectedItem: field"></drop-down-list>
			</div>
		</div>
```
![dropdown](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/dropdown.png)
5. Radio button
```
		<div class="tutorial__row tutorial__row-radio">
			<div class="tutorial__label">Field Display Name</div>
			<span class="tutorial__radio-button">
				<input name="field" type="radio" value="value1" class="tutorial__radio-button" data-bind="checked: field">
				<span>Value1 Display Name</span>
			</span>
			<span class="tutorial__radio-button">
				<input name="field" type="radio" value="value2" class="tutorial__radio-button" data-bind="checked: field">
				<span>Value2 Display Name</span>
			</span>
		</div>
```
![radio button](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/radiobutton.png)
6. Switch
```
		<div class="tutorial__row">
			<div class="tutorial__label">Field Display Name</div>
			<div class="switch switch--green switch--medium">
				<label>
					<input type="checkbox" data-bind="checked: field">
					<span class="switch-lever"></span>
				</label>
			</div>
		</div>
```
![Switch](https://github.com/fx-giant/giant-documentations/blob/master/form/tutorial/images/switch.png)