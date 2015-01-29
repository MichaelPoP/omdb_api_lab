

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

                $("ul").on("click", ".remove", function () {
				    $(this).fadeOut(300, function () {
				       	    $(this).parent().fadeOut();
				    });
		        });
	    });
    });
});



