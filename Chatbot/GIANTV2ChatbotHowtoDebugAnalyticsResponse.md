# GIANT V2 Chatbot: How to Debug Analytics Response

## Introduction

This is to guide users on how to debug the Analytics Response configured in the Action section of GIANT Chatbot. When you configured an Analytics Response type and unable to get the results shown in the chatbot conversation window, follow the steps below to troubleshoot and narrow down the possible causes.

### Pre-Requisite
1. Admin access to the chatbot with the Analytics Response configured.
2. Edit rights to the dashboard(s) used in the Analytics Response.

## Steps
1. Access the chat window that contains the Analytics Response with the error.	
2. Press F12 to launch the Developer Console window. Ensure that the **Elements** tab is selected.
3. Right-click the conversation response in the dashboard background area, then select **Inspect** from the menu shown.

![InspectCode](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_Inspect.png)

4. In the F12 console, locate the part that starts with the code **`<iframe data..... src= [link]>`**. Copy the link, paste it in a new browser tab and press **Enter**.

![ObtainSourceLink](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_GettingSourceLink.png)

5. Ensure that the data is shown in the browser. If the data is not shown as expected, remove the filter(s) applied to the data (Do this by deleting the end part of the link in the address bar. The filter(s) sections starts from the **`<&amp;>`** onwards.

![RemoveFilter](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_Remove%20Filters.png)

6. After you remove the filter(s), check that the data is shown as expected. If yes, then at this point it is confirmed that the filter added is the cause of the error shown for the Analytics Response.
7. Next, we need to access the dashboard to amend the Advanced Embed filters applied to the dashboard. In the address bar, delete the part that starts from `<Embedded Group/...>` onwards. This will route you to the dashboard. If you're not logged in to GIANT, you will need to log in to access the dashboard.

![AccessDashboard](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_Accessing%20Dashboard.png)

8. Locate and click on **Embed** button followed by **Proceed to Advanced Embed Configuration** button. 
9. In the next screen, click **Add** button. Enter a title for the **Filter Set Name**. In the **Parameter Configuration** section, add the column that caused the data filter issue. You may have more than one data tables that have the same column name. Hence, ensure that the column  name is **selected from the correct data table**. Enter the corresponding **Entity** name in the **Parameter** field then save the changes made. 

![ConfigureFilterSet](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_Configure%20Filter%20Sets.png)

10. Access the **Intent** in GIANT Chatbot where you have configured the Analytics Response. Edit the **Embed Group** value to the new **Advanced Embed** filter set created in **Step 9**. Save the changes made.
11. Test your chatbot again. The Analytics Response should now return the data as expected. 

![Retest](https://github.com/izairiabdlatif/IzairiWorkDocs/blob/master/GIANT%20V2%20-%20Debug%20Analytics%20Response/AnalyticsResponse_Retest.png)