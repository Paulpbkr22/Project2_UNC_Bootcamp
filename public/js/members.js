$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    console.log(this);
    // var userID =$(this).id;
    $.get("/api/user/").then(function(data) {
      console.log
      for(var i=0; i<data.length; i++){
        if(data[i].id===req.user.id){
          $(".member-name").text(data[0].name);
        }
      }
      // $(".member-name").text(data[0].name);
    });
  });