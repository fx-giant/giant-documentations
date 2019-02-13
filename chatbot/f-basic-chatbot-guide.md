# GIANT V2: Chatbot Design Guidelines
This guide is intended as a quick reference for you to design a chatbot.
There are two parts involved - Setup in Dialogflow and Setup in GIANT.

### Pre-Requisites
1. A Dialogflow account (required to setup the bot, Intents and Entities in Dialogflow)
2. A GIANT account (required to setup the bot in GIANT and link with the bot in Dialogflow)
3. A data source (required to setup the dashboard. Answers shown in the chatbot will originate from the dashboard)

## Part 1: Setup in Dialogflow

1. Create the **Entities** for the Intent to detect the keywords related to your data source. The **Entities** will also be used in the **Response/Action** Configuration. 
![Entities Entry](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/entities_entry.png)

2. Define the synonyms for each of the **Entities** created. 

    _Note: The values in the first column have to be EXACTLY the same as the values in the data source. Please take note that it is case-sensitive._
![Entities Parameter Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/entities_parameter.png)

3. Create the **Intents** to capture the parameters within the **Training Phrases**. 
![popular-brand-campaign Intents](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/intents_popular-brand-campaign.png)

4. Add the **Responses** for the Intent. 
![popular-brand-campaign Responses](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/responses_popular-brand-campaign.png)


## Part 2: Setup in Giant

### 2.1 Creating a Dashboard and an Embed Link

1. Upload the data source in GIANT. Then, click on **My Dashboard(s)** to start creating your dashboard. 
![Menu to My Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_menu_dashboard.png)

2. Click on **+ADD** to add a new dashboard. 
![Add Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_add_dashboard.png)

3. **Rename** your dashboard by clicking on the title and type in the new name. Then, click on **VIEW DASHBOARD**. 
![Rename Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_entry.png)

4. Click on **+ADD** to add a new chart into the dashboard. 
![Add Chart](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_add_chart.png)

5. Select a **chart** from the list to visualize the data, followed by the **Source** button. 
![Chart Selection](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_chart_selection.png)

6. Select the **data source** from the list shown, followed by the **Proceed** button. 
![Source Selection](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_source_selection.png)

7. The **New Chart** screen is shown for you to configure the chart. Edit the **title** of your chart by highlighting the text and entering a new chart title. 
![Edit Chart Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_edit_chart-name.png)

8. Locate the **Setting** bar on the right side of the screen. Select the respective options and perform the data binding for the fields for the data to be shown in the chart. 
![Quadrant Settings](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_quadrant_settings.png)

9. Click on the **Menu** icon on the top right to display the hidden icons. You can change the chart's styling based on your needs.
![Quadrant Menu](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_quadrant_menu.png)

10. Click on the **Save** button to save the changes made to the chart. 
![Save Quadrant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_quadrant_save.png)

11. In the pop-up window shown, select the dashboard to save the chart into. Then, click **Save** again. 
![Select Dashboard to Save](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_quadrant_save_to_dashboard.png)

12. Access the dashboard to check on the chart created. 
![Created Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_created.png)

13. Click on the **Edit** icon to make adjustments on the chart. 
![Edit Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_edit.png)

14. Click and drag the bottom right corner to resize the chart. 
![Resize Quadrant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_resize.png)

15. Once done, click on the **Save** button. 
![Save Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_save.png)

16. Repeat Step 4-15 to add more charts into the dashboard. Since the charts from the dashboard will be displayed as an answer in the chatbot, it is advisable not to add too many charts (not more than 4 charts). 

17. Rearrange the charts in your dashboard according to the order for displaying in the chatbot (top row, left-most chart will be shown first followed by the chart next to it and so on)
![More Charts in Dashboard](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_more-charts.png)

18. Click on the **Menu** button and select **Embed** icon.
![Dashboard Menu](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_menu-embed.png)

19. Click on **Proceed to Advanced Embed Configuration** button. 
![Proceed to Advanced Embed Configuration](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced.png)

20. Click on **Add** button. 
![Add Advanced Embed](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-add.png)

21. Enter a title for the **Filter Set Name**. Click on **Parameter Configuration** to expand the section. 
![Embed Filter Set Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-name.png)

22. Click on **+ Parameter**. Select the data source used to build the charts in the dashboard. 
![Source Selection](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-parameter.png)

23. Select the column that corresponds to the **Entity** and **Parameter** setup in Dialogflow. 
![Add Parameter](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-parameter-add.png)

24. Key-in the **Parameter** name as per the **Entity Name** created in Dialogflow. You can leave the **Default value** field blank. 
![Add Parameter Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-parameter-source1.png)

25. Repeat **Step 23-24** if you have more than one parameter to add for the Filter Set. Once done, click on the **Generate** button. 
![Add Parameter Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-advanced-parameter-source2.png)

26. The following screen is shown once the Embed link is generated. Click on **Cancel** button to dismiss the dialog box. 
![Cancel Embed](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_dashboard_embed-cancel.png)


### 2.2 Configuring the Action in the Intent

1. Access the related Intent in GIANT. Click on **CREATE ACTION** button and select **Analytics Response** in the drop down menu.  
![Select Analytics Response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_intent_analytics-response.png)

2. Click on **Dashboard**. Select the **Dashboard Name** shown in the drop down list. 
![Select Dashboard Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_intent_analytics_dashboard-name.png)

