# Chatbot Design Guidelines
This guide is intended as a quick reference for you to design a chatbot.
There are two parts involved - **Setup in Dialogflow** and **Setup in GIANT**.
The chatbot configured in this guide mainly illustrates on how to use the **Analytics Response** answer type.
You can refer to [this guide](./getting-started.md) to learn more on how to configure the other response types available in GIANT.

### Pre-Requisites
1. A Dialogflow account (required to setup the bot, Intents and Entities in Dialogflow)
2. A GIANT account (required to setup the bot in GIANT and link with the bot in Dialogflow)
3. A data source (required to setup the dashboard. Answers shown in the chatbot will originate from the dashboard)

## Part 1: Setup in Dialogflow
_NOTE: Please [refer here](./setting-up-chatbot-agent-in-dialogflow.md) for the detailed steps on creating a chatbot agent, creating Entities and Intents in Dialogflow._

1. Create the **Entities** for the Intent to detect the keywords related to your data source. The **Entities** will also be used in the **Response/Action** Configuration. 

![create-entities](./images/chatbot-design-guidelines-images/create-entities.png)

2. Define the synonyms for each of the **Entities** created. 

	_NOTE: The values in the first column have to be EXACTLY the same as the values in the data source. Please take note that it is case-sensitive._
![define_synonyms](./images/chatbot-design-guidelines-images/define_synonyms.png)

3. Create the **Intents** to capture the parameters within the **Training Phrases**. 
![create-intents](./images/chatbot-design-guidelines-images/create-intents.png)

4. Add the **Responses** for the Intent. 
![add-response](./images/chatbot-design-guidelines-images/add-response.png)


## Part 2: Setup in GIANT

_NOTE: Please [refer here](./setting-up-chatbot-agent-in-giant.md) for the detailed steps on creating a chatbot agent in GIANT and linking the GIANT chatbot agent to Dialogflow._

### 2.1 Creating a Dashboard and an Embed Link

1. Upload the data source in GIANT. Then, click on **My Dashboard(s)** to start creating your dashboard. 
![click-my-dashboard](./images/chatbot-design-guidelines-images/click-my-dashboard.png)

2. Click on **+ADD** to add a new dashboard. 
![add-new-dashboard](./images/chatbot-design-guidelines-images/add-new-dashboard.png)

3. **Rename** your dashboard by clicking on the title and type in the new name. Then, click on **VIEW DASHBOARD**. 
![rename-dashboard](./images/chatbot-design-guidelines-images/rename-dashboard.png)

4. Click on **+ADD** to add a new chart into the dashboard. 
![add-chart](./images/chatbot-design-guidelines-images/add-chart.png)

5. Select a **chart** from the list to visualize the data, followed by the **Source** button. 
![select-chart](./images/chatbot-design-guidelines-images/select-chart.png)

6. Select the **data source** from the list shown, followed by the **Proceed** button. 
![select-source](./images/chatbot-design-guidelines-images/select-source.png)

7. The **New Chart** screen is shown for you to configure the chart. Edit the **title** of your chart by highlighting the text and entering a new chart title. 
![rename-chart-title](./images/chatbot-design-guidelines-images/rename-chart-title.png)

8. Locate the **Setting** bar on the right side of the screen. Select the respective options and perform the data binding for the fields for the data to be shown in the chart. 
![chart-setting](./images/chatbot-design-guidelines-images/chart-setting.png)

9. Click on the **Menu** icon on the top right to display the hidden icons. You can change the chart's styling based on your needs.

![chart-styling-menu](./images/chatbot-design-guidelines-images/chart-styling-menu.png)

10. Click on the **Save** button to save the changes made to the chart. 
![save-chart](./images/chatbot-design-guidelines-images/save-chart.png)

11. In the pop-up window shown, select the dashboard to save the chart into. Then, click **Save** again. 
![select-dashboard-save-chart](./images/chatbot-design-guidelines-images/select-dashboard-save-chart.png)

12. Access the dashboard to check on the chart created. 
![access-saved-chart](./images/chatbot-design-guidelines-images/access-saved-chart.png)

13. Click on the **Edit** icon to make adjustments on the chart. 
![edit-dashboard](./images/chatbot-design-guidelines-images/edit-dashboard.png)

14. Click and drag the bottom right corner to resize the chart. 
![resize_chart](./images/chatbot-design-guidelines-images/resize_chart.png)

