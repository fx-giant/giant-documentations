# FX Omni userProfile
current user informations

## API
| name | parameters | return | description
| - | - | - | -|
| fx.Omni.userProfile.userProfileInfo |  | user profile object | 

## Example
``` js
fx.Omni.userProfile.userProfileInfo(); // a big chunk of user profile informations
fx.Omni.userProfile.userProfileInfo().groups; // list of user's group
fx.Omni.userProfile.userProfileInfo().lastName; // the display name of user
fx.Omni.userProfile.userProfileInfo().role; // user's role id and name
```