QUnit.test("Make input.autogrow elements autogrow", function(assert){
  var test = function(){
    $('input.autogrow').inputAutogrow();
    return true;
  };
  assert.ok(test(), "Passed!");
});

QUnit.test("Other", function(assert){
  var test = function(){
    /* Manually trigger update */
    $('input.autogrow').trigger('autogrow');
    /* or */
    $('input.autogrow').trigger('change');

    /* Update Autogrow field with updated parent container width */
    $('input.autogrow').inputAutogrow();

    /* Custom Options */
    $('input.autogrow').inputAutogrow({maxWidth: 500, minWidth: 25, trailingSpace: 10});

    /* Remove autogrow from input */
    //$('input.autogrow').inputAutogrow('destroy');

    return true;
  };

  assert.ok(test(), "Passed!");
});
