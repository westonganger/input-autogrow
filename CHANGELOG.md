# Changelog

- `v1.1.0 - 2018-04-04`
  - Breaking Change - Improve trailingSpace option to behave more generically
  - Breaking Change - When inputAutogrow is already enabled on an input and `inputAutogrow` is called nothing will happen. Instead `inputAutogrow('destroy')` must be now be called first.
  - Fix error when incorrectly attempted to parse options when the event was
  - Add JS Fiddle demo
  - Add QUnit test suite. Run this using `npm run test`
  - [#6](https://github.com/westonganger/input-autogrow/issues/6) - Fix bug during `destroy` action
  triggered
- `v1.0.2 - 2017-04-25`
  - Properly namespace events
- `v1.0.1 - 2017-02-27`
  - Return this from function to support chaining
  - Allow support for jQuery alternatives such as Zepto
  - Fix readme instructions
- `v1.0.0 - 2017-01-25`
  - Release stable v1
  - Remove jquery dependency from bower.json to solve rails-assets problems
  - Confirm compatibility with Jquery 1, 2, & 3+
- `v0.9.1 - 2016-09-01`
  - Add change trigger
- `v0.9.0 - 2016-08-20`
  - Initial release
