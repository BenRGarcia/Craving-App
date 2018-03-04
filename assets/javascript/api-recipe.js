var queryURL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=4c3b3108cb8ae8b884d83deac5b1a363&q=shredded%20chicken";

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
