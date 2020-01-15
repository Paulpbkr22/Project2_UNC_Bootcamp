// var md5 = require("md5");

$(document).ready(function () {
  var userCompanyCardObject=[];
  var userEmail = "";
  var userId = "";
  var userName = "";
  $.get("/api/user_data").then(function (res) {
    userEmail = res.email
    userId = res.id
    userName = res.name
  })

  $.get("/api/user/").then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].email === userEmail) {
        $(".member-name").text(data[i].name);

      }
    }
  });

  $.get("/api/user/").then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].email === userEmail) {
        console.log("before name")
        $(".member-name").text(data[i].name);
        console.log("after name");
        var userIdNumber = {
          id: data[i].id
        }
        console.log(userIdNumber)
        displayUserPosts(userIdNumber);

      }
    }
    });

    function displayUserPosts(idForPosts){
      "inside displayUserPosts function"
      console.log(idForPosts)
    $.ajax({
      url: "/api/user/" + idForPosts.id,
      method: "GET",
    }).then(function (data) {
      console.log("line 47" + (JSON.stringify(data)));
      var userPosts = data.Posts
      for (var k = 0; k < userPosts.length; k++) {
        userCompanyCard = {
          companyname: userPosts[k].Company.name,
          postTitle: userPosts[k].title,
          postBody: userPosts[k].body,
      };
      console.log(userCompanyCard);
      userCompanyCardObject.push(userCompanyCard);
        
      }
       
        console.log(userCompanyCardObject);
        for(var i=0; i<userCompanyCardObject.length; i++){
        var cards = $("<div>").addClass("card p-3 m-3").attr("style", "width: 18rem;").append(
          $("<div>").addClass("card-title").text("Posts for: "+userCompanyCardObject[i].companyname),
          $("<div>").addClass("card-subtitle").text("Titled: "+userCompanyCardObject[i].postTitle),
          $("<div>").addClass("card-text pt-3").text("Post: "+userCompanyCardObject[i].postBody)
          
        );

      $(".cardRow").append(cards);
        }
      
      
    })
  }

    $("#invitePal").on("click", function(){
      // Create hash and displays to user then stores in Invtes model
        $.post("/api/invite",{
          user: userName,
          UserId: userId
        }
        ).then(function(results){
        //  Display results in a modal here.
         console.log(results.hash);
        $("#inviteCode").text(results.hash);
        })
    });   
    
    // Clipboard function
    $(function(){
      new Clipboard(".copy-text");
    });

    $("#createCompany").on("click", function(){
      console.log("inside createCompany")
      
      $("#addCompanyModal").modal("show");
      


  });

  function generateInvite(createdObject) {
    $.ajax({
      url: "/api/invite",
      data: createdObject,
      method: "POST",

    
    }).then(function (results) {
      //  Display results in a modal here.
      console.log(results.hash);
    })
  }
  $("#createCompany").on("click", function () {
    console.log("inside createCompany")
    
    $("#addCompanyModal").modal("show");



    $(document).on("click", "#companySubmit", function () {
      var addCompanyName = $("#companyNameAdd");
      var newCompany = addCompanyName.val();
      console.log(newCompany);

      console.log(addCompanyName);
      getCompanyName(newCompany);
   
    });
  });
});
$("#companySearchButton").on("click", function () {

  var lookingForCompany = $("#lookingForCompany");
  var lookingForCompanyValue = lookingForCompany.val().trim();
  console.log(lookingForCompanyValue);


  

  var companySearch = {
    name: lookingForCompanyValue
  }

  
  // window.location.href = "/company?name=" + lookingForCompanyValue;
  
checkForExistingComopany(lookingForCompanyValue);



});
function checkForExistingComopany(isExistingCompany){
console.log("inside check for each");
  $.ajax({
    url: "/api/company/" + isExistingCompany,
    method: "GET",
  }).then(function (data) {
    console.log(data)
    if(!data.length){
     
      $("#noCompanyModal").modal("show");
    }
    else{
      window.location.href = "/company?name=" + isExistingCompany;
    }
  });
}

function getCompanyName(newName) {
  var companyAdd = {
    name: newName
  }
  createCompany(companyAdd);

}

function createCompany(company) {
  $.post("/api/company", company).then(function (data) {
    console.log(data)
    // If there's an error, handle it by throwing up a boostrap alert
  }).catch(function (err) {
    if (err) throw err;
    res.send("failure");
  });
  }



 