

$(document).ready(function () {
	$("form").on("submit", function(event) {
		event.preventDefault();
		var movie = this.name.value;
		console.log(movie);
		$("#movielist").text("");
		$.getJSON("http://www.omdbapi.com/?s=" + movie, function(data) {
		
			console.log(data);
			//data is the object that contains all the movie results
    			for (var i = 0; i < data.Search.length ; i++) {
    			var button = "<button class='remove'>X</button>";
                	$("ul").append($("<li>" + " { " + data.Search[i].Title + " }-year-{ " + data.Search[i].Year + " }-imdbID-{ " + data.Search[i].imdbID + " } " + button + "</li>").fadeIn(400));
                	$("#searchbox").val("");
                	
 			}
		});

	});

});


// $("li").html(titles);
//Displays ONLY THE EXACT MOVIE SEARCHED

// $(document).ready(function () {
// 	$("form").on("submit", function(event) {
// 		event.preventDefault();
// 		var movie = this.name.value;
// 		console.log(movie);
// 		$.getJSON("http://www.omdbapi.com/?t=" + movie, function(data) {
// 			//var i = 0;
// 			console.log(data);
// 			//data is the object that contains all the movie results
// 			var movies = $("<li>" + data.Title + " - " + data.Year + " - " + data.Released + "</li>");
               
// 			console.log(data.Title);

// 			$("ul").append(movies);
//  			// $("li").html(titles);
// 		});

// 	});

// });
