$(document).ready(function () {

  var companyIdNow;
  var userEmail = "";
  var userId = "";
  var userName = "";
  var queryname = "";
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
        userId = data[i].id;

      }
    }
  });

  let params = new URLSearchParams(document.location.search.substring(1));
  console.log(params);





  getParams(params)
  function getParams(params) {

    queryname = params.get("name"); // is the string "Jonathan"
    console.log(name);
    getExistingCompany(queryname);
  }

  function getExistingCompany(searchedCompany) {
    var companySearch = {
      name: searchedCompany
    }
    console.log(companySearch);

    searchForCompany(companySearch);

  }

  function searchForCompany(companySearch) {
    $.ajax({
      url: "/api/company/" + companySearch.name,
      method: "GET",
    }).then(function (data) {
      console.log(data)
      console.log(data[0].name);
      companyIdNow = data[0].id;
      console.log(companyIdNow);
      var company = data[0].name;
      var posts = data[0].Posts;
      // console.log(data[0].Posts[0].body);
      $(".company-name").text(company);
      for (var i = 0; i < posts.length; i++) {
        $(".company-post-title").append(posts[i].title);
        $(".company-post").append(posts[i].body);
      }



    })
  }

  


  // Create Company



  // Get Company

  // Update company
  $("#postingSubmit").on("click", function () {
    console.log(userId);
    console.log(companyIdNow);
    var passedCompanyId = companyIdNow
    console.log(passedCompanyId);
    console.log("inside postinSumbit")
    // var postTitle = $("postTitle")
    // console.log(postTitle)
    var companyName = $("#postTitle").val();
    console.log(companyName)
    var postTextInput = $("#postCompanyText").val();
    console.log(postTextInput)
    var createPostObject = {
      title: companyName,
      body: postTextInput,
      UserId: userId,
      CompanyId: passedCompanyId
    }
    
    makePostCall(createPostObject);

    // Delete


  })
  // function createPostObject(companyName, postTextInput, userId, passedCompanyId) {
   
  //   console.log("line 80 " +JSON.stringify(createPostObject));
  //   makePostCall(createPostObject)
  // }
  function makePostCall(passedObject) {
    console.log(JSON.stringify(passedObject));
    console.log(name);
    //  $.post("/api/post", passedObject).then(function(data){
      // console.log("line 85 " + createPostObject);
     
    $.ajax({
      url: "/api/post",
      data: passedObject,
      method: "POST",
    }).then(function (data) {
      console.log("line34" + data);
      // window.location.replace(data);
      console.log(name);
      window.location.href = "http://localhost:3030/company?name=" + queryname;
    }).catch(function (err) {
      if (err) throw err;
      console.log(err);
      res.send(err);
    });
  }
});
