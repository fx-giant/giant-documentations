# How to Integrate with GIANT Messaging Service

## Introduction

This document is to guide internal developer to understand the API call to Messaging service.  
Messaging service is a service provides API to create a new email.

### Prerequisite
* Messaging Service's url and port (in order to send REST API request to the service)

### API of Messaging Service
Messaging Service is using REST API. User can call REST API request to Messaging Service to send out email. The service is connected to SMTP Service specified in Email Service URL Module in “Configure System” page.

## Message API

### Create Message API
This API will sends request to Messaging Service to send out email.

*Note:* To verify is the email successfully send out from Messaging Service.
1. After send POST request to Create Message API, a messageId is returned from Messaging service.
2. Call Get Message Activity API to get MessageActivityId.
3. Use MessageActivityId to get the MessageActivityLog.
4. If the email is successfully send, the MessageActivityLog's status is `SUCCEEDED`. If the email is failed, the status is `FAILED`.

#### Request Path
`/messages`

#### Request Method
`POST`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### JSON Request Object
Following is the structure of the JSON request object.

| Field Name | Data Type | Description |
| :------------ | :------------ | :------------ | 
|channel| String|	Specify which channel to use. Currently, only “DEFAULT” is available.<br><br> *Example:* <br>`“channel”:“DEFAULT”` (always use DEFAULT as channel) |
| applicationName |	String | Specify the name of the service sending the request.<br><br> *Example:* <br>`“applicationName”: “fusionex”` |
| isPlainText |	Boolean | Specify the content type of the content. <br><br> true or false (always use false for html content)<br>true – For message content in plain text<br>false – For message content in html<br><br> *Example:* <br>`“isPlainText”: false` |
| from | String | Specify sender’s email.<br>If no email is provided, then it will use the sender email specify in the “Email Service URL Module”’s “Sender Email” in the “Configure System” page in GIANT.<br><br> *Example:* <br>`“from”: “emailaddress@service.com”` |
| to |Array of string |	List of emails to send to. (This is an optional field) <br><br> *Example:* <br> `“to”: [“emailaddress@service.com”, ”emailaddress2@service.com”]` <br> or <br> `“to”: [“emailaddress@service.com”] ` |
| cc |	Array of string	| List of emails to cc. (This is an optional field) <br><br> *Example:* <br> `“cc”: [“emailaddress@service.com”, ”emailaddress2@service.com”]` <br> or <br> `“cc”: [“emailaddress@service.com”]` |
| bcc |	Array of string | List of emails to bcc. This is an optional field <br><br> *Example:* <br> `“bcc”: [“emailaddress@service.com”, ”emailaddress2@service.com”]` <br> or <br> `“bcc”: [“emailaddress@service.com”] ` |
| subject |	String | Specify subject of the email <br><br> *Example:* <br> `“subject”: “Email Subject”` |
| content |	String | Specify content of the email <br> `“content”: “This is an email content”` |
| attachments |	Array of object | List of attachment’s id. The attachmentId can be obtained from Create Attachment API. Please refer to Create Attachment API on creating attachment. This is an optional field.<br><br> *Example:* <br> `“attachments”: [{“attachmentId”: “08e7330b-24a4-4452-ba12-688fd336e06b”}, {“attachmentId”: “c4515630-c0ce-41e1-8bcc-f7233feb8904”}]` <br> or <br> `“attachments“: [{“attachmentId”: “08e7330b-24a4-4452-ba12-688fd336e06b”}]` |

*Example of JSON Request Object 1:*
```json
{
    "channel" : "DEFAULT",
    "applicationName" : "Demo-APP",
    "isPlainText" : false,
    "from" : "sender@email.com",
    "to" : [ 
        "receiver@email.com"
    ],
    "subject" : "Sample Email",
    "content" : "<b>Title:</b><br>Hello World."
}
```

