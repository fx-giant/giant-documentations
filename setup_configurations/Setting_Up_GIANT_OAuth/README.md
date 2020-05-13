## OAuth with GIANT example

This is an example node application that implements GIANTs OAuth2 API.

## Prerequisite: 
- GIANT environment URL
- Valid GIANT account to above GIANT environment URL
- Callback URL of application
- Client Id
> Please provide application callback URL to GIANT Product team so they can register the application and return you client id.

## Sample application for GIANT OAuth
In order to run the application:

1. Replace value for `giantOAuthUrl`, `clientId` from prerequisite. 
> this example callback url will be http://localhost:8080
2. Install dependencies by executing: `npm install`.
3. Start the server by executing `node index.js`
4. Navigate to http://localhost:8080 on your browser.

## How to implement

1. Copy the script section in [index.html](/public/index.html).
2. Replace value for `giantOAuthUrl`, `clientId`, `callbackUrl` with your value.
3. Replace function `window.oauth.callback` logic on how to use the access token.