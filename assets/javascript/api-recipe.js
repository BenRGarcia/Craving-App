var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_key=f40369d36572ddfbde3e84a38ec73019&app_id=35db36fe&q=";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
      });
