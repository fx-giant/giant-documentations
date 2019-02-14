# Chat Simulator Debugging

There are times when you have configured the response in GIANT for the Intent but the configured response is not shown in the Chat Simulator. This guide provides you the steps to check on the configuration that causes the problem and the corrective measure. The below three Intents will be used as examples for the debugging steps.

## Part 1: Intent Use Cases
- Intent 1: **perform_pictures** 
    - This Intent is created to capture the parameter of _animal-species_ from the _User Says_. The captured parameter is then brought over and subsequently trigger the Event _evt-perform_pictures_ configured under Intent 2 **perform_pictures--animal**
    
	![perform_pictures Configuration in Giant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/intent_configuration_1.png)

- Intent 2: **perform_pictures--animal**
    - The parameter value of _animal-species_ brought forward from Intent 1 **perform_pictures** will trigger this Intent. As a result, either one of the animal photos (dog, cat or bird) will be shown to the user depending on the _animal-species_ parameter value provided by the user.
    - After the animal photos are shown, another Event _evt-perform_club_joining_ configured under Intent 3 **perform_club_joining** will be triggered.
    
	![perform_pictures--animal Configuration in Giant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/intent_configuration_2.png)

- Intent 3: **perform_club_joining**
    - After Intent 2 **perform_pictures--animal** is triggered, this intent is triggered to recommend the user in joining the Animal Association as a member.
    - Two Responses are configured under this Intent: The _Rich Text Response_ (to show "be-a-member" text recommendation) and the _Webhook_ (to show the Membership Form for user to fill-in)
    
	![perform_club_joining Configuration in Giant](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/intent_configuration_3.png)

## Part 2: Using the Chat Simulator

1. Launch the **Chat Simulator** in a new browser tab. Enter the _User Says_ to trigger Intent 1 **perform_pictures**. 

	![Chat Flow on Simulator 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/use_case_perform_1.png)

2. All of the responses are shown as expected EXCEPT the _Card Response_ for **dog**, which is missing.
 
	![Chat Flow on Simulator 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/use_case_perform_2.png)

3. To check on the issue, add the characters **&d=1** at the end of the **Chat Simulator URL**. Press ENTER key, then refresh the page by pressing F5. 
    
    ![Apply for Debugging](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/use_case_perform_3.png)

4. The chat window will now show the response content with some additional details.
    
    ![Simulator with Debug 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/simulator_with_debug_1.png)

5. Enter again the _User Says_ to trigger Intent 1 **perform_pictures**. Intent 2 **perform_pictures--animal** and Intent 3 **perform_club_joining** should be triggered subsequently. The last triggered Intent is shown in the detailed summary (in this case, Intent 3 **perform_club_joining** is the last triggered Intent)

    ![Simulator with Debug 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/simulator_with_debug_2.png)

6. From the responses shown, you can see that the _Card Response_ to show the dog pictures configured under Intent 2 **perform_pictures--animal** is missing. From here, it is confirmed that Intent 2 _Card Response_ fails to be triggered. 

    ![Simulator with Debug 3](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/simulator_with_debug_3.png)

7. Switch off the toggle of the Event response for triggering Intent 3 **perform_club_joining** and save the changes. This is to avoid the response from being shown as the last triggered Intent, also to narrow down the problem area. 
    
    ![Response Toggle Off](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/toggle_off.png)

8. Enter again the _User Says_ in the **Chat Simulator** to trigger Intent 1 **perform_pictures**. From the details shown, Intent 2 **perform_pictures--animal** is the last triggered Intent after Intent 1 is triggered. The correct parameter is captured and passed to Intent 2. Proceed to check on the configurations made for the _Card Response_ for Intent 2, whether any case-sensitive or incorrect spelling is applied.
    
    ![Simulator with Debug 4](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/check_debug_issue_1.png)

9. Cross checking of the value in the _animal-species_ Entity (in Dialogflow) shows that the spelling DOES NOT MATCH with the corresponding value configured in the _Card Response_ (in GIANT). This is the reason causing the failure to trigger the _Card Response_ for **dog**.

    ![Checking Issue](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/check_debug_issue_2.png)

10. Amend the spelling so that it is EXACTLY the same with the value configured for the _Entity_. Please note that the spelling is case-sensitive.

    ![Recorrect the Issues](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/recorrect_issue.png)

11. Test on the **Chat Simulator** again to check that the issue is fixed. 
    
    ![Simulator with Debug 5](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/simulator_with_debug_4.png)

12. From the results, it is confirmed that the issue is fixed after amending the configuration. You can turn on the toggle again for the Event response _evt-perform_club_joining_ under Intent 2 **perform_pictures--animal** and save the changes. 
    
    ![Response Toggle On](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/toggle_on.png)

13. Test on the **Chat Simulator** again to view the full results. If you want to hide the additional details shown for each response, delete the characters **&d=1** from the end of the **Chat Simulator URL**, press ENTER key then refresh the page by pressing F5.
    
    ![Simulator Expected Result](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images4/simulator_expected_result.png)