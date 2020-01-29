# How to Integrate with GIANT Audit Log Service

## Introduction

Logging is essentially important when a system deals with users in production as it allows developers or authorized person to clearly identify the performance, root cause and user activities.

### Prerequisite

Please prepare for following informations to integrate with GIANT Audit Log service.

* Connection Information of RabbitMq used by Audit Log Service
   * Hostname
   * Port
   * Username
   * Password
* Connection Information of Audit Log Service (View Log)
   * Url
   * Port

### Audit Log Service

Audit Log Service is using RabbitMq to listen for new log. To create a new log, user needs to send a new queue to RabbitMq. Messaging Service to send out email. The service is connected to SMTP Service specified in Email Service URL Module in “Configure System” page.

## Audit Log Service

Giant V2.0 Audit Log Service able to support other application to be consumed. However, there are some minimum requirement that needed to be follow in order to send audit logs from third party application to Giant Log.

### Create New Audit Log using Queue


#### Queue Name

Audit Log Service is using queue:

`APPLICATION.LOG`

#### Structure of Log Message

| Field Name | Data Type | Description |
| :------------ | :------------ | :------------ | 
| LogId | String |	GUID of the log. (Optional)<br>If no LogId is provided, Audit Log Service will generate a new logId for the new log.<br><br> *Example:* <br>`“LogId”:“c4fe61ae-2213-4024-a5ec-450a0cb4ed5d”` |
| **Severity** | Object | This is an enum of severity. Please refer to **Structure of Severity Field** section. |
| Message | String | Message of the log <br><br> *Example:* <br> `“Message”:“2017-12-06 16:53:59.9883 ERROR FX.Messaging.Service Fail to send email.”` |
| Origin | String | Method Name/Class Name/Origin of audit being logged <br><br> *Example:* <br> `“Origin”:“FX.Messaging.Service.SendEmail”` |
| Module | String | Module of the log <br><br> *Example:* <br> `“Module”:“Messaging”` <br><br>  *Suggest create uniq module to separate from other and ease for retreive back desire audit record.*  <br> *Avoid using "ConnectionSource", "DashboardView", "ConnectionSourceLibrary", "DashboardViewLibrary", "ConnectionSourceSecurity", "Job", "Security", "SmartQuery", "System", "UserManagement"*  <br>  |
| **Parameter** | Object | Please refer to **Structure of Parameter** section. |
| CreatedBy | String | Giant UserId in GUID.<br><br> *Example:* <br> `“UserId”:“b3410fdc-1111-2222-3333-7adc3225c058”` |
| CreatedUtcDateTime | String | Date time of the log is being created.<br> The date time string is using ISO 8601 format.(`YYYY-MM-DDTHH:mm:ss.sssZ`)<br><br> *Example:* <br> `“CreatedUtcDateTime”:“2015-07-04T12:08:56.235+08:00”` |


* **Structure of Severity Field**

The severity field is an enum as followings:

(`Trace: 0`, `Debug: 1`, `Info: 2`, `Warn: 3`, `Error: 4`, `Fatal: 5`, `Off: 6`)

| Field Name | Data Type | Description |
| :------------ | :------------ | :------------ | 
| Name | String | Log severity name.<br>The severity name is a enum as followings:<br>`Trace`, `Debug`, `Info`, `Warn`, `Error`, `Fatal`, `Off`<br><br> *Example:* <br> `“Severity”:“Info”` |
| Ordinal | String | Log severity ordinal number.<br>The `ordinal` is the number value of enum of Severity. The value of Ordinal is depending on which severity name it is as followings.<br>(`Trace: 0`, `Debug: 1`, `Info: 2`, `Warn: 3`, `Error: 4`, `Fatal: 5`, `Off: 6`)<br><br> *Example:* <br> `{"Severity”:“Info”,“Ordinal”:“2”}` |

* **Parameter**

Additional parameter/variable stored with the log.

*Note:* You can have your own specific parameter name and value but it needs to be in consistence data type (string, int, object, array) due to limitation of ElasticSearch is not fully dynamic field mapping.

| Field Name | Data Type | Description |
| :------------ | :------------ | :------------ | 
| UserId | String | Giant UserId of who is involved in the log.<br><br> *Example:* <br> `“UserId”:“b3410fdc-1111-2222-3333-7adc3225c058”` |
| userName | String | Giant UserName of who is involved in the log.<br>This field is used when filtering with Audit Log API Service.<br><br> *Example:* <br> `“userName”:“user@email.com”` |
| FormattedMessage | String | Formatted Message.<br> Required Field in order to display the Summary message Log in Giant Audit Page<br><br> *Example:* <br> `“FormattedMessage”:“Successfully sent email”` |

##### Example of the Log 1

```json
{
	"LogId": "c4fe61ae-2213-4024-a5ec-450a0cb4ed5d",
	"Severity": {
		"Name": "Info",
		"Ordinal": 2
	},
	"Message": "2017-10-01T00:10:222.123456Z INFO RUNNING DATA CLEANSING",
	"Origin": "FX.APP.SIT.DATA",
	"Module": "FX.ETL",
	"Parameter": {
		"Id": "ABCD124",
		"Status": "Success",
		"Amount": 1100,
		"UQC": "CTN",
		"Action": "Reviewed",
		"UserId": "e4e99789-02de-4ece-8d0c-d47a86b1768e",
		"userName": "fxUser@adv-fusionex.com",
		"ActionResult": "Success",
		"title": "Test Log",
		"FormattedMessage": "Successfully create Log"
	},
	"CreatedBy": "e4e99789-02de-4ece-8d0c-d47a86b1768e",
	"CreatedUtcDateTime": "2017-10-17T14:40:25.1815937+08:00"
}
```

##### Example of the Log 2
```json
{
	"LogId": "b3e1cdfa-4ff2-4d4d-835f-dda67fcb2462",
	"Severity": {
		"Name": "Error",
		"Ordinal": "4"
	},
	"Message": "2017-12-06 16:53:59.9883 ERROR FX.BDA.App.VisualIntelligence.Extension.JavaNaturalLanguageProcessing.LogSearchFail Fail to query.",
	"Origin": "FX.BDA.App.VisualIntelligence.Extension.JavaMicroServiceNaturalLanguageProcessing",
	"Module": "SmartQuery",
	"CreatedBy": "b3410fdc-17b4-46d1-8b5b-7adc3225c058",
	"CreatedUtcDateTime": "2017-12-06T16:53:59.9883842+08:00",
	"Parameter": {
		"ExceptionType": "argumentNullException",
		"searchText": "today sales",
		"ActionResult": "SmartQuery.Search.Fail",
		"StackTrace": " at NLog.LoggerImpl.Write(Type loggerType, TargetWithFilterChain targets",
		"UserId": "b3410fdc-17b4-46d1-8b5b-7adc3225c058",
		"ExceptionTypeFullName": "System.ArgumentNullException",
		"userName": "fxUser@adv-fusionex.com",
		"Exception": {
			"ClassName": "System.ArgumentNullException",
			"Message": "Value cannot be null.",
			"Data": null,
			"InnerException": null,
			"HelpURL": null,
			"StackTraceString": " at System.Linq.Enumerable.Select[TSource,TResult](IEnumerable`1 source, Func`2 selector)",
			"RemoteStackTraceString": null,
			"RemoteStackIndex": 0,
			"ExceptionMethod": "8 Select System.Core, Version=4.0.0.0, Culture=neutral,",
			"HResult": -2147467261,
			"Source": "System.Core",
			"WatsonBuckets": null,
			"ParamName": "source"
		},
		"FormattedMessage": "Fail to query. Query: today sales"
	}
}
```

#### Publish Audit Log to RabbitMq

Please refer to RabbitMq tutorial on publish log message to RabbitMq in different language.

Link: https://www.rabbitmq.com/getstarted.html

##### Sample Java Code Publish AuditLog to RabbitMq
```java
public void createLog() {
	String QUEUE_NAME = "APPLICATION.LOG";
	String auditLog = "{"LogId":"c8de95f2-0718-4482-930d-ba014671282d","Severity":{"Na......";
	
	ConnectionFactory factory = new ConnectionFactory();
	factory.setHost("172.0.0.1");
	factory.setPort(5672);
	factory.setUsername("username");
	factory.setPassword("password");
	
	Connection connection = factory.newConnection();
	Channel channel = connection.createChannel();
	
	channel.basicPublish("", QUEUE_NAME, null, auditLog.getBytes());
	// Done, the auditlog is now sent to the logagent
	channel.close();
	connection.close();
}
```

#### After Create New Auditlog using Queue
After create the new auditlog, if the auditlog is being created successfully, you should be able to find your auditlog from AuditLog API Service.

### POST Audit Log Service to get Log with filter

User can send REST API to AuditLog Service to get existing log records.

#### Request Path
`/auditlog/All`

#### Request Method
`POST`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |


#### Structure of Get Audit Log Request Object

| Field Name | Data Type | Description |
| :------------ | :------------ | :------------ | 
| userId | String |	UserId of who is getting the log records. The UserId is GIANT userId. <br><br> *Example:* <br>`“userId”:“c4fe61ae-2213-4024-a5ec-450a0cb4ed5d”` |
| size | Integer | Maximum number of rows to display in the filtered result. <br><br> *Example:* <br> `“size”:100` |
| pageNo | Integer | Page number of filtered result. This field is used with `size` field.<br>As example: <br>`"size":50, "pageNo":"0"` means the display the 1st page of 50 rows. (1 - 50) <br> `"size":30, "pageNo":"2"` means the display the 3rd page of 30 rows. (61 - 90) <br><br> *Example:* <br> `“pageNo”:“0”` |
| text | String | Filter logs containing text inside logId, severity name, module, userName, title. <br><br> *Example:* <br> `“text”:“Connection Timeout”` |
| logId | String | Filter logs with the matching logId. <br><br> *Example:* <br> `“logId”:“c4fe61ae-2213-4024-a5ec-450a0cb4ed5d”` |
| severities | Array of String | Filter logs with the matching severity name to list of severity.<br>The severity can be any of the followings: <br>`info`, `warning`, `error`, `fatal`, `debug`, `trace`<br><br> *Example:* <br> `“severities”:[“info”,"warning"]` |
| message | String | Filter logs with the exact matching of message.<br><br> *Example:* <br> `“message”:“Create Connection Failed”` |
| modules | Array of String | Filter logs with matching module inside the list. <br><br> *Example:* <br> `“modules”:[“authentiation”]` |
| origin | String | Filter logs with the matching origin. <br><br> *Example:* <br> `“origin”:“FX.Authenticate”` |
| userNames | Array of String | Filter logs with matching parameter.userName to list of userNames.<br><br> *Example:* <br> `“userNames”:["user@email.com"]` |
| startDate | String | Filter logs which is created after the date.<br>The date time string is using ISO 8601 format.<br>(`YYYY-MM-DDTHH:mm:ss.sssZ`)<br><br> *Example:* <br> `“startDate”:“2015-07-04T12:08:56.235+08:00”` |
| endDate | String | Filter logs which is created before the date.<br>The date time string is using ISO 8601 format.<br>(`YYYY-MM-DDTHH:mm:ss.sssZ`)<br><br> *Example:* <br> `“endDate”:“2015-07-04T12:08:56.235+08:00”` |

##### Example of POST Auditlog to get logs with filter

```json
{
  "userId": "f700b84e-b616-93c0-ded2-c7527ac52130",
  "size": 100,
  "pageNo": 0
}
```

##### Example 2 of POST Auditlog to get logs with filter
```json
{
  "userId": "2fb381c4-59f2-4bd3-86ba-bdae6a15e23f",
  "size": 100,
  "pageNo": 0,
  "severities": [
    "debug",
    "error",
    "fatal",
    "info"
  ],
  "modules": [
    "job", "security"
  ],
  "userNames": [
    "user@email.com", "user2@email.com"
  ],
  "startDate": "2017-12-11T00:00:00+08:00",
  "endDate": "2017-12-12T23:59:59+08:00"
}
```

##### Example 3 of POST Auditlog to get logs with filter
```json
{
  "userId": "2fb381c4-59f2-4bd3-86ba-bdae6a15e23f",
  "size": 100,
  "pageNo": 0,
  "text": "",
  "logId": "c377e4bb-8eee-429d-85b9-840bf5130e14",
  "severities": [
    "debug",
    "error",
    "fatal",
    "info"
  ],
  "message": null,
  "modules": [
    "job", "security"
  ],
  "origin": "FX.App.Audit.Log",
  "userNames": [
    "user@email.com"
  ],
  "startDate": "2017-12-11T00:00:00+08:00",
  "endDate": "2017-12-12T23:59:59+08:00"
}
```

#### Response

##### Success Response
The API will return a list of auditlog matching the filter criteria in the POST request.

**Response Code:**
`200`

**Response JSON:**
``` json
[
  {
    "logId": "c8de95f2-0718-4482-930d-ba014671282d",
	"severity": {
		"name": "Info",
		"ordinal": "2"
	},
	"message": "2017-12-12 15:04:15.4457 INFO FX.BDA.App.LoggableAF.LoggableUserAuthenticationFacade.LogSignInSuccess Successfully sign in. UserName: user@email.com",
	"origin": "FX.BDA.App.LoggableAF.LoggableUserAuthenticationFacade",
	"parameter": {
		"ActionResult": "Security.Login.Success",
		"StackTrace": "at NLog.LoggerImpl.Write(Type loggerType, TargetWithFilterChain targets, LogEventInfo logEvent, LogFactory factory)\r\n",
		"UserId": "2fb381c4-59f2-4bd3-86ba-bdae6a15e23f",
		"userName": "user@email.com",
		"FormattedMessage": "Successfully sign in. UserName: user@email.com"
	},
	"module": "Security",
	"createdBy": "2fb381c4-59f2-4bd3-86ba-bdae6a15e23f",
	"createdUtcDateTime": "2017-12-12T15:04:15.4457841+08:00"
  }
]
```

**Response JSON:**

Empty array is returned if no matching result is found.

``` json
[]
```

##### Failed Response
The service will return 400 Bad Request if the request's JSON is not a valid JSON format.

*Example of Response:*

**Response Code:**
`400` Bad Request

**Response Body:**
```
Unexpected character ('a' (code 50)): was expecting a colon to separate field name and value
 at [Source: org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream@36c16521; line: 1, column: 354]
```

#### Sample CURL
```
curl -XPOST -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' -H "Content-type: application/json" -d '{
  "userId": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
  "size": 100,
  "pageNo": 0,
  "logId": "c377e4bb-8eee-429d-85b9-840bf5130e14",
  "severities": [
    "debug",
    "error",
    "fatal",
    "info"
  ],
  "modules": [
    "job", "security"
  ],
  "origin": "FX.App.Audit.Log",
  "userNames": [
    "user@email.com"
  ],
  "startDate": "2017-12-11T00:00:00+08:00",
  "endDate": "2017-12-12T23:59:59+08:00"
}' 'http://auditlogservice:8102/auditlog/All'
```

