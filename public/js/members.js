// var md5 = require("md5");

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    console.log(this);
    var userEmail="";
    var userId = "";
    var userName ="";
    $.get("/api/user_data").then(function(res){
      userEmail =res.email
      userId = res.id
      userName = res.name
    })
    // var userID =$(this).id;
    $.get("/api/user/").then(function(data) {
      console.log(data);
      for(var i=0; i<data.length; i++){
        if(data[i].email===userEmail){
          $(".member-name").text(data[i].name);
          // for(var j=0; j<data.Posts.length; j++){
          //   $(".member-post").text(data[i].Posts)
          // }
          
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
          console.log(results);
        })


    });
    $("#postingSubmit").on("click", function(){
      console.log("inside postinSumbit")
      var postTitle = $("postTitle")
      console.log(postTitle)
      var companyName = $("#postCompanyInput");
      var postTextInput = $("#postCompanyText");
      console.log(postTextInput)
      // $.post("/app/post",{
      //   title: postTitle,
      //   body: postTextInput,
      //   // UserId: userId

      // }).then(function(data){
        // console.log("line34" + data);
        // window.location.replace(data);
        // for(var j=0; j<data.Posts.length; j++){
        //     $(".member-post").text(data[i].Posts)
        //   }
        
      // })
    });
  });
  // $.post("/api/signup", {
  //   email: email,
  //   password: password,
  //   name: name,
  //   jobTItle: jobTItle
  // }).then(function(data) {
  //   window.location.replace(data);