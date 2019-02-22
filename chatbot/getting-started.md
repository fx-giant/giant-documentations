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

In this section, we will showcase the suitable response type to apply based on the user's inquiry type.

## Quick Replies
The _Quick Replies_ response type allows the user to select one of the options provided with no typing needed from the user. This response type aids user in providing a reply based on the options listed out for the user to choose from. The _Quick Replies_ response type enables you to display text combined with a series of action buttons as options for user's selection.

- Example: Intent related to **show_quick-menu**

    ![Quick Replies](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/quick_replies.png)

## Card
The _Card_ response type is suitable to use when images with hyperlinks are needed to be shown as a reply. This response type enables you to display images with action buttons for user to click.

- Example: Intent for **inquiry_animal-pics**

    ![Card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/card.png)

## Rich Text Response
The _Rich Text Response_ response type is suitable to use when you need to include formatted text, hyperlinks, pictures or video content as part of your response to the user. 

- Example: Intent **inquiry_operating-hours**

    ![Rich Text Response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/rich_text_response.png)

## Event
The _Event_ response type is to enable the Second Intent to be shown after the First Intent is triggered. 

- Example: The First Intent **inquiry_animal-pics** is triggered, followed by the Second Intent **show_membership-form**. The Second Intent contains the Event **event_join-club**
	![Event 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/event_1.png)
	![Event 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/event_2.png)

## Occurrence Event
The _Occurrence Event_ response type is set up to trigger another Intent once a particular Intent has been triggered for certain number of times. 

- Example: After the Intent **Default Fallback Intent** is triggered continuously for several times, another Intent **show_help-menu** with the Event **event_help-menu** is triggered so that the conversation can proceed.

	![Occurrence Event 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/occurrence_event_1.png)
	![Occurrence Event 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/occurrence_event_2.png)

## Change Language
The _Change Language_ response type is configured in an Intent to enable the language switching action. 

- Example: The Intent **show_language-options** is created to allow capturing the _User Says_ in **English**, **Chinese** and other supported languages.
    
	![Change Language](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/change_language.png)
