# Don't Do 

This is the example from previous practices that can be marked as **bad**:

## 1. Don't Use API Response Right Away
**location:** History.js line ~300 (mostly applied to other js also)

In this part, before the response became the real data, it would be better if we have the preprocess of the response and extend the entity, so later it will be easier to handle if have additional entity-related change.

```js
formRecord.getAll(koFormId(), query, {
    success: function (response) {
        if (!response[0].message)
            koRows(response);  //extend this beforehand
        else
            koRows([]);

        lovelyProgress.hide();
    }
});
```

## 2. Unsafe And Bad Data Attribute Binding
**location:** Details.html line ~350 (and mostly applied to all other html)

Explanation:
As we see it looping ```foreach: PAMList``` inside a table, we can infer that this is a tabular data which is most likely an entity. The way we represent the data entity in UI can be different with the one stored in database, either it's a currency formatting, dattime formatting, enumerate mapping, and so on.

``` html
<tbody data-bind="foreach: PAMList">
    <tr>
        <td>
            <span data-bind="text: mawbNo"></span>
        </td>
        <td>
            <span data-bind="text: customsRegNo"></span>
        </td>
        <td>
            <span data-bind="text: flightNo"></span>
        </td>
        <td>
            <span data-bind="text: moment(sta).format('DD-MM-YYYY')"></span> <!-- this is the one that we shouldn't do -->
        </td>
        <td>
            <span data-bind="text: declarant.carrierCode"></span>
        </td>
        <td>
            <span data-bind="text: totalBagsDR"></span>
        </td>
        <td>
            <span data-bind="text: totalWeightDR"></span>
        </td>
    </tr>
</tbody>
```
## 3. Bad Api Structure
**location:** Details.js line ~165

From here we can tell that the pam list and the pam detail is using same API and sent together. This will be hard to do server pagination later, so better we separate it out.

``` js
formRecord.getAll(koFormId(), query, {
    success: function (response) {
        var item = response[0];

        if (!item.message) {
            koTextGateReleaseNo(item.GateReleaseNo);
            koText3PLROC(item.CompanyROC);
            koText3PLCompany(item.CompanyName);
            koTextVehicleRegNo(item.VehicleRegNo);

            koTextDriverName(item.DriverName);
            koTextDriverNRIC(item.DriverNRIC);
            koTextDateTime(moment(item.CreatedDate).format('DD-MM-YYYY hh:mm:ss A'));
            koTextStatus(item.Status);
            koTextRemarks(item.CancelRemarks);

            koPAMList(item.PAMList);    /// means the pam is under response

            loadJS(environmentVariable.baseUrl + "Components/Form-Local-Design-Components/jquery-barcode.min.js", function () {
                $('#divBarcode').barcode(item.GateReleaseNo, 'code128', {
                    barHeight: 50,
                    fontSize: 14
                });
            });
        }

        lovelyProgress.hide();
    }
});
```

## 4. Refering Parent Scope In Data
**location:** History.html line ~ 330 (Mostly applied to other pages also)

Prefer to avoid using parent for this since this is the data field, better use a pureComputed inside entity

``` html
<td>
    <span data-bind="text: $parent.getUser(ModifiedBy)"></span>
</td>
```


## 5. Inefficient Seeking
**location:** History.js line ~423 (applied to some other part that use getUser)

```js
function getUser(userId) {
    var name = '';

    if (userId != null && userId != '') {
        ko.utils.arrayForEach(userList, function (user) {
            if (user.userId == userId) {
                name = user.displayName;
            }
        });
    }

    return name;
}
```

## 6. Deleting Attributes
**location:** Request.js line ~192

In this script, the deletion of item is performed due to sending data back to server

``` js
list = $.map(list, function (item) {
    delete item.isExpand; //this one <<<<<<<<<<<<

    item.packages = $.map(item.packages, function (package) {
        if (package.isSelected) {
            packageCount++;
            return {
                hawbNo: package.hawbNo
            };
        }
    })

    if (item.packages.length > 0)
        return item;
});



//line ~220
formRecord.post(koFormId(), query, {
    success: function (result) {
        var content = result[0];
        if (content.message == 'Success')
        {
            redirectToForm(dftzForm.dftzGatePassDetailsForm, content._id);
        }
    },
    fail: function(result){
        //display failed message
        toastr.warning('Fail', 'Error', { timeOut: 5000, positionClass: 'toast-bottom-center' });
        button.removeAttr('disabled');
        lovelyProgress.hide();
    }
});

```
i would prefer rather than deleting attribute, we explicitly state which data that we will send to server instead rather than deleting attributes since maybe there is a high chance of the attribute to be forgotten to be deleted later on if we put new attribute somewhere.

## 7. Improper Variable Naming

** location: ** Request.js line ~ 216 (applied to some other part also)

The variable name is query, but i dont think we send this as query in a post request. Another thing is we are sending a single big chunk of data, where as the CompanyROC, CompanyName, and other are most likely not going to be processed. The only one going to be processed is only PamList. It would be better if we dont put unecessary information there

``` js
 var query = {
     action: 'generate',
     CompanyROC: koText3PLROC(),
     CompanyName: koText3PLCompany(),
     VehicleRegNo: koTextVehicleRegNo(),
     DriverName: koTextDriverName(),
     DriverNRIC: koTextDriverNRIC(),
     PAMList: list
 }

 formRecord.post(koFormId(), query, {
     success: function (result) {
         var content = result[0];
         if (content.message == 'Success') {
             redirectToForm(dftzForm.dftzGatePassDetailsForm, content._id);
         }
     },
     fail: function (result) {
         //display failed message
         toastr.warning('Fail', 'Error', {
             timeOut: 5000,
             positionClass: 'toast-bottom-center'
         });
         button.removeAttr('disabled');
         lovelyProgress.hide();
     }
 });
```
