$(document).ready(function() {
    // Getting references to our form and input
   
    console.log("before on click");
    // When the signup button is clicked, we validate the email and password are not blank
    $(".create").on("click", function(event) {
      var emailInput = $("#email");
      console.log(emailInput);
    
      var passwordInput = $("#password");
      var nameInput = $("#nameInput");
      console.log(nameInput);
      var jobInput= $("#jobTitle");
    console.log("inside sign up");
      event.preventDefault();
      console.log("inside sign up form");
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        name: nameInput.val().trim(),
        jobTItle: jobInput.val().trim()
      };
      console.log(userData);
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.name, userData.jobTItle);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");
      jobInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, name, jobTItle) {
      $.post("/api/signup", {
        email: email,
        password: password,
        name: name,
        jobTItle: jobTItle
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });