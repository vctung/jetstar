(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    firstname: {
                        required: true,
                        minlength: 5
                    },
                    lastname:{
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        confirmpassword: true,
                        minlength: 5
                    },
                    confirmpassword: "required"
                },
                messages: {
                    firstname:{
                        required: "Please enter your Firstname",
                        minlength: "Must be at least 5 characters long"
                    },
                    lastname: {
                        required: "Please enter your Lastname",
                        minlength: "Must be at least 5 characters long"
                    },
                    confirmpassword: "Please confirm your password",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: "Please enter a valid email address",                    
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);