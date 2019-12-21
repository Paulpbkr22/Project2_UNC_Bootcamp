$("#callbutton").on("click", function (event) {



    var queryURL = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&pharmaceuticals";
    // var ua = navigator.userAgent;

    queryURL2 = "https://cors-anywhere.herokuapp.com/" + queryURL;
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (results) {
        console.log(results);
    });
});