# Embedded View

![Embedded View](./images/embedded-view/embedded-view.PNG)

Embedded View allows you to include an entire view inside another. Using this component allows you to select a view to display, and to pass parameters into the view. Because of this, views can easily act as templates for information.

## Data Binding

There are only two fields for this chart, which are **URL** and **Sandbox Parameters**. **URL** is the only mandatory field and **Sandbox Parameters** is optional. 

Do kindly take note that only websites that allow embedded view will work in this visual. Some websites disallow embedded view for security reasons. As for the **Sandbox Parameters**, the acceptable values are as shown in the table below:

|Value|Description|
|---|---|
|(no value)|Applies all restrictions|
|allow-forms|Allows form submission|
|allow-modals|Allows to open modal windows|
|allow-orientation-lock|Allows to lock the screen orientation|
|allow-pointer-lock|Allows to use the Pointer Lock API|
|allow-popups|Allows popups|
|allow-popups-to-escape-sandbox|Allows popups to open new windows without inheriting the sandboxing|
|allow-presentation|Allows to start a presentation session|
|allow-same-origin|Allows the iframe content to be treated as being from the same origin|
|allow-scripts|Allows to run scripts|
|allow-top-navigation|Allows the iframe content to navigate its top-level browsing context|
|allow-top-navigation-by-user-activation|Allows the iframe content to navigate its top-level browsing context, but only if initiated by user|


## Use Case 1

### Embedded Website, Video & Actionable Button

There are more ways than one to utilise the visual - Embedded View. You could embed a website as long as the website allows embedded view, some might not due to security reasons. You could embed a YouTube video as well as an actionable button like Twitter's Tweet button.

Three different Embedded View charts could be generated with configuration as follows:

|Bindings|Input Value|
|---|---|
|URL|http://www.fusionexgiant.com|
|URL|https://www.youtube.com/embed/t2JtvuPMLRo|
|URL|https://platform.twitter.com/widgets/tweet_button.html|

**Output**

![Embedded View](./images/embedded-view/embedded-view-output-1.PNG)

The output image above shows an example of onboarding dashboard in which there is an embedded view of Fusionex's website for users to navigate through the website without having to open up a new browser window or tab. On the second embedded view chart, there is an embedded YouTube video on Fusionex's donation for users to learn about the corporate social responsibility of Fusionex. Lastly, on the third embedded view chart, there is an embedded Tweet button that directs users to Tweet about their onboarding experience after going through the session, hence the button is placed at the last chart.


## Use Case 2

### Embedded View as a Supporting Visual

Embedded View can be used as a supporting visual as well, for users to visit the website if interested without having to open up a new browser window or tab.

The chart could be generated with configuration as follows:

|Bindings|Input Value|
|---|---|
|URL|http://www.fusionexgiant.com|

**Output**

![Embedded View 2](./images/embedded-view/embedded-view-output-2.PNG)

The output image above shows an example of a dashboard which showcases several data-driven charts with embedded view as a supporting chart at the bottom of the dashboard for users to interact with the website itself to learn more about the company mentioned in the dashboard.