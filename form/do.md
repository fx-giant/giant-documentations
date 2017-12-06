
# Suggestions

This section will contains the suggestion on how to do form in a way that it's easier to maintain and read.


## 1. Don't Use API Response Right Away

When we load data from database, it's better to preprocess the data first before we represent it to UI. For example, if we have the api request as follow:
``` js
formRecordApi.getAll(koFormId(), query,{
    success: function(response){
        koListOfItems(response); //this is using the response right away
    }
})
```
it will be better to extend each of the item first beforehand:
```js
formRecordApi.getAll(koFormId(), query,{
    success: function(response){
        for (var i in response) //we extend first
            extendEntity(response[i])
        koListOfItems(response); 
    }
})

function extendEntity(entity){
    entity.formattedPrice = observable(entity.price.toLocaleString());
}
```
and so on

## 2: Unsafe And Bad Data Attribute Binding

Create an abstraction here so it will be easier to read and maintain later on

for example, as this code:
``` html
        <td>
            <span data-bind="text: moment(sta).format('DD-MM-YYYY')"></span>
        </td>
```
we make it into:
``` html
        <td>
            <span data-bind="text: formattedSTA"></span>
        </td>
```
Refer to [Overall Suggestion #1](#1-don-t-use-api-response-right-away)

## 3. Bad Api Structure

Since most likely the user who ahave access to **detail page** will also have access to **list page**.

It will be better to structure it as:
- **list page**: sending api request to ```/gaterelease```, that will provide the api for ```/gaterelease/{gateReleaseId}``` so we can get the detail of a single gate release
- **detail**: sending api request to ```/pams``` and we can use ```/pam?gateReleaseId={gateReleaseId}``` to filter the pam by gate release id.

## 4  Refering Parent Scope In Data

Refer to [Overall Suggestion #1](#2-unsafe-and-bad-data-attribute-binding)


## 5. Inefficient Seeking

Better create a dictionary based on user id first instead of looping one by one each time trying to retrieve user id.

Also the naming is wrong, seems to be ```getUserName``` instead of ```getUser```

``` js

function reindexUser(users){
    var result = {

    };
    ko.utils.arrayForEach(users, function (user) {
        userId = user.userId;
        result[userId] = user;
    });
    koUserList(result);
}

function getUser(userId){
    var userList = koUserList()
    if (userId && userId in userList)
        return userList[userId];
    return null;
}

function getUserName(userId){
    user = getUser(userId);
    if (user)
        return user.displayName;
    return "";
}
```

## 6. Deleting Attributes

It's not good to delete the already defined attribute, so instead of deleting attribute to send the payload back to server, it will be better to explicitly define what are the payload to be sent to server, the consideration are these:
1. easier to find what are the payload to be sent in the request
2. the probability of the UI crash due to missing attribute is lower

sample solution: 
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
    },
    fail: function(result){

    }
});

```
change to:
``` js


list = $.map(list, function (item) {
    //delete item.isExpand; //this one, just remove this line

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
var data = {
    packages: item.packages,
    driverName: koDriverName(),
    /// and so on
}
formRecord.post(koFormId(), data, {  //change the query to data
    success: function (result) {
        
    },
    fail: function(result){

    }
});

```