3. Once the **Dashboard Name** is selected, the other column details will be filled up automatically. 
![Filled Up Analytics Response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_intent_analytics_dashboard-filled.png)

4. Click on the **Tick** icon and click on the **Save** button to save the changes made. 

5. Launch your chatbot **Simulator** to test on the responses.
![Simulator 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/giant_simulator2.png)



## Notes

### Naming Convention of An Intent
The clarity of the **Intent Name** enables you to search it easily and to understand the purpose of the Intent. 
It is recommended to include the action word (i.e. verbs) as part of the Intent Name e.g. _inquiry_, _check_, _get_, _perform_ and so on. 

The name of an Intent can be in the format: "**_action_question-category_purpose_**". Below are some examples on the purpose of an Intent. 

- **Inquiry**
  
  Intent created to reply for general inquiries. The example below shows an intent that handles inquiries about the aim of an animal association. 
  
    ![Inquiry Intent Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/inquiry_intent_1.png)

  The chat result for this Intent. 
  
    ![Inquiry Intent Chat Result](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/inquiry_intent_2.png)

- **Check**

  Intent created to check on the data of particular sources and reply in suitable actions. The example below shows an intent that checks the information related to animal adoption. 

  ![Check Intent Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/check_intent_1.png)

  The chat result for this Intent. 
![Check Intent Chat Result](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/check_intent_2.png)

  _Note: It is recommended to set up an **Event** for other Intents to trigger this response._

- **Get**

  Intent created for the response to show a list or options for user to choose. The Intent below provides options for user to choose when the required Parameter Name is not provided in the _User says_. 

![Get Intent Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/get_intent_1.png)

  The chat result for this Intent. 
![Get Intent Chat Result](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/get_intent_2.png)

- **Perform**

  Intent created to perform an action in the response without checking on the data sources and reply in suitable actions. The Intent below shows an example of displaying the membership form upon user's request for club joining. 

![Perform Intent Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/perform_intent_1.png)

  The chat result for this Intent. 
![Perform Intent Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/perform_intent_2.png)




### Naming Convention of An Entity
The name of an **Entity** has to be clear in identifying the category of a parameter value. The examples below illustrates the naming of entities for different categories. 

- The entity **animal-species** to identify the species of animals and each one appended with synonyms. 

![Entity animal-species](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/entity_1.png)

- The entity **cat-breeds** to identify the breed of cats. 

![Entity cat-breeds](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/entity_2.png)

- The entity **dog-breeds** to identify the breed of dogs. 

![Entity dog-breeds](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/entity_3.png)]




### Naming Convention of An Event
The name of an **Event** is recommended to be the same with the Intent Name as it makes it easier to trace the subsequent Intent that needs to be triggered.

The name of an Event can be in format: "**_evt-intent_name_**".

Here's an example of an Event created based on the above naming convention:

![Event Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/event_naming_1.png)

You may easily trace the second Intent within the first Intent as shown in the below example configured in GIANT. In this example, the second Intent **perform_club_joining** will be triggered after the first Intent **perform_pictures--animal** is triggered. 

![Event Configuration In Giant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/event_naming_2.png)




## Context Usages
When applying an **Output Context** in an Intent, another matching Intent with same **Input Context** and specific _User says_ will be activated. The example below shows the Intent applied with the **Output Context** and the **Input Context**. The **Context** enables a contextual conversation between the user and the chatbot. 

_Note: The Intent with the **Input Context** will not be triggered by the User Says without triggering the Intent with the **Output Context**._

- **Output Context**
    - Configuration in the Intent **perform_pictures**
      ![Output Context Configuration](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/output_context.png)
    
- **Input Context**
    - Configuration in the Intent **perform_pictures--animal**
      ![Input Context Configuration](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/input_context.png)

- The Intent **perform_pictures--animal** will be triggered when the _User says_ is matched followed by the Intent **perform_pictures**. 

### Naming Convention of Output Context
The name of the **Output Context** is recommended to be the same with the Intent Name as it makes it easier to trace the related Intent  that contains the **Input Context**. 

The name of the Output Context can be in format: "**_intent_name-context_**. 

- The **Output Context** configuration in the Intent **perform_pictures**. 
![Output Context Name](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/context_naming_1.png)

- The **Input Context** configuration in the Intent **perform_pictures--animal**. 
![Input Context Configuration](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/context_naming_2.png)

- The Intent **perform_pictures--animal** will only be triggered as contextual conversation when it matches the _User Says_ right after the Intent **perform_pictures** is triggered. 


### The Default Value Usage
The **Default Value** is used to collect a parameter value from a context of a previous Intent. It is needed when the parameter value captured from the Intent with the **Output Context** has to be brought forward to another Intent with the **Input Context** to trigger any of the responses within. 

The Default Value can be in format: "**_#context_name.parameter_name_**"

The examples below show the usage of applying the **Default Value** into the contextual Intents.  

- An Intent with the Output Context _perform_pictures-context_ captured the parameter value in the Entity _animal-species_. 
![Intent with Output Context](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/default_value_usages_1.png)

- Another Intent with the Input Context _perform_pictures-context_ captured the same parameter value in the Entity _animal-species_. 
![Intent with Input Context](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/default_value_usages_2.png)

- Select the menu for the **Default Value** and enter the value into the text field following the format "**_#context_name.parameter_name_**". 
![Select Default Value](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/default_value_usages_3.png)
![Add Default Value](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images1/default_value_usages_4.png)

