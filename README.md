# input-autogrow
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

`input-autogrow` is a jQuery plugin for autogrowing inputs. This plugin is different from others because most usually target `textarea` tags, this library is instead targeted at `input` tags.

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

/* Update Autogrow field with updated parent container width */
$('input#my-input').inputAutogrow();

/* Custom Options */
$('input#my-input').inputAutogrow({maxWidth: 500, minWidth: 25, trailingSpace: 10});

/* Remove autogrow from input */
$('input#my-input').inputAutogrow('destroy');
```

# Options
`maxWidth` - Default: `Inputs parent width` - The max width of the autogrow

`minWidth` - Default: `Original input start width` - The min width of the autogrow. 

`trailingSpace` - Default: `0` - This is extra spacing at the end of the input which is used until the maxWidth is hit.

# Credits
Created by Weston Ganger - @westonganger

This plugin is based on a [Stackoverflow answer](http://stackoverflow.com/questions/931207) by James Padolsey
