# FX Omni lovelyAlert
GIANT's alert modal

## API
** all listed are prefixed with ```fx.Omni.lovelyAlert```
| name | parameters | return | description
| - | - | - | - |
| show |  |  | show the alert modal
| hide |  |  | hide the alert modal
| isPopout | boolean | boolean | knockout observable to determine if the alert is in showing state or not
| title | string | | knockout observable for alert title
| message | string | | knockout observable for alert message
| okText | string | | knockout observable for alert "OK" button
| cancelText | string | | knockout observable for alert "Cancel" button
| okAction | function | | callback when user pressed "OK" button
| cancelAction | function | | callback when user pressed "Cancel" button
| update | lovelyAlertModel | | update the state of all properties in lovelyAlert (see example below) 
## Example
``` js
fx.Omni.lovelyAlert.show(); // you will see an animated loading indicator in the middle of screen
fx.Omni.lovelyAlert.hide(); // if the animated loading indicator is shown, this will hide it
fx.Omni.lovelyAlert.update({
    isError: false,
    title: "Update Success",
    message: "Successfully update lovely alert details",
    ok: function(){console.log("OK pressed")}
    cancel: function(){console.log("Cancel pressed")}
})
```