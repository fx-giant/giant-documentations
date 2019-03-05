# Chatbot Design Guidelines
This guide is intended as a quick reference for you to design a chatbot.
There are two parts involved - **Setup in Dialogflow** and **Setup in GIANT**.
The chatbot configured in this guide mainly illustrates on how to use the **Analytics Response** answer type.
You can refer to [this guide](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/getting-started.md) to learn more on how to configure the other response types available in GIANT.

### Pre-Requisites
1. A Dialogflow account (required to setup the bot, Intents and Entities in Dialogflow)
2. A GIANT account (required to setup the bot in GIANT and link with the bot in Dialogflow)
3. A data source (required to setup the dashboard. Answers shown in the chatbot will originate from the dashboard)

## Part 1: Setup in Dialogflow
_NOTE: Please [refer here](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/setting-up-chatbot-agent-in-dialogflow.md) for the detailed steps on creating a chatbot agent, creating Entities and Intents in Dialogflow._

1. Create the **Entities** for the Intent to detect the keywords related to your data source. The **Entities** will also be used in the **Response/Action** Configuration. 

![create-entities](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/create-entities.png)

2. Define the synonyms for each of the **Entities** created. 

	_NOTE: The values in the first column have to be EXACTLY the same as the values in the data source. Please take note that it is case-sensitive._
![define_synonyms](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/define_synonyms.png)

3. Create the **Intents** to capture the parameters within the **Training Phrases**. 
![create-intents](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/create-intents.png)

4. Add the **Responses** for the Intent. 
![add-response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/add-response.png)


## Part 2: Setup in GIANT

_NOTE: Please [refer here](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/setting-up-chatbot-agent-in-giant.md) for the detailed steps on creating a chatbot agent in GIANT and linking the GIANT chatbot agent to Dialogflow._

### 2.1 Creating a Dashboard and an Embed Link

1. Upload the data source in GIANT. Then, click on **My Dashboard(s)** to start creating your dashboard. 
![click-my-dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/click-my-dashboard.png)

2. Click on **+ADD** to add a new dashboard. 
![add-new-dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/add-new-dashboard.png)

3. **Rename** your dashboard by clicking on the title and type in the new name. Then, click on **VIEW DASHBOARD**. 
![rename-dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/rename-dashboard.png)

4. Click on **+ADD** to add a new chart into the dashboard. 
![add-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/add-chart.png)

5. Select a **chart** from the list to visualize the data, followed by the **Source** button. 
![select-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-chart.png)

6. Select the **data source** from the list shown, followed by the **Proceed** button. 
![select-source](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-source.png)

7. The **New Chart** screen is shown for you to configure the chart. Edit the **title** of your chart by highlighting the text and entering a new chart title. 
![rename-chart-title](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/rename-chart-title.png)

8. Locate the **Setting** bar on the right side of the screen. Select the respective options and perform the data binding for the fields for the data to be shown in the chart. 
![chart-setting](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/chart-setting.png)

9. Click on the **Menu** icon on the top right to display the hidden icons. You can change the chart's styling based on your needs.

![chart-styling-menu](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/chart-styling-menu.png)

10. Click on the **Save** button to save the changes made to the chart. 
![save-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/save-chart.png)

11. In the pop-up window shown, select the dashboard to save the chart into. Then, click **Save** again. 
![select-dashboard-save-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-dashboard-save-chart.png)

12. Access the dashboard to check on the chart created. 
![access-saved-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/access-saved-chart.png)

13. Click on the **Edit** icon to make adjustments on the chart. 
![edit-dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/edit-dashboard.png)

14. Click and drag the bottom right corner to resize the chart. 
![resize_chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/resize_chart.png)

15. Once done, click on the **Save** button. 
![save-changes-on-chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/save-changes-on-chart.png)

16. Repeat **Step 4-15** to add more charts into the dashboard. Since the charts from the dashboard will be displayed as an answer in the chatbot, it is advisable not to add too many charts (not more than 4 charts). 

17. Rearrange the charts in your dashboard according to the order for displaying in the chat conversation (top row, left-most chart will be shown first followed by the chart next to it and so on)
![rearrange-charts](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/rearrange-charts.png)

18. Click on the **Menu** button and select **Embed** icon.
![click-embed](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/click-embed.png)

19. Click on **Proceed to Advanced Embed Configuration** button. 
![click-advanced-embed](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/click-advanced-embed.png)

20. The **Advanced Embed Configuration** pop-up window will be shown. Click on **Add** button. 
![add-filter-set](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/add-filter-set.png)

21. Enter a title for the **Filter Set Name**. Click on **Parameter Configuration** to expand the section. 
![enter-filter-set-name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/enter-filter-set-name.png)

22. Click on **+ Parameter**. Select the data source used to build the charts in the dashboard. 
![add-filter-parameter](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/add-filter-parameter.png)

23. Select the column that corresponds to the **Entity** and **Parameter** setup in Dialogflow. 
![select-column-same-as-entity](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-column-same-as-entity.png)

24. Key-in the **Parameter** name as per the **Entity Name** created in Dialogflow. You can leave the **Default value** field blank. 
![enter-parameter-name-same-as-entity](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/enter-parameter-name-same-as-entity.png)

25. Repeat **Step 23-24** if you have more than one parameter to add for the **Filter Set**. Once done, click on the **Generate** button. 
![save-filter-set](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/save-filter-set.png)

26. The following screen is shown once the Embed link is generated. Click on **Cancel** button to dismiss the dialog box. 
![save-filter-set-successful](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/save-filter-set-successful.png)


### 2.2 Configuring the Action in the Intent

1. Access the related Intent in GIANT. Click on **CREATE ACTION** button and select **Analytics Response** in the drop down menu.  
![select-analytics-response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-analytics-response.png)

2. Click on **Dashboard**. Select the **Dashboard Name** shown in the drop down list. 
![select-dashboard-name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/select-dashboard-name.png)

3. Once the **Dashboard Name** is selected, the other column details will be filled up automatically. 
![details-auto-populated](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/details-auto-populated.png)

4. Click on the **Tick** icon and click on the **Save** button to save the changes made. 
![click-tick-and-save](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/click-tick-and-save.png)

5. Launch your chatbot **Simulator** to test on the responses.
![launch-simulator](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/launch-simulator.png)