15. Once done, click on the **Save** button. 
![save-changes-on-chart](./images/chatbot-design-guidelines-images/save-changes-on-chart.png)

16. Repeat **Step 4-15** to add more charts into the dashboard. Since the charts from the dashboard will be displayed as an answer in the chatbot, it is advisable not to add too many charts (not more than 4 charts). 

17. Rearrange the charts in your dashboard according to the order for displaying in the chat conversation (top row, left-most chart will be shown first followed by the chart next to it and so on)
![rearrange-charts](./images/chatbot-design-guidelines-images/rearrange-charts.png)

18. Click on the **Menu** button and select **Embed** icon.
![click-embed](./images/chatbot-design-guidelines-images/click-embed.png)

19. Click on **Proceed to Advanced Embed Configuration** button. 
![click-advanced-embed](./images/chatbot-design-guidelines-images/click-advanced-embed.png)

20. The **Advanced Embed Configuration** pop-up window will be shown. Click on **Add** button. 
![add-filter-set](./images/chatbot-design-guidelines-images/add-filter-set.png)

21. Enter a title for the **Filter Set Name**. Click on **Parameter Configuration** to expand the section. 
![enter-filter-set-name](./images/chatbot-design-guidelines-images/enter-filter-set-name.png)

22. Click on **+ Parameter**. Select the data source used to build the charts in the dashboard. 
![add-filter-parameter](./images/chatbot-design-guidelines-images/add-filter-parameter.png)

23. Select the column that corresponds to the **Entity** and **Parameter** setup in Dialogflow. 
![select-column-same-as-entity](./images/chatbot-design-guidelines-images/select-column-same-as-entity.png)

24. Key-in the **Parameter** name as per the **Entity Name** created in Dialogflow. You can leave the **Default value** field blank. 
![enter-parameter-name-same-as-entity](./images/chatbot-design-guidelines-images/enter-parameter-name-same-as-entity.png)

25. Repeat **Step 23-24** if you have more than one parameter to add for the **Filter Set**. Once done, click on the **Generate** button. 
![save-filter-set](./images/chatbot-design-guidelines-images/save-filter-set.png)

26. The following screen is shown once the Embed link is generated. Click on **Cancel** button to dismiss the dialog box. 
![save-filter-set-successful](./images/chatbot-design-guidelines-images/save-filter-set-successful.png)


### 2.2 Configuring the Action in the Intent

1. Access the related Intent in GIANT. Click on **CREATE ACTION** button and select **Analytics Response** in the drop down menu.  
![select-analytics-response](./images/chatbot-design-guidelines-images/select-analytics-response.png)

2. Click on **Dashboard**. Select the **Dashboard Name** shown in the drop down list. 
![select-dashboard-name](./images/chatbot-design-guidelines-images/select-dashboard-name.png)

3. Once the **Dashboard Name** is selected, the other column details will be filled up automatically. 
![details-auto-populated](./images/chatbot-design-guidelines-images/details-auto-populated.png)

4. Click on the **Tick** icon and click on the **Save** button to save the changes made. 
![click-tick-and-save](./images/chatbot-design-guidelines-images/click-tick-and-save.png)

5. Launch your chatbot **Simulator** to test on the responses.
![launch-simulator](./images/chatbot-design-guidelines-images/launch-simulator.png)


## Part 3: Design Tips

### Tips on designing responses
- Use card replies to provide more information on responses.<br/><br/>
Before: Replies without information <br/><br/>
![Quick replies claims](./images/chatbot-design-guidelines-images/quick_replies_claims.PNG "quick replies") <br/><br/>
After: Replies with informative icon and description <br/><br/>
![Card replies claims](./images/chatbot-design-guidelines-images/card_replies_claims.PNG "card replies") <br/><br/>

- Use different font type to emphasize text. <br/><br/>
Before: Replies with same font <br/><br/>
![Text without emphasis](./images/chatbot-design-guidelines-images/text_without_emphasis.PNG "Font emphasis") <br/><br/>
After: Replies with different font type to emphasize text <br/><br/>
![Text emphasis](./images/chatbot-design-guidelines-images/text_emphasis.png "Font emphasis") <br/><br/>

