# FX Notification
Showing toaster on top right corner. This is using the jQuery's toaster

## API
| name | parameters | return | description
| - | - | - | - |
| fx.notification.error | message, title |toaster object reference | red colored toaster |
| fx.notification.info | message, title |toaster object reference | cyan colored toaster |
| fx.notification.success| message, title |toaster object reference | green colored toaster | 
| fx.notification.warning|message, title |toaster object reference | yellow colored toaster |
| | | | 

## Example
``` js
fx.notification.success("Update Success","Update");
```