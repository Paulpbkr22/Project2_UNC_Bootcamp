$(document).ready(function () {
  var companyCardObject =[];
  var companyIdNow;
  var userEmail = "";
  var userId = "";
  var userName = "";
  var queryname = "";
  $("#cardBody").empty();
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

onLoad()
  function onLoad(){
  let params = new URLSearchParams(document.location.search.substring(1));
  console.log(params);
  getParams(params)
}



  
  function getParams(params) {

    queryname = params.get("name"); // is the string "Jonathan"
    // console.log(name);
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
      console.log(JSON.stringify(data));
      // console.log(data[0].name);
      companyIdNow = data[0].id;
      console.log(companyIdNow);
      var company = data[0].name;
      var posts = data[0].Posts;
      // console.log(data[0].Posts[0].body);
      $(".company-name").text(company);
      for (var i = 0; i < posts.length; i++) {
        companyCard ={
          userName : posts[i].User.name,
          postTitle: posts[i].title,
          postBody: posts[i].body
        }
        companyCardObject.push(companyCard);

        // $(".company-post-title").append(posts[i].title);
        // $(".company-post").append(posts[i].body);
        // $(".userNamePost").append(posts[i].User.name);
      }
      companyCardObject.forEach(res => {
        let card = document.createElement("div");
        let name = document.createTextNode('Username: ' + res.userName + ', ');
        card.appendChild(name);
        let comment = document.createTextNode('Title:' + res.postTitle + ', ');
        card.appendChild(comment);
        let post = document.createTextNode('Post:' + res.postBody);
        card.appendChild(post);
        let container = document.querySelector("#cardBody");
        container.appendChild(card);
      });



    })
  }

  


  // Create Company



  // Get Company

  // Update company
  $("#postingSubmit").on("click", function (e) {
    e.preventDefault()
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
    // console.log(name);
    //  $.post("/api/post", passedObject).then(function(data){
      // console.log("line 85 " + createPostObject);
     
    $.ajax({
      url: "/api/post",
      data: passedObject,
      method: "POST",
    }).then(function (data) {
      console.log("line34" + data);
      // window.location.replace(data);
      // console.log(name);
      window.location.href = "/company?name=" + queryname;
    }).catch(function (err) {
      if (err) throw err;
      console.log(err);
      res.send(err);
    });
  }
$("#companypageSearchButton").on("click", function(){
  var companyPageSearch = $("#lookingForCompanyPage")
  var companyPageSearchValue = companyPageSearch.val().trim();
  // window.location.href = "/company?name=" + companyPageSearchValue;
  checkForExistingComopany(companyPageSearchValue);
})
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
});