- Use different font color to emphasize text. <br/><br/>
Before: Replies with same font colour <br/><br/>
![Text without color emphasis](./images/chatbot-design-guidelines-images/text_without_color_emphasis.PNG "No color emphasis") <br/><br/>
After: Replies with different font color to emphasize text <br/><br/>
![Color emphasis](./images/chatbot-design-guidelines-images/color_emphasis.png "Color emphasis")


### Do

1. Use different types of responses as it makes User Interface cleaner and User Experience better.

	1.1 Use Quick Replies when you need to ask user a question and continue with a followup intent based on the user's response.

	![quick-reply-response](./images/chatbot-design-guidelines-images/quick-reply-response.png)

	1.2 Use Rich Text when you need to show user a reply that contains a lot of information.

	![rich-text-response](./images/chatbot-design-guidelines-images/rich-text-response.png)

	1.3 Use Card Response to showcase different entities in the nicest way.

	![card-response](./images/chatbot-design-guidelines-images/card-response.png)

2. Maintain consistency throughout the design

	2.1 Use same font types, font colors, font sizes, highlights etc. to make the bot looks consistent.

	2.2 Use consistent elements for similar operations (Quick Replies, Rich Text, Card response).


### Don'ts

1. Don't use the default text responses in Dialogflow. Instead, configure the responses from GIANT.

2. Don't give meaningless names to intents. Follow the naming convention.

3. Don't write all information in one paragraph. Split the information for better readability.

4. Don't use only text responses from dialogflow. Combine them with the various response types in GIANT.

### Problems
- Two or more intents may use the same keyword(s) for training in Dialogflow. This may cause unexpected output.
- Contexts need to be handled with care to avoid unexpected output.


### Instruction on design of modifiers and its usage

* What is modifier intent?

Modifier intents are used to modify context of a base intent. For example, imagine you have a base intent `check_weather`. Modifiers can be used to modify its context parameters such as `location`, `scale` and `date`.

* When to use it?

Imagine you have a base intent `check_weather`. By default, when users type `weather` they will get a weather forecast for their current location, current date and in Celsius scale.
But if you want to let users to modify their requests and search for `weather forecast in Penang next week`, you need to pass parameters into `check_weather` intent and process it.
But what if an user doesn't understand Celsius scale and wants to get a forecast in Fahrenheit scale?
The user will probably type something like `Fahrenheit` and expect it to be added as a parameter into the previous search `weather forecast in Penang next week`.
If we don't make use of modifiers here then the new request `Fahrenheit` will  actually override previous search and th user will see today temperature in KL in Fahrenheit scale. We don't want that, so we will add a new modifier called `check_weather-scale` to pass value `Fahrenheit` into the current `check_weather` context.

* How to use it?

1. First of all, we need to create a base intent, let's call it `check_deal`.

2. This intent will have output context `check_deal-context` where we will pass current parameters and no input context as we don't want it to remember these parameters.

![Context](./images/chatbot-design-guidelines-images/modifier_1.png)

3. Assume we use `kl deal` and all similar training phrase to access this intent

![User says](./images/chatbot-design-guidelines-images/modifier_2.png)

4. We add 3 parameters for this intent `location-state`, `deal-tag` and `deal-category`. All of them have no default values.

![Parameters](./images/chatbot-design-guidelines-images/modifier_3.png)


If we will type `kl deal` now, we will get results for deals in KL, however, if we type `Shopping` after that, it will show shopping deals everywhere


5. Let's create a modifier and call it `check_deal--by-location`

6. This intent will have input and output context `check_deal-context`, so it could take parameters from `check_deal` and modify it.

![Context](./images/chatbot-design-guidelines-images/modifier_4.png)

7. Take a look at priority. We set the higher priority for this intent so that it could be triggered whenever it's possible over `check_deal` intent.

![Priority](./images/chatbot-design-guidelines-images/modifier_5.png)

8. We set the same training phrase `kl deal` to trigger this intent.

![User says](./images/chatbot-design-guidelines-images/modifier_6.png)

9. Our modifier will also have 3 parameters: `location-state`, `deal-tag` and `deal-category`. However, this time around we will set default values for those parameters which we don't want to modify `deal-tag` and `deal-category`.

![Parameters](./images/chatbot-design-guidelines-images/modifier_7.png)

Our first modifier is ready... If we type `shopping` now, we will get shopping deals, and if we type `Kl deal`, it will modify the previous request and show us shopping deals in kl.
The other pros is that if we type `kl deal` first, it will trigger `check_deal` and not our modifier and will still work as expected.