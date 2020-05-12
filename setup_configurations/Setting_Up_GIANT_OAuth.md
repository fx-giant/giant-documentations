# GIANT OAuth
This documentation is provide guide on how to integrate with GIANT OAuth.

## Requirement:
- GIANT environment url
- Callback URL of application
- Client Id
- Client Secret
> Please provide callback URL for application to GIANT Product team so they can return you with client id and client secret.

## How to Authenticate through GIANT
API: 
- Url: 
```
[GIANT url]/oauth/token
```
- Method: POST
- Request: 
```
{
    client_id: "xxx", //replace with client id obtain from GIANT Product team
    client_secret: "xxx", //replace with client secret obtain from GIANT Product team
    redirect_uri: "xxx", //replace with callback URL
    grant_type: "token"
}
```
- Response: 
```
{
    access_token: "xxxx"
    token_type: "bearer"
}
```


