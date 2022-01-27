# jquery-darkhelp
// ABANDONED PROJECT //
#### Automatic help descriptions system. Use custom data attributes to describe your application features

##### Author: Pablo CL 
##### Website: [se32.com](http://www.se32.com)
***

### [DEMO](http://www.se32.com/darkhelp/example.html)

##How to use it:

Load Jquery, and link  the js and css of the plugin
Call the function `$().jqueryDarkhelp();` within the document ready. Example:

```javascript
    $(document).ready(function() {
        $().jqueryDarkhelp();
    });
```
If you dont like the button, you can manually activate the dialogs by using 2 different methods:
   ` $().jqueryDarkhelp({method:'show'});`
    `$().jqueryDarkhelp({method:'hide'});`
***
## Settings:
*  **selector** - Current html property where the text comes from, you can change it to be an alt, title or whatever crazy property you like.
*  **button_top** - Position of the button.
*  **button** - true or false to show/hide the button.
*  **button_color** - change the theme to one of the default ones: black, blue, red, green, brown, purple, invert.
*  **box_color** - change the theme to one of the default ones: black, blue, red, green, brown, purple, invert.
*  **button_active_text** - change the default text of the button. Use <br/> to break the line.
*  **button_deactive_text** - change the default deactive text of the button. Use <br/> to break the line.
*  **method** - init, show, hide
