# Getting Started

## Introduction

This guide provides instructions on how to: 
- Set up your chatbot agent in Dialogflow which includes creating the Intents and Training Phrases 
- Set up a chatbot agent in GIANT and link it with the chatbot agent in Dialogflow
- Manage the responses or replies shown to the user in the chat window via GIANT

Once you perform the above actions, you can preview on the conversation flow by launching the chat simulator available in GIANT. Let’s get started!

## Part 1: Setting Up Chatbot Agent in Dialogflow

Please [refer here](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/setting-up-chatbot-agent-in-dialogflow.md) for the detailed steps on creating a chatbot agent, creating Entities and Intents in Dialogflow.

## Part 2: Setting Up Chatbot Agent in GIANT

Please [refer here](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/setting-up-chatbot-agent-in-giant.md) for the detailed steps on creating a chatbot agent in GIANT and linking the GIANT chatbot agent to Dialogflow.

## Part 3: How Can a Chatbot Be Useful

In **Part 1** and **Part 2**, you have learnt on how to setup a chatbot in Dialogflow and link it with the chatbot agent in GIANT.

In this section, you can learn on how to configure the various response types in GIANT based on the use cases that your chatbot has to handle and the type of answers that you want to show to the users. We will use the Animal Centre use case to explain further.

### Background

Alice is the founder of an animal shelter called the Animal Centre. The animal shelter houses rescued abandoned pets such as dogs and cats. They welcome people from the public to visit their centre to get information on their activities and events, also to consider adopting the rescued animals as a pet. Alice has also founded the Animal Association for people to register as a member, so that they can get updates on the Animal Centre events and activities. To assist in their daily operations which consists of handling inquiries from the public and other tasks, Alice needs a chatbot set up in the Animal Centre website that represents a human Customer Service representative.

### Pre-Requisites

1. A chatbot agent setup in Dialogflow with Intents and Entities (Refer to **Part 1** of this guide).
2. A chatbot GIANT chatbot agent linked to a Dialogflow chatbot agent (Refer to **Part 2** of this guide).
3. The following Intents and Entities created in your chatbot agent:

	![prerequisite-intents-entities](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/prerequisite-intents-entities.png)
    
    
### 3.1 Greeting Visitors

When a visitor starts a chat session, the chatbot needs to first greet the visitor. The **Default Welcome Intent** handles the action of greeting the visitor by displaying a welcome message upon the visitor initiating the conversation. The welcome message is combined with a **Quick Replies** response type which displays a series of topics for the visitor to select. Clicking on any of the topic will display the information that the visitor is interested in.

![default-welcome-intent-qr](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/default-welcome-intent-qr.png)


### 3.2 Handling Inquiries on Rescued Animals

As conversations progress, visitors usually state their preference on whether they love dogs or cats. The intent **inquiry_animal-pics** shows a series of animal pictures depending on the visitors' preferred animal type. When the visitor mentions that he loves cats, a series of cat photos available for adoption will be shown. Also, when the visitor mentioned that he loves dogs, a series of dog photos available for adoption will be shown. The entity **E_animal-type** which contains the parameters "cat" and "dog" enables the bot to know when to show the series of cat or dog photos, based on the animal type mentioned by the visitor.

To show the animal photos, a **Card** response type is created. An action button is also displayed with each photo for user to click and view more details of the respective animal.

![inquiry_animal-pics-card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_animal-pics-card.png)


### 3.3 Handling Inquiries on Animal Centre Opening Hours

The Animal Centre welcomes visitor to drop by their animal shelter. For this purpose, the Animal Centre needs to make known their Opening Hours to the public. To handle inquiries related to the Animal Centre Opening Hours, the intent **inquiry_operating-hours** is created with a **Rich Text Response** configured as the reply to visitors. This response type supports formatted text, hyperlinks, pictures and video content which can be shown as part of the response.

![inquiry_operating-hours-rich-text](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_operating-hours-rich-text.png)


### 3.4 Providing Assistance to Visitors

When the visitor is lost in the middle of the conversation, he may ask for help or assistance. At this point, the bot needs to display a series of Help topics to guide the visitor on the type of assistance required. The intent **show_help-menu** enables visitors to view the Help topics and select the assistance type that they need. A **card** response type is used to show the Help topics.

![show_help-menu-card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/show_help-menu-card.png)

The visitors will also need help when they ask things that the bot is unable to answer. To prevent the visitors from keep repeating their statements without getting an answer that they want, the **Default Fallback Intent** will handle such cases. After this intent is triggered for several times, it will automatically call the **show_help-menu** intent so that visitors can proceed with the conversation. This is done by using a **context** and setting up the **Occurence Event** response type.

![default-fallback-intent-occurence-event](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/default-fallback-intent-occurence-event.png)


## NOTES

## Quick Replies

The _Quick Replies_ response type allows the user to select one of the options provided with no typing needed from the user. This response type aids user in providing a reply based on the options listed out for the user to choose from. The _Quick Replies_ response type enables you to display text combined with a series of action buttons as options for user's selection.

- Example: The following intents are configured with the _Quick Replies_ response type:
	- Intent **Default Welcome Intent**
	- Intent **inquiry_animal-pics**
	- Intent **recommend_join-as-member**

    ![default-welcome-intent-qr](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/default-welcome-intent-qr.png)
    
    ![inquiry_animal-pics-qr](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_animal-pics.png)
    
    ![recommend_join-as-member](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/recommend_join-as-member.png)
    
- Steps to configure:

	![quick-replies-configs](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/quick-replies-configs.png)

- _Quick Replies_ results as shown in chatbot:

	![qr-results](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/qr-results.png)    
    

## Card

The _Card_ response type is suitable to use when images with hyperlinks are needed to be shown as a reply. This response type enables you to display images with action buttons for user to click.

- Example: The following intents are configured with the _card_ response type:
	- Intent **inquiry_animal-pics**
	- Intent **show_quick-menu**
	- Intent **show_help-menu**

    ![inquiry_animal-pics-card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_animal-pics-card.png)
    
    ![show_quick-menu-card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/show_quick-menu-card.png)
    
    ![show_help-menu-card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/show_help-menu-card.png)

- Steps to configure:

	![card-configs](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/card-configs.png)

- _Card_ results as shown in chatbot:

	![card-results](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/card-results.png)


## Rich Text Response

The _Rich Text Response_ response type is suitable to use when you need to include formatted text, hyperlinks, pictures or video content as part of your response to the user. 

- Example: The following intent is configured with the _Rich Text Response_ response type:
	- Intent **inquiry_operating-hours**

    ![inquiry_operating-hours-rich-text](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_operating-hours-rich-text.png)
    
- Steps to configure:

	![rich-text-configs](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/rich-text-configs.png)
    
- _Rich Text Response_ results as shown in chatbot:

	![rich-text-results](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/rich-text-results.png)


## Event

The _Event_ response type is to enable the Second Intent to be automatically triggered after the First Intent is triggered. 

- Example: After the First Intent **inquiry_animal-pics** is triggered, the Second Intent **recommend_join-as-member** is automatically triggered. The Second Intent contains the Event **event_join-as-a-member**, configured in Dialogflow. As a result, after the user requests to view the animal pictures, the chatbot will recommend the user to join the Animal Association as a member.

	- First Intent **inquiry_animal-pics**
	- Second Intent **recommend_join-as-member** (contains the Event **event_join-as-a-member**)

	![inquiry_animal-pics-event](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/inquiry_animal-pics-event.png)

	![recommend_join-as-member-event](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/recommend_join-as-member.png)

- Steps to configure:

	![events-configs](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/events-configs.png)

- _Event_ results as shown in chatbot:

	![event-results](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/event-results.png)
