# input-autogrow
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=VKY8YAWAS5XRQ&lc=CA&item_name=Weston%20Ganger&item_number=chosen_readonly&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHostedGuest" target="_blank" title="Donate"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="Donate"/></a>

input-autogrow is a jQuery autogrow plugin for autogrowing inputs. This plugin is different from others because most usually target `textarea` tags, this library is targeted at `input` tags.

# Install

##### Bower
```
bower install input-autogrow
```

##### NPM
```
npm install input-autogrow
```

#### Rails
```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-input-autogrow'
end


# app/assets/javascripts/application.js
/*
 *= require input-autogrow
*/
```

# Usage
```javascript
/* Makes elements readonly if they already have the readonly attribute */
$('input').inputAutogrow();

/* Update Autogrow field with new options, parent container width, or input start width */
$('input#my-input').inputAutogrow();

/* Default Options - this line wont work though because you cant use 'this' in the current scope but it gives you the idea */
$('input#my-input').inputAutogrow({maxWidth: $(this).parent().width, minWidth: $(this).width, trailingSpace: 0});

/* Custom Options */
$('input#my-input').inputAutogrow({maxWidth: 500, minWidth: 25, trailingSpace: 10});

/* Remove autogrow from input */
$('input#my-input').inputAutogrow('destroy');
```

# Options
`maxWidth` - Default: `Inputs parent width` - The max width of the autogrow
`minWidth` - Default: `Inputs start width` - The min width of the autogrow
`trailingSpace` - Default: `0` - This is extra spacing at the end of the input which is used until the maxWidth is hit.

# Credits
Created by Weston Ganger - @westonganger

This plugin is based on a [Stackoverflow answer](http://stackoverflow.com/questions/931207) by James Padolsey
