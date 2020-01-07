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
      var inviteCode = $("#invitationcode");
    console.log("inside sign up");
      event.preventDefault();
      console.log("inside sign up form");
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        name: nameInput.val().trim().toUpperCase(),
        jobTitle: jobInput.val().trim(),
        inviteCode: inviteCode.val().trim()
      };
      console.log(userData);
  
      if (!userData.email || !userData.password|| !userData.inviteCode) {
        console.log("Add modal here");
        $("#registrationModal").modal("toggle");
        return;        
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");
      jobInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(user) {
      $.post("/api/signup", user).then(function(data) {
        console.log(data)
        window.location.replace("/login");
        // if (data.name === "SequelizeUniqueConstraintError") {
        //   $("#registrationModal").modal("toggle");

        // }
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
      $("#emailDupModal").modal("toggle");
    }
  });