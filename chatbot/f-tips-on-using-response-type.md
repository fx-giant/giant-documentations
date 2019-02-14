# Tips on Using the Response Type

In this guide, we will showcase the suitable response type to apply based on the user's inquiry type. The examples provided are based on the user inquiries to a restaurant when making reservations.

## Quick Replies
The _Quick Replies_ response type allows the user to select one of the options provided with no typing needed from the user. This response type aids user in providing a reply based on the options listed out for the user to choose from. The _Quick Replies_ response type enables you to display text combined with a series of action buttons as options for user's selection.

- Example: Intent related to **Asking for help**

    ![Quick Replies](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/quick_replies.png)

## Card
The _Card_ response type is suitable to use when images with hyperlinks are needed to be shown as a reply. This response type enables you to display images with action buttons for user to click.

- Example: Intent for **Menu inquiry for drinks**

    ![Card](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/card.png)

## Rich Text Response
The _Rich Text Response_ response type is suitable to use when you need to include formatted text, hyperlinks, pictures or video content as part of your response to the user. 

- Example: Intent **Inquiry for operating hours**

    ![Rich Text Response](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/rich_text_response.png)

## Event
The _Event_ response type is to enable the follow up Intent to be shown after the first Intent is triggered. 

- Example: The Intent **Inquiry For Secret Promotion** is triggered, followed by the **User Rating** Intent which contains the Event **evt-user_rating**
	![Event 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/event_1.png)
	![Event 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/event_2.png)

## Occurrence Event
The _Occurrence Event_ response type is set up to trigger another Intent once a particular Intent has been triggered for certain number of times. 

- Example: After the Intent **Default Fallback Intent** is triggered continuously for several times, another Intent with the Event **evt-ask_for_help** is triggered so that the conversation can proceed.

	![Occurrence Event 1](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/occurrence_event_1.png)
	![Occurrence Event 2](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/occurrence_event_2.png)

## Change Language
The _Change Language_ response type is configured in an Intent to enable the language switching action. 

- Example: The Intent **Change Language** is created to allow capturing the _User Says_ in **English**, **Chinese** and other supported languages.
    
	![Change Language](https://github.com/fx-giant/giant-documentations/blob/master/chatbot/images5/change_language.png)
