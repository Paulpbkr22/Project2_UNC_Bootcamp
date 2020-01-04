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
    $.get("/api/post")


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
      console.log("inside createCompany")
      // var postTitle = $("postTitle")
      // console.log(postTitle)
      // var companyName = $("#postCompanyInput");
      // var postTextInput = $("#postCompanyText");
      $("#addCompanyModal").modal("show");
      

     
      // console.log(companyAdd);
      $(document).on("click", "#companySubmit", function(){
        var addCompanyName = $("#companyNameAdd");
        var newCompany = addCompanyName.val();
        console.log(newCompany);
       
        console.log(addCompanyName);
        getCompanyName(newCompany);
        // createCompany(companyAdd);
        // companyAdd.val("");
      // $.post("/api/company",{
      //   name: newCompany
      // //   // UserId: userId

      // }).then(function(data){
      //   console.log(data);
        
      // });
    });
    });
  });
$("#companySearchButton").on("click", function(){

var lookingForCompany = $("#lookingForCompany");
var lookingForCompanyValue = lookingForCompany.val().trim();
console.log(lookingForCompanyValue);


// getExistingCompany(lookingForCompanyValue);

var companySearch= {
  name: lookingForCompanyValue
}

    // companySearched = companySearch.replace(/[{}]/g, "");
  window.location.href ="http://localhost:3030/company?name=" + lookingForCompanyValue;
  // console.log(data);
  // $(".company-name").text(data.name);
  // $(".company-post").text(data.Posts[0].body);

  // These calls work. CREATE LOOP FOR POSTS AFTER FIGURING OUT ROUTE
  
  // var results = data[0].Posts
  // for(var i=0; i<results.length, i++){
    // console.log(results[i].body);
  // }
  




});


  function getCompanyName(newName){
    var companyAdd= {
      name: newName
    }
    createCompany(companyAdd);

  }

  function createCompany(company) {
    $.post("/api/company", company).then(function(data) {
     console.log(data)
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(function(err){
      if (err) throw err;
      res.send("failure");
  });
  }