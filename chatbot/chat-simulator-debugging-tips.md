# Chat Simulator Debugging

There are times when you have configured the response in GIANT for the Intent but the configured response is not shown in the Chat Simulator. This guide provides you the steps to check on the configuration that causes the problem and the corrective measure. The below three Intents will be used as examples for the debugging steps.

## Part 1: Intent Use Cases
- Intent 1: **perform_pictures** 
    - This Intent is created to capture the parameter of _animal-species_ from the _User Says_. The captured parameter is then brought over and subsequently trigger the Event _evt-perform_pictures_ configured under Intent 2 **perform_pictures--animal**
    
	![perform_pictures Configuration in Giant](./images/chat-simulator-debugging-tips-images/intent_configuration_1.png)

- Intent 2: **perform_pictures--animal**
    - The parameter value of _animal-species_ brought forward from Intent 1 **perform_pictures** will trigger this Intent. As a result, either one of the animal photos (dog, cat or bird) will be shown to the user depending on the _animal-species_ parameter value provided by the user.
    - After the animal photos are shown, another Event _evt-perform_club_joining_ configured under Intent 3 **perform_club_joining** will be triggered.
    
	![perform_pictures--animal Configuration in Giant](./images/chat-simulator-debugging-tips-images/intent_configuration_2.png)

- Intent 3: **perform_club_joining**
    - After Intent 2 **perform_pictures--animal** is triggered, this intent is triggered to recommend the user in joining the Animal Association as a member.
    - Two Responses are configured under this Intent: The _Rich Text Response_ (to show "be-a-member" text recommendation) and the _Webhook_ (to show the Membership Form for user to fill-in)
    
	![perform_club_joining Configuration in Giant](./images/chat-simulator-debugging-tips-images/intent_configuration_3.png)

## Part 2: Using the Chat Simulator

1. Launch the **Chat Simulator** in a new browser tab. Enter the _User Says_ to trigger Intent 1 **perform_pictures**. 

	![Chat Flow on Simulator 1](./images/chat-simulator-debugging-tips-images/use_case_perform_1.png)

2. All of the responses are shown as expected EXCEPT the _Card Response_ for **dog**, which is missing.
 
	![Chat Flow on Simulator 2](./images/chat-simulator-debugging-tips-images/use_case_perform_2.png)

3. To check on the issue, add the characters **&d=1** at the end of the **Chat Simulator URL**. Press ENTER key, then refresh the page by pressing F5. 
    
    ![Apply for Debugging](./images/chat-simulator-debugging-tips-images/use_case_perform_3.png)

4. The chat window will now show the response content with some additional details.
    
    ![Simulator with Debug 1](./images/chat-simulator-debugging-tips-images/simulator_with_debug_1.png)

5. Enter again the _User Says_ to trigger Intent 1 **perform_pictures**. Intent 2 **perform_pictures--animal** and Intent 3 **perform_club_joining** should be triggered subsequently. The last triggered Intent is shown in the detailed summary (in this case, Intent 3 **perform_club_joining** is the last triggered Intent)

    ![Simulator with Debug 2](./images/chat-simulator-debugging-tips-images/simulator_with_debug_2.png)

6. From the responses shown, you can see that the _Card Response_ to show the dog pictures configured under Intent 2 **perform_pictures--animal** is missing. From here, it is confirmed that Intent 2 _Card Response_ fails to be triggered. 

    ![Simulator with Debug 3](./images/chat-simulator-debugging-tips-images/simulator_with_debug_3.png)

7. Switch off the toggle of the Event response for triggering Intent 3 **perform_club_joining** and save the changes. This is to avoid the response from being shown as the last triggered Intent, also to narrow down the problem area. 
    
    ![Response Toggle Off](./images/chat-simulator-debugging-tips-images/toggle_off.png)

8. Enter again the _User Says_ in the **Chat Simulator** to trigger Intent 1 **perform_pictures**. From the details shown, Intent 2 **perform_pictures--animal** is the last triggered Intent after Intent 1 is triggered. The correct parameter is captured and passed to Intent 2. Proceed to check on the configurations made for the _Card Response_ for Intent 2, whether any case-sensitive or incorrect spelling is applied.
    
    ![Simulator with Debug 4](./images/chat-simulator-debugging-tips-images/check_debug_issue_1.png)

