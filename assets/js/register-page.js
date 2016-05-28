$(document).on('click', 'form.register-form button[type=submit]', function(e) {

    var isValid = $(e.target).parents('form').isValid();

    if(!isValid) {
      e.preventDefault(); //prevent the default action
    }
    

});