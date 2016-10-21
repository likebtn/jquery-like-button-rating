# jQuery Like Button Rating Plugin
Sexy jQuery Like Button Rating Plugin

![jQuery Like Button Rating Plugin](https://likebtn.com/i/jquery-like-button-rating-plugin.png)

## Live Demo
<a href="https://likebtn.com/en/jquery-like-button-rating" title="jQuery Like Button Rating Plugin">https://likebtn.com/en/jquery-like-button-rating</a>

## How To Use 

Like button can be attached to any HTML element. See <a href="https://jsfiddle.net/likebtn/5nyecdhg/4/">JSFiddle</a>

	<div data-identifier="item_1" class="like-button">Like button with identifier set using data-parameter</div>
	<div data-identifier="item_2" class="like-button">One more</div>
	<span id="like-button-x">For this Like button the identifier is set via options</span>
	<i id="like-button-y">For this Like button the page URL is used as identifier</i>

	$(document).ready(function($) {
		$(".like-button").likebtn();
	    $("#like-button-x").likebtn({
	    	identifier: "my_button",
	        theme: "github"
	    });
	    $("#like-button-y").likebtn({
	        theme: "disk"
	    });
	});

## Identifier

Each button should have a unique **identifier** parameter (it can be understood as a button's name) to which votes are being connected. Identifier can be set:

1) By settings *data-identifier="unique_button_name"* parameter for the element
```
    <div data-identifier="unique_button_name" class="like-button">Like button with identifier set using data-parameter</div>

	$(".like-button").likebtn();
```
2) **Identifier** can be set via "identifier" parameter passed to likebtn() function:
```
	<span id="like-button-x">For this Like button the identifier is set via options</span>

    $("#like-button-x").likebtn({
    	identifier: "my_button"
    });
```
3) If **identifier** is not set for the Like button the page's URL is used as an identifier to which votes are being connected:
```
    <i id="like-button-y">For this Like button the page URL is used as identifier</i>

    $("#like-button-y").likebtn({
        theme: "disk"
    });
```
## Settings

For the full list of available options see <a href="https://likebtn.com/en/settings" target="_blank">LikeBtn Settings</a> and <a href="https://likebtn.com/en/like-button-generator" target="_blank">Code Generator</a>

	$("#like-button-x").likebtn({
    		identifier: "my_button",
        theme: "github"
    });

<br/>
*Powered with ♥ by <a href="https://likebtn.com" title="Like Button Rating for Website">LikeBtn.com</a>*