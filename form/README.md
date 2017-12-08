
# GIANT Form Engine

This documentation will provide a brief explanation and demo on how to use GIANT form engine to develop a custom form running inside GIANT.

# Getting Started
This guide will provide you a demo on how to deploy a sample form to GIANT environment

## Prerequisites
- sample form pack, downloadable from [here](https://github.com/fx-giant/giant-documentations/blob/master/form/sample/sample.zip)
- an API endpoint hosted and accessible from GIANT environment, detailed explanation bellow.

## Quickstart
**Note: if you upload sample form pack and you get error of "No Right Exception", try to do these steps:**
- open zip file
- open config.json
- replace the id: ```"formId": "37782e85-64ea-0de5-2f9c-b0c335e997fa"``` with a new GUID, you can generate the GUID from [here](https://www.guidgenerator.com/online-guid-generator.aspx)
- zip the package again
- upload

## API Endpoint

### Run using python

Requirement:
- Python
- Pip
- Flask (python package installed)

Steps:
1.  get source code from [here](https://github.com/fx-giant/giant-documentations/blob/master/form/sample/service-docker/service.py). 
2.  execute ```python service.py```.
3.  get the [sample.zip](https://github.com/fx-giant/giant-documentations/blob/master/form/sample/sample.zip)
4.  open the zip file
5.  modify config.json content, find the ```"serviceUrl": "http://localhost:5000"```, change the ip address and port the service IP and Port
6.  zip the file back
7.  upload to GIANT environment

### Run using docker

Steps:
- get the docker package rom [here](https://github.com/fx-giant/giant-documentations/tree/master/form/sample/backend-service)
- run ```docker build -t form-mock:latest .```
- run ```docker run -p 5000:5000 form-mock:latest```

## Sections

The development guide is separated into:
- [Form Development](https://github.com/fx-giant/giant-documentations/blob/master/form/form-development.md): Development of form, following GIANT's standard
- [Form Pack](https://github.com/fx-giant/giant-documentations/blob/master/form/configuring-giant-form.md): Configuration of form pack
- [Form Sandbox](https://github.com/fx-giant/giant-documentations/blob/master/form/form-sandbox.md): Sandbox tool to help in packaging and deployment
- [Best Practices: Don't Do](https://github.com/fx-giant/giant-documentations/blob/master/form/dont-do.md): Example of not recommended code to be done when developing forms
- [Best Practices: Do](https://github.com/fx-giant/giant-documentations/blob/master/form/do.md): Suggestion on how to make the form in a better way