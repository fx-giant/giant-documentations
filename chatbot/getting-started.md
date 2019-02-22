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

## Part 3: Managing Responses for Intents

In this section, you can learn on how to configure the various response types in GIANT based on the use cases that your chatbot has to handle and the type of answers that you want to show to the users.

### Pre-Requisites

1. A chatbot agent setup in Dialogflow with Intents and Entities (Refer to **Part 1** of this guide).
2. A chatbot GIANT chatbot agent linked to a Dialogflow chatbot agent (Refer to **Part 2** of this guide).
3. The following Intents and Entities created in your chatbot agent:

	![prerequisite-intents-entities](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/prerequisite-intents-entities.png)


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
