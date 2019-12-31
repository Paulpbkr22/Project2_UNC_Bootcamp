// var md5 = require("md5");

$(document).ready(function() {
   
    var userEmail="";
    var userId = "";
    var userName ="";
    $.get("/api/user_data").then(function(res){
      userEmail =res.email
      userId = res.id
      userName = res.name
    })
    
    $.get("/api/user/").then(function(data) {
      console.log(data);
      for(var i=0; i<data.length; i++){
        if(data[i].email===userEmail){
          $(".member-name").text(data[i].name);
          
        }
      }
    });
    $("#invitePal").on("click", function(){
      // Create hash and displays to user then stores in Invtes model
        $.post("/api/invite",{
          user: userName,
          UserId: userId
        }
        ).then(function(results){
        //  Display results in a modal here.
        })


    });
    $("#createCompany").on("click", function(){
      console.log("inside createCompnay")
      // var postTitle = $("postTitle")
      // console.log(postTitle)
      // var companyName = $("#postCompanyInput");
      // var postTextInput = $("#postCompanyText");
      $("#addCompanyModal").modal("show");
      var addCompanyName = $("#companyNameAdd");
      var newCompany = addCompanyName.val().trim();
      console.log(newCompany);
      console.log(addCompanyName);
      
      $("#companySubmit").on("click", function(){
        console.log(addCompanyName);
    
      $.post("/api/company",{
        name: newCompany
      //   // UserId: userId

      }).then(function(data){
        console.log(data);
        
      });
    });
    });
  });
  // $.post("/api/signup", {
  //   email: email,
  //   password: password,
  //   name: name,
  //   jobTItle: jobTItle
  // }).then(function(data) {
  //   window.location.replace(data);