*Example of JSON Request Object 2:*
```json
{
  "channel": "DEFAULT",
  "applicationName": "Demo-APP",
  "isPlainText": false,
  "from": "sender@email.com",
  "to": [
    "receiver@email.com", "receiver2@email.com"
  ],
  "cc": [
    "cc1@email.com", "cc2@email.com"
  ],
  "bcc": [
    "bcc@email.com"
  ],
  "subject": "Email Subject",
  "content": "Email Content",
  "attachments": [{“attachmentId”: “08e7330b-24a4-4452-ba12-688fd336e06b”}]
}
```

#### Response

##### Success Response
Once new email request is received by the service, the service will return back a UUID as the messageId.
The messageId can use to get Message Activity of the message.

**Response Code:**
`200`

**Response JSON:**
``` json
{
  "messageId": "58ae1023-6505-41de-af05-bbb02b775347"
}
```

##### Failed Response
The service will return 400 Bad Request when the Messaging Service failed to construct the email.

*Example of Response:*

**Response Code:**
`400` Bad Request

**Response JSON:**
``` json
{
	"code": "97005",
	"error": "BadRequest",
	"exception": "com.fsx.bda.messaging.exception.ToNotFoundException",
	"message": "To recipient does not exist",
	"path": "messages",
	"diagnostic": null,
	"status": 400,
	"timestamp": 1511752848156,
	"date": "2017-11-27T11:20:48:156Z"
}
```

#### Sample CURL
```
curl -XPOST -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' -H "Content-type: application/json" -d '{
    "channel" : "DEFAULT",
    "applicationName" : "Demo-APP",
    "isPlainText" : false,
    "from" : "sender@email.com",
    "to" : [ 
        "receiver@email.com"
    ],
    "subject" : "Sample Email",
    "content" : "<b>Title:</b><br>Hello World."
}' 'http://messagingservice:8097/messages'
```

### Get Message API
This API will get Message Record by messageId

#### Request Path
`/messages/{messageId}`

`messageId` is obtained from reponse of create message API.

*Example:*   
`/messages/58ae1023-6505-41de-af05-bbb02b775347`

#### Request Method
`GET`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### Response

##### Success Response
When a matching messageId, with same OrganizationId and ClientId (from request header) is found in database, the API will return a message object

**Response Code:**
`200`

**Response JSON:**
``` json
{
  "messageId": "58ae1023-6505-41de-af05-bbb02b775347",
  "clientId": "Sample-App",
  "organizationId": "27d3db37-d6a6-4656-bbb8-56a4fd75eddd",
  "isDeleted": false,
  "channel" : "DEFAULT",
  "applicationName" : "Demo-APP",
  "isPlainText" : false,
  "from" : "sender@email.com",
  "to" : [ 
  "receiver@email.com"
  ],
  "cc": [],
  "bcc": [],
  "subject" : "Sample Email",
  "content" : "<b>Title:</b><br>Hello World.",
  "attachments": [],
  "createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
  "createdUTCDateTime": "2017-11-27T11:20:48:156Z",
  "lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
  "lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
}
```

##### Failed Response
The service will return 404 Not Found when no matching record of message is found in database.

*Example of Response:*

**Response Code:**
`404` Not Found

**Response JSON:**
``` json
{
	"code": "97100",
	"error": "Not Found",
	"exception": "com.fsx.bda.messaging.exception.MessageNotFoundException",
	"message": "Message with Id (58ae1023-6505-41de-af05-bbb02b775347) does not exist",
	"path": "messages/58ae1023-6505-41de-af05-bbb02b775347",
	"diagnostic": null,
	"status": 404,
	"timestamp": 1511752848156,
	"date": "2017-11-27T11:20:48:156Z"
}
```

#### Sample CURL
```
curl -XGET -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' 'http://messagingservice:8097/messages/58ae1023-6505-41de-af05-bbb02b775347'
```

## Message Activity API

### Get Message Activities API
This API will get Message Activities list by messageId

#### Request Path
`/messageActivities`

#### Request Method
`GET`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### Request Parameters

| Parameter Name | Description |
| :--- | :--- |
| `messageId` | `messageId` is obtained from reponse of create message API. |


*Example:*   
`/messageActivities?messageId=58ae1023-6505-41de-af05-bbb02b775347`

#### Response

##### Success Response
When a matching messageId, with same OrganizationId and ClientId (from request header) is found in database, the API will return a message object

**Response Code:**
`200`

**Response JSON:**
``` json
[ 
  {
    "messageActivityId": "abdf34e6-0fde-4f12-8582-c9facbe0bddc",
	"messageId": "58ae1023-6505-41de-af05-bbb02b775347",
	"startTime": "2017-11-27T11:20:47:000Z",
	"retryCount": 0,
	"createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"createdUTCDateTime": "2017-11-27T11:20:48:156Z",
	"lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
  }
]
```

##### Failed Response
The service will return empty array [] when no matching record of message is found in database.

*Example of Response:*

**Response Code:**
`200`

**Response JSON:**
``` json
[]
```

#### Sample CURL
```
curl -XGET -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' 'http://messagingservice:8097/messageActivities?messageId=58ae1023-6505-41de-af05-bbb02b775347'
```

### Get Message Activity Logs API
This API will get Message Activity Logs by message activity Id

#### Request Path
`/messageActivities/{messageActivityId}/messageActivityLogs`

`messageActivityId` is obtained from reponse of create message API.

*Example:*   
`/messageActivities/abdf34e6-0fde-4f12-8582-c9facbe0bddc/messageActivityLogs`

#### Request Method
`GET`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### Response

##### Success Response
When a matching messageActivityId, with same OrganizationId and ClientId (from request header) is found in database, the API will return a list of Message Activity Log

**Response Code:**
`200`

**Response JSON:**

* Email Successfully Sent
``` json
[ 
  {
    "logId": "b39200e7-142d-40d2-971c-88f3ba529e63",
	"LogType": "INFO",
	"message": "Message successfully sent",
	"startTime": "2017-11-27T11:20:47:000Z",
	"status": "SUCCEEDED",
	"createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"createdUTCDateTime": "2017-11-27T11:20:48:156Z",
	"lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
  }
]
```

* Email Failed to Send 1
``` json
[ 
  {
    "logId": "b39200e7-142d-40d2-971c-88f3ba529e63",
	"LogType": "ERROR",
	"message": "Invalid Addresses",
    "errorCode": "99999",
    "diagnostics": "[Ljava.lang.StackTraceElement;@50f0e369",
	"startTime": "2017-11-27T11:20:47:000Z",
	"status": "FAILED",
	"createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"createdUTCDateTime": "2017-11-27T11:20:48:156Z",
	"lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
  }
]
```

* Email Failed to Send 2
``` json
[ 
  {
    "logId": "b39200e7-142d-40d2-971c-88f3ba529e63",
	"LogType": "ERROR",
	"message": "Could not connect to SMTP host: mail.server.com, port: 587",
    "errorCode": "99999",
    "diagnostics": "[Ljava.lang.StackTraceElement;@6a569909",
	"startTime": "2017-11-27T11:20:47:000Z",
	"status": "FAILED",
	"createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"createdUTCDateTime": "2017-11-27T11:20:48:156Z",
	"lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
	"lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
  }
]
```

##### Failed Response
The service will return 404 Not Found when no matching record of message activity is found in database.

*Example of Response:*

**Response Code:**
`404` Not Found

**Response JSON:**
``` json
{
	"code": "97101",
	"error": "Not Found",
	"exception": "com.fsx.bda.messaging.exception.MessageActivityNotFoundException",
	"message": "Message activity with Message Activity Id (abdf34e6-0fde-4f12-8582-c9facbe0bddc) is not found.",
	"path": "messageActivities/abdf34e6-0fde-4f12-8582-c9facbe0bddc/messageActivityLogs",
	"diagnostic": null,
	"status": 404,
	"timestamp": 1511752848156,
	"date": "2017-11-27T11:20:48:156Z"
}
```

#### Sample CURL
```
curl -XGET -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' 'http://messagingservice:8097/messageActivities/abdf34e6-0fde-4f12-8582-c9facbe0bddc/messageActivityLogs'
```

## Attachment API

### Create Attachment API
This API will sends request with multipart/form-data to Messaging Service to create new attachment to use when create Message.

#### Request Path
`/attachments`

#### Request Method
`POST`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### Request Parameters

| Parameter Name | Description |
| :--- | :--- |
| `originalFileName` | `originalFileName` is to declare the original file name of the attachment. The `originalFileName` is used as the filename of attachment in the email |

*Example:*   
`/attachments?originalFileName=My%20Attachment.csv`

#### Request Body
Create Attachment API uses `multipart/form-data` to receive file.
User needs to send POST request with file in `multipart/form-data`.

#### Response

##### Success Response
Once new email request is received by the service, the service will return back a UUID as the messageId.
The messageId can use to get Message Activity of the message.

**Response Code:**
`200`

**Response JSON:**
``` json
{
  "attachmentId": "77867401-fc6c-41b9-b790-d73c4842e26d"
}
```

##### Failed Response
The service will return 400 bad request when the Messaging Service doesn't receive any file.

*Example of Response:*

**Response Code:**
`400` Bad Request

**Response JSON:**
``` json
{
	"code": "99999",
	"error": "BadRequest",
	"exception": "org.jvnet.mimepull.MIMEParsingException",
	"message": "HTTP 400 Bad Request",
	"path": "",
	"diagnostic": "org.jvnet.mimepull.MIMEParsingException: Missing start boundary...",
	"status": 400,
	"timestamp": 1511752848156,
	"date": "2017-11-27T11:20:48:156Z"
}
```

#### Sample CURL
```
curl -XPOST -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' -F 'upload=@/home/attachment.txt' 'http://messagingservice:8097/attachments?originalFileName=My%20Attachment.csv'
```

### Get Attachment API
This API will get Attachment Record by attachmentId

#### Request Path
`/attachments/{attachmentId}`

`attachmentId` is obtained from reponse of create attachment API.

*Example:*   
`/attachments/77867401-fc6c-41b9-b790-d73c4842e26d`

#### Request Method
`GET`

#### Header
User needs to include following HTTP header in the request.

| Name  | Description  | Required  | Remarks  |
| :------------ | :------------ | :------------ | :------------ |
| `ClientId`  | Client Id sends request  | Yes  | Default value “Fusionex”, can be the application/service name  |
| `UserId`  | UUID of the user sends the request  | Yes  | Prefer using GIANT userId.  |
| `OrganizationId`  | Organization id of the user sends the request  | Yes  | Prefer using GIANT organizationId.  |

#### Response

##### Success Response
When a matching messageId, with same OrganizationId and ClientId (from request header) is found in database, the API will return a message object

**Response Code:**
`200`

**Response JSON:**
``` json
{
  "messageId": "77867401-fc6c-41b9-b790-d73c4842e26d",
  "originalFileName": "My Attachment.csv",
  "fileSize": 36,
  "path": "/home/messaging/attachments/77867401-fc6c-41b9-b790-d73c4842e26d",
  "createdBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
  "createdUTCDateTime": "2017-11-27T11:20:48:156Z",
  "lastEditedBy": "98f01c58-1a1e-4802-9571-7b431bf9bf65",
  "lastEditedUTCDateTime": "2017-11-27T11:20:48:156Z"
}
```

##### Failed Response
The service will return 500 Internal Server Error when no matching record of attachment is found in database.

*Example of Response:*

**Response Code:**
`500` Internal Server Error

**Response JSON:**
``` json
{
	"code": "99999",
	"error": "Internal Server Error",
	"exception": "java.lang.NullPointerException",
	"message": null,
	"path": "",
	"diagnostic": "java.lang.NullPointerException\n\tat...",
	"status": 500,
	"timestamp": 1511752848156,
	"date": "2017-11-27T11:20:48:156Z"
}
```

#### Sample CURL
```
curl -XGET -H 'ClientId: Sample-App' -H 'UserId: 98f01c58-1a1e-4802-9571-7b431bf9bf65' -H 'OrganizationId: 27d3db37-d6a6-4656-bbb8-56a4fd75eddd' 'http://messagingservice:8097/attachments/77867401-fc6c-41b9-b790-d73c4842e26d'
```