9. Cross checking of the value in the _animal-species_ Entity (in Dialogflow) shows that the spelling DOES NOT MATCH with the corresponding value configured in the _Card Response_ (in GIANT). This is the reason causing the failure to trigger the _Card Response_ for **dog**.

    ![Checking Issue](./images/chat-simulator-debugging-tips-images/check_debug_issue_2.png)

10. Amend the spelling so that it is EXACTLY the same with the value configured for the _Entity_. Please note that the spelling is case-sensitive.

    ![Recorrect the Issues](./images/chat-simulator-debugging-tips-images/recorrect_issue.png)

11. Test on the **Chat Simulator** again to check that the issue is fixed. 
    
    ![Simulator with Debug 5](./images/chat-simulator-debugging-tips-images/simulator_with_debug_4.png)

12. From the results, it is confirmed that the issue is fixed after amending the configuration. You can turn on the toggle again for the Event response _evt-perform_club_joining_ under Intent 2 **perform_pictures--animal** and save the changes. 
    
    ![Response Toggle On](./images/chat-simulator-debugging-tips-images/toggle_on.png)

13. Test on the **Chat Simulator** again to view the full results. If you want to hide the additional details shown for each response, delete the characters **&d=1** from the end of the **Chat Simulator URL**, press ENTER key then refresh the page by pressing F5.
    
    ![Simulator Expected Result](./images/chat-simulator-debugging-tips-images/simulator_expected_result.png)
    
    
## Troubleshooting Checklist

When the **Chat Simulator** fails to show the responses as expected, follow the checklist below to find out what may have caused the issue to happen:

- Is the **Intent's webhook** enabled?
- Is the **GIANT chatbot agent configured correctly** in GIANT?
- Is the **Fulfillment section configured correctly** for GIANT chatbot agent to connect to Dialogflow's agent?
- Is the **Training Phrase** added for the Intent?
- Is the **Entity/Parameter configured correctly** in the Intent? (both in Dialogflow and GIANT)
- Have you added the **answer for the Intent**?
- If the Intent is newly created, have you **refresh the Intent list** in GIANT for the new Intent to be imported?
- Did you **accidentally DELETED** any Intent, Entity, Training Phrase or Answer configured previously?
- When using **Context** and the response configured in the final Intent **did not show the parameter provided by the user** in the previous intent, have you checked that the **webhook is disabled** for the Intent?  


### Issue Caused by Intent's Webhook

- Illustration of issue

	- **Answer configured** for the Intent is **not shown** in the chat simulator.

		![debug_webhook_issue](./images/chat-simulator-debugging-tips-images/debug_webhook_issue.png)

- Cause(s)
	
	- **Webhook disabled** in Dialogflow for the Intent.

		![debug_webhook_issue_disabled](./images/chat-simulator-debugging-tips-images/debug_webhook_issue_disabled.png)

- How to solve it

	- **Enable the Intent's webhook** toggle in the Fulfillment section.
	 
		![debug_webhook_issue_resolution](./images/chat-simulator-debugging-tips-images/debug_webhook_issue_resolution.png)
    
    	![debug_webhook_issue_retest](./images/chat-simulator-debugging-tips-images/debug_webhook_issue_retest.png)


### Issue Caused by Incorrect GIANT Chatbot Agent Setup 

- Illustration of issue
	
	- **Intent list not shown** after chatbot is created in GIANT.

		![debug-missing-intent-list](./images/chat-simulator-debugging-tips-images/debug-missing-intent-list.png)
        
	- **Chat simulator not working** after chatbot is created in GIANT.

		![debug-chat-simulator-not-working](./images/chat-simulator-debugging-tips-images/debug-chat-simulator-not-working.png)      

- Cause(s)
	
	- Intent list not shown due to **incorrect JSON file attached**.

		![debug-missing-intent-list-wrong-json](./images/chat-simulator-debugging-tips-images/debug-missing-intent-list-wrong-json.png)
    
    - Chat simulator not working due to **incorrect Agent ID entered** during chatbot creation in GIANT.

		![debug-chat-simulator-incorrect-agentid](./images/chat-simulator-debugging-tips-images/debug-chat-simulator-incorrect-agentid.png)

