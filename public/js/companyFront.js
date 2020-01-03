$(document).ready(function() {
  getParams()
function getParams(){
  let params = new URLSearchParams(document.location.search.substring(1));
  let name = params.get("name"); // is the string "Jonathan"
console.log(name);
getExistingCompany(name);
}

function getExistingCompany(searchedCompany){
  var companySearch= {
    name: searchedCompany
  }
  console.log(companySearch);

  searchForCompany(companySearch);

}

function searchForCompany(companySearch) {
$.ajax({
  url:"/api/company/" + companySearch.name,
  method: "GET",
}).then(function(data){
  console.log(data)
  console.log(data[0].name);
      console.log(data[0].Posts[0].body);
      $(".company-name").text(data.name);
      $(".company-post").text(data.Posts[0].body);
    

})
}



  
// Create Company



// Get Company

// Update company
 $("#postingSubmit").on("click", function(){
      console.log("inside postinSumbit")
      var postTitle = $("postTitle")
      console.log(postTitle)
      var companyName = $("#postCompanyInput");
      var postTextInput = $("#postCompanyText");
      console.log(postTextInput)
      $.post("/app/post",{
        title: postTitle,
        body: postTextInput,
      //   // UserId: userId

      // }).then(function(data){
        // console.log("line34" + data);
        // window.location.replace(data);
        // for(var j=0; j<data.Posts.length; j++){
        //     $(".member-post").text(data[i].Posts)
        //   }
        
      // })
    });

// Delete


});
});