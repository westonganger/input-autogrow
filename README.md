# input-autogrow
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

Input-Autogrow is a plugin for autogrowing inputs. This plugin is different from others because most usually target `textarea` tags, this library is instead targeted at `input` tags.

Requires a DOM library such as jQuery, Zepto, or any that supports `$.fn` plugins.

# Demo

https://jsfiddle.net/xpvt214o/50743/

# Install

#### NPM, Yarn, or Bower
```
npm install input-autogrow

yarn add input-autogrow

bower install input-autogrow
```

#### Rails Install
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
/* Makes input elements autogrow */
$('input.autogrow').inputAutogrow();

/* Manually trigger update */
$('input.autogrow').trigger('autogrow');
/* or */
$('input.autogrow').trigger('change');

/* Custom Options */
$('input.autogrow').inputAutogrow({maxWidth: 500, minWidth: 25, trailingSpace: 10});

/* Remove autogrow from input */
$('input.autogrow').inputAutogrow('destroy');

/* If the parent container width is changed (and maxWidth is not specified)
   OR the options need to be changed, then you must destroy & re-initialize inputAutogrow */
$('input.autogrow').inputAutogrow('destroy');
$('input.autogrow').inputAutogrow();
```

# Options
`maxWidth` - The max width of the autogrow - Defaults to the inputs parent width

`minWidth` - The min width of the autogrow - Defaults to the inputs original input start width

`trailingSpace` - This is extra spacing at the end of the input which is used until the maxWidth is hit - Default: `0`

# Contributing
- Only edit js files from `src/` and `test/` folders.
- To run tests: `npm run test`
- Remember to run `gulp` to run the dist build after your done adding and testing your changes.

# Credits
Created & Maintained by Weston Ganger - [@westonganger](https://github.com/westonganger)

Originally based on this [Stackoverflow answer](http://stackoverflow.com/questions/931207) by James Padolsey

For any consulting or contract work please contact me via my company website: [Solid Foundation Web Development](https://solidfoundationwebdev.com)
