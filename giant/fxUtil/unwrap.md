# FX Util Unwrap
Unwraping value of either knockout object, function, or normal value. This is useful when we need to do ```x = value``` or ``` x = value() ``` to get the value from a variable or knockout object. In case the value is ```null``` compliance, it will return empty object ```{}```

## API
| name | parameters | return | description
| - | - | - | - |
| fx.util.unwrap | - variable or knockout object | value or empty object | Getting the value or empty object |
| | | | 

## Example
``` js
fx.util.unwrap(123); // 123
fx.util.unwrap(null); // {}
fx.util.unwrap(ko.observable(555)); // 555
```