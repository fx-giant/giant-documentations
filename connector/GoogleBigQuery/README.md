# Google BigQuery Connector Guide

This docummentation provide guidance to setup Google BigQuery OAuth credential and connect via GIANT as a connector.

# Prerequisite
- GIANT account with permission create connection source
- Google account with
    - Google BigQuery ready
    - Permission to create credential - client ID

# 1. Preparation for Google BigQuery OAuth Credential
## Create Google Credential - OAuth Client ID
1. Login to Google Cloud Platform.
2. Navigate to **Credentials** under **APIs & Services**
3. Click the **Create credentials** button and choose **OAuth client ID**.
4. Under **Application type**, select **Web application**.
5. Enter name for this client ID. Example GIANT Google BigQuery.
6. Enter GIANT URL into **Authorised JavaScript origins**. 
7. Add GIANT URL and [**Google OAuth 2.0 Playground**](https://developers.google.com/oauthplayground) into **Authorised redirect URIs**. ![create-client-id](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/create-oauth-client-id.png)
8. Click **Create** button. Upon success create, the new client ID is show at the Credential page.
9. Navigate into the new OAuth Client ID to get the **Client ID** & **Client secret**. ![client-id-credential](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/client-id-credential.png)

## Generate refresh token
1. Go to [**Google OAuth 2.0 Playground**](https://developers.google.com/oauthplayground/).
2. Click **OAuth 2.0 Configuration** icon button at the top right. OAuth 2.0 configuration box will be popout.
3. Select `Select Account Screen` at **Force prompt**.
4. Check the **User your own OAuth credentials**. 
5. Enter the **OAuth Client ID** & **OAuth Client Secret**.
![oauth-configuration](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/oauth-configuration.png)
6. Under **Step 1 Select & authorize APIs**, find for **BigQuery API v2**. Tick as below. ![oauth-step1](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/oauth-step1.png)
7. Click the **Authorize APIs** button to proceed. It will redirect to authorization page, continue to allow the Google BigQuery permission for GIANT. Once complete, it will redirect back to the **OAuth 2.0 Playground** page.
8. Notice the page will show you Step 2 with **Authorization code** available. Click the **Exchange authorization code for tokens** button. 
9. **Refresh token** and **Access token** are ready. ![exchange-token](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/exchange-token.png)


# 2. Create Google BigQuery connection source at GIANT
1. Go to GIANT new connection source add page. Select Google BigQuery.
![New Connection Source Page](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/new-connection-source-page.png)
2. Fill in all the information obtain from above. ![Create Giant Google BigQuery](https://github.com/fx-giant/giant-documentations/blob/master/connector/GoogleBigQuery/images/google-bigquery-source.png)
3. After fill up all details, click **Connect** & continue the step in the screen. 
4. You are now success create Google BigQuery connection source at GIANT. 