- How to solve it
	
	- **Missing Intents List**: Delete the current agent, recreate the agent and attach the correct JSON file.
	
		![debug-missing-intent-list-resolution](./images/chat-simulator-debugging-tips-images/debug-missing-intent-list-resolution.png)
    
    - **Chat Simulator not working**: Delete the current agent, recreate the agent and enter the correct Dialogflow Agent ID.
	
		![debug-chat-simulator-reassign-agentid-resolution](./images/chat-simulator-debugging-tips-images/debug-chat-simulator-reassign-agentid-resolution.png)


### Issue Caused by Incorrect Dialogflow Agent Fulfillment Setup

- Illustration of issue

	-  **Missing Default web url** link in the SETTINGS and SIMULATOR screen. 

		![debug-missing-default-web-url](./images/chat-simulator-debugging-tips-images/debug-missing-default-web-url.png)

- Cause(s)

	- **Webhook not enabled** in **Dialogflow Agent's Fulfillment** section
	- **Missing or incorrect Dialogflow webhook URL copied from GIANT** into Dialogflow Agent's Fulfillment section
	- **Incorrect authorization or bearer** information

		![debug-incorrect-dialogflow-fulfillment-setup](./images/chat-simulator-debugging-tips-images/debug-incorrect-dialogflow-fulfillment-setup.png)

- How to solve it

	- **Enable the webhook toggle** in Dialogflow Agent's **Fulfillment** section
	- Ensure that the information entered for **Dialogflow webhook URL, Authorization and Bearer fields** are accurate
	- Remember to **SAVE** the changes made

		![debug-dialogflow-fulfillment-resolution](./images/chat-simulator-debugging-tips-images/debug-dialogflow-fulfillment-resolution.png)


### Issue Caused by Missing Training Phrase

- Illustration of issue

	- Chatbot **unable to return the expected answer** based on the _User Says_.

		![debug-missing-training-phrase](./images/chat-simulator-debugging-tips-images/debug-missing-training-phrase.png)

- Cause(s)
	
	- Chatbot unable to recognize the user's statement (_User Says_) because the **Training Phrase is missing** in the Intent 

		![debug-missing-training-phrase-dialogflow](./images/chat-simulator-debugging-tips-images/debug-missing-training-phrase-dialogflow.png)

- How to solve it

	- **Add the Training Phrase in the Intent** for the bot to recognize the user statement and show the expected answer.
	
		![debug-missing-training-phrase-resolution](./images/chat-simulator-debugging-tips-images/debug-missing-training-phrase-resolution.png)


### Issue Caused by Incorrect Entity/Parameter Setup

- Illustration of issue

	- The **answer configured for certain parameter(s) fail to show** in the chat simulator

		![debug-incorrect-parameter-setup](./images/chat-simulator-debugging-tips-images/debug-incorrect-parameter-setup.png)
        
	- The **answer configured for certain parameter(s) not shown as expected** in the chat simulator

		![debug-missing-parameters](./images/chat-simulator-debugging-tips-images/debug-missing-parameters.png)

- Cause(s)
	
	- **Incorrect spelling** of Entity/Parameter

		![debug-incorrect-parameter-spelling](./images/chat-simulator-debugging-tips-images/debug-incorrect-parameter-spelling.png)

	- The Training Phrase contains two parameters but **only one parameter configured for the answer** in GIANT

		![debug-missing-parameters-cause](./images/chat-simulator-debugging-tips-images/debug-missing-parameters-cause.png)

- How to solve it

	- **Amend the Entity/Parameter spelling**. Ensure that it is EXACTLY the same as the value entered in the first column of the Entity. Be careful of extra space in the word spelling (hence, it is recommended to use underscore ( _ ) or dash ( - ) character in place of spacing). Do take note that it is case sensitive (**Cats** with capital C is treated as a different word with **cats** with lowercase c).
	
		![debug-incorrect-parameter-spelling-resolution](./images/chat-simulator-debugging-tips-images/debug-incorrect-parameter-spelling-resolution.png)
        
	- **Add in the missing parameter** in the answer configuration.  
	 (TIPS: To include all values for the parameter, enter asterisk (\*) as the value for the parameter configured).  
     
     	![debug-missing-parameter-resolution](./images/chat-simulator-debugging-tips-images/debug-missing-parameter-resolution.png)  
     
     	![debug-missing-parameter-retest](./images/chat-simulator-debugging-tips-images/debug-missing-parameter-retest.png)


