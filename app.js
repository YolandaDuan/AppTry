var main = function () {
	"use strict";

	$("#addButton").on("click", function(event){
		console.log("Hello Yolanda, you made it!");
		$(".comments").append("<p>this is a new comment.</p>");
	});
}

$(document).ready(main);