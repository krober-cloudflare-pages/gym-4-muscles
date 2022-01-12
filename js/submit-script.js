"use strict";

var doEmailSignup = function() {
    const emailInput = document.getElementById("signup-email");
    
    // https://springquay.blogspot.com/2017/09/html-5-form-validation-not-work-with.html
    if (emailInput.checkValidity()) {
        document.getElementById("email-signup-form").innerHTML = '<h2 class="boom"> Awesome – Let\'s Get Started!</h2>';
    }
}

// when page loads...
document.addEventListener("DOMContentLoaded", function() {
    // get the search form
    const emailSignupForm = document.getElementById("email-signup-form");
    // when user submits the form (presses enter, in this case)
    emailSignupForm.addEventListener("submit", function(e) {
      // intercept / stop default behavior  
      e.preventDefault();
      // do the search
      doEmailSignup();
    });
});