### Issue Caused by Intent's Missing Answer

- Illustration of issue

	- The **chat simulator is not showing any response** for the intent.

		![debug-missing-answer](./images/chat-simulator-debugging-tips-images/debug-missing-answer.png)

- Cause(s)

	- The **answer is not configured for the Intent** (which includes Response Type added but no content added in)

		![debug-missing-answer-causes](./images/chat-simulator-debugging-tips-images/debug-missing-answer-causes.png)

- How to solve it

	- **Configure the answer** for the intent. Ensure that there is **no empty response added** (you will need to remove the empty response if there is any)

		![debug-missing-answer-resolution](./images/chat-simulator-debugging-tips-images/debug-missing-answer-resolution.png)


### Issue Caused by New Intent Creation (Require Refresh Intent List)

- Illustration of issue

	- Chatbot **unable to return an answer** although the intent is added for the training phrase

		![debug-refresh-intent-list](./images/chat-simulator-debugging-tips-images/debug-refresh-intent-list.png)

- Cause(s)

	- The **Intent List is not refreshed** in GIANT

		![debug-refresh-intent-list-cause](./images/chat-simulator-debugging-tips-images/debug-refresh-intent-list-cause.png)

- How to solve it

	- **Refresh the intent list** for GIANT to get the latest intent(s) added in Dialogflow.

		![debug-refresh-intent-list-resolution](./images/chat-simulator-debugging-tips-images/debug-refresh-intent-list-resolution.png)


### Issue Caused by Accidental Deletion of Intent/Entity/Training Phrase/Answer

- Illustration of issue
	
	- Chatbot **unable to return an answer** although the Intent, Entity, Training Phrase or Answer was previously added to handle the user's inquiry.

		![debug-accidental-deletion](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion.png)

- Cause(s)

	- The Intent, Entity, Training Phrase or Answer was **accidentally deleted**.

		![debug-accidental-deletion-cause](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion-cause.png)

- How to solve it

	- **Re-create or re-configure the Intent, Entity, Training Phrase or Answer** for the user's inquiry

		![debug-accidental-deletion-resolution1](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion-resolution1.png)
    
    	![debug-accidental-deletion-resolution2](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion-resolution2.png)
    
		![debug-accidental-deletion-resolution3](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion-resolution3.png)
        
    	![debug-accidental-deletion-retest](./images/chat-simulator-debugging-tips-images/debug-accidental-deletion-retest.png)


### Issue Related to Context (Value Provided by User Missing in Final Answer)

- Illustration of issue

	- **Value from the previous intent is not brought forward** to the Intent with response that shows all the collected parameter values.

		![debug-context-value-missing](./images/chat-simulator-debugging-tips-images/debug-context-value-missing.png)

- Cause(s)

	- The **webhook** for the Intent that shows all the collected parameter values is **enabled**. It needs to be **disabled**.

		![debug-context-value-missing-cause](./images/chat-simulator-debugging-tips-images/debug-context-value-missing-cause.png)

- How to solve it

	- **Disable the webhook** for the Intent

		![debug-context-value-missing-resolution](./images/chat-simulator-debugging-tips-images/debug-context-value-missing-resolution.png)

## Part3: Using Dialogflow for debugging
1. Direct to the interface of dialogflow, and switch to the specific chatbot which needs to be tested. Simulator panel is at right side. 
	![df_simulator](./images/chat-simulator-debugging-tips-images/df_simulator.png)
2. Key in the user input from "try it now" text field, and scroll down to "diagnostic info" part. 
	![diagnostic_info_location](./images/chat-simulator-debugging-tips-images/diagnostic_info_location.png)
3. Can check into all the active context parameter and its current value. 
	![diagnostic_info](./images/chat-simulator-debugging-tips-images/diagnostic_info.png)
