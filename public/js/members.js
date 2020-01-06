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
  function displayUserPosts(idForPosts) {
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
      userCompanyCardObject.push(userCompanyCard);
        // $(".company-name").append(userPosts[k].Company.name);
        // $(".memberposts-title").append(userPosts[k].title);
        // $(".member-posts").append(userPosts[k].body);
       
      }
    })
  }
  userCompanyCardObject.forEach(res => {
    let card = document.createElement("div");
    // card.setAttribute(title, "Test");
    card.setAttribute(width, "100%");
    card.setAttribute(height, "290");
    let name = document.createTextNode('Company Name:' + res.companyname + ', ');
    card.appendChild(name);
    let comment = document.createTextNode('Title:' + res.postTitle + ', ');
    card.appendChild(comment);
    let post = document.createTextNode('Post:' + res.postBody);
    card.appendChild(post);
    let container = document.querySelector("#cardBody");
    container.appendChild(card);
  });
  // $("#invitePal").on("click", function(){
  //   // Create hash and displays to user then stores in Invtes model
  //     $.post("/api/invite",{
  //       user: userName,
  //       UserId: userId
  //     }
  //     ).then(function(results){
  //     //  Display results in a modal here.
  //     })


  // });

  $("#invitePal").on("click", function () {
    // Create hash and displays to user then stores in Invtes model
    console.log("inside invite");
    var userObjects = {
      user: userName,
      UserId: userId
    }
    generateInvite(userObjects);



  });

  function generateInvite(createdObject) {
    $.ajax({
      url: "/api/invite",
      data: createdObject,
      method: "POST",

      // $.post("/api/invite",{
      //   user: userName,
      //   UserId: userId
      // }
    }).then(function (results) {
      //  Display results in a modal here.
      console.log(results.hash);
    })
  }
  $("#createCompany").on("click", function () {
    console.log("inside createCompany")
    // var postTitle = $("postTitle")
    // console.log(postTitle)
    // var companyName = $("#postCompanyInput");
    // var postTextInput = $("#postCompanyText");
    $("#addCompanyModal").modal("show");



    // console.log(companyAdd);
    $(document).on("click", "#companySubmit", function () {
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
$("#companySearchButton").on("click", function () {

  var lookingForCompany = $("#lookingForCompany");
  var lookingForCompanyValue = lookingForCompany.val().trim();
  console.log(lookingForCompanyValue);


  // getExistingCompany(lookingForCompanyValue);

  var companySearch = {
    name: lookingForCompanyValue
  }

  // companySearched = companySearch.replace(/[{}]/g, "");
  window.location.href = "https://floating-harbor-41249.herokuapp.com/company?name=" + lookingForCompanyValue;
  // console.log(data);
  // $(".company-name").text(data.name);
  // $(".company-post").text(data.Posts[0].body);

  // These calls work. CREATE LOOP FOR POSTS AFTER FIGURING OUT ROUTE

  // var results = data[0].Posts
  // for(var i=0; i<results.length, i++){
  // console.log(results[i].body);
  // }





});


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



  // Create Card 

  let data = [
    {name: 'name0', description: 'description', date: 'XX/XX/XXXX'},
    {name: 'name1', description: 'description', date: 'XX/XX/XXXX'},
    {name: 'name2', description: 'description', date: 'XX/XX/XXXX'},
]
data.forEach(res => {
    let card = document.createElement("div");
    let name = document.createTextNode('Name:' + res.name + ', ');
    card.appendChild(name);
    let description = document.createTextNode('Description:' + res.description + ', ');
    card.appendChild(description);
    let date = document.createTextNode('date:' + res.date);
    card.appendChild(date);
    let container = document.querySelector("#container");
    container.appendChild(card);
});
