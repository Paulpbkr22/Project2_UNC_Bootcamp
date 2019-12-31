$(document).ready(function() {
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