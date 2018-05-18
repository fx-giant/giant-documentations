# Facebook Connector Guide

This is a document will show you how to create a Facebook connector step by step.

# 1. Go to GIANT new connection source add page 

![New Connection Source Page](https://github.com/fx-giant/giant-documentations/blob/master/connector/Facebook/images/new-connection-source.png)

# 2. Select Facebook it will go to a new page as fellow:

![Facebook](https://github.com/fx-giant/giant-documentations/blob/master/connector/Facebook/images/new-connection-source-facebook.png)

You can click the [Facebook Developers](https://developers.facebook.com/) link to get you App ID and App Secret ID by Create a new App as fellow steps:

#### 1. Login use the Facebook account you want to analysis
#### 2. Go to right top "My Apps > Add New App"
#### 3. Key in your App display name at Dispaly Name field, the Contacty Email will auto refill in your the Facebook acccount Email you login in latest step, then click "Create App ID", fill in hte security check code and submit.
#### 4. At the new page dispaly go to "Settings > Basic " you can get you App Id and App Secret ID
#### 5. Click "Add Platform" , selected WebSite key in the GAINT Website URL. Such as [SG Alpha](http://giant2016-csgb.fusionexsite.com/AnalyticsI) and "Save Change"

Aftter this you can continue add connection source with the new App ID and App Secert ID.
 
you can reference bellow image for more details:

![Facebook Develop New App](https://github.com/fx-giant/giant-documentations/blob/master/connector/Facebook/images/facebook-developers-2.png)


# 3. Debug your App

## 1. Use Graph API Exploere the dubug your Jquery JDK and App

![Graph API Explorer](https://github.com/fx-giant/giant-documentations/blob/master/connector/Facebook/images/facebook-developers-3.png)

* Application: Use for select your App if you have more than one App under one Facebook account.
* Get Token: Generate Acces Token use for test. "Get User Access Token" will show and screen like 

    ![Select Permission](https://github.com/fx-giant/giant-documentations/blob/master/connector/Facebook/images/select-permission.png) 

    to let you select your table permission.


* Book Icon: At here you can show your api call "History" and "Favorites".
* GET: At here you can change your mothod to POST or DELETE.
* v3.0: You can change your JDK version here.
* Submit: Call to Facebook API and get data.










