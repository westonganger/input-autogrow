var $inputs = $('input.autogrow');

QUnit.module('Unit Tests', {
  afterEach: function(){
    // Cleanup / destroy input autogrow after each test
    $inputs.inputAutogrow('destroy');
  },
  after: function(){
    // Enable input autogrow after tests are completed
    $inputs.inputAutogrow();
  }
});

QUnit.test("Make input.autogrow elements autogrow", function(assert){
  var test = function(){
    $inputs.inputAutogrow();
    return true;
  };
  assert.ok(test(), "Passed!");
});

QUnit.test("Event: 'autogrow'", function(assert){
  var test = function(){
    $inputs.inputAutogrow();
    $inputs.trigger('autogrow')
    return true;
  };
  assert.ok(test(), "Passed!");
});

QUnit.test("Event: 'change'", function(assert){
  var test = function(){
    $inputs.inputAutogrow();
    $inputs.trigger('change')
    return true;
  };
  assert.ok(test(), "Passed!");
});

QUnit.test("Event: 'input'", function(assert){
  var test = function(){
    $inputs.inputAutogrow();
    $inputs.trigger('input')
    return true;
  };
  assert.ok(test(), "Passed!"); 
});

QUnit.test("Options", function(assert){
  var test = function(){
    $inputs.inputAutogrow({maxWidth: 500, minWidth: 25, trailingSpace: 10});
    return true;
  };
  assert.ok(test(), "Passed!"); 
});

QUnit.test("Attempt to remove input-autogrow when not added", function(assert){
  var test = function(){
    $inputs.inputAutogrow('destroy');
    return true;
  };
  assert.ok(test(), "Passed!"); 
});

QUnit.test("Remove input-autogrow", function(assert){
  var test = function(){
    $inputs.inputAutogrow();
    $inputs.inputAutogrow('destroy');
    return true;
  };
  assert.ok(test(), "Passed!"); 
});
