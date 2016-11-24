
var content = [

	{
		"question": "What is Harry Potter's owl's name?"
		"option1": "Hedwig"
		"option2": "Dobby"
		"option3": "Ludwig"
	},
	{
		"question": "Who stole the sorcerer's stone?"
		"option1": "Severus Snape"
		"option2": "Professor McGonagall"
		"option3": "Professor Quirrell"
	},
	{
		"question": "Who did Harry run into in the chamber of secrets?"
		"option1": "Tom Riddle"
		"option2": "Sirius Black"
		"option3": "Dumbledore"
	},
	{
		"question": "Who was the Half-Blood Prince?"
		"option1": "Harry Potter"
		"option2": "Severus Snape"
		"option3": "Hagrid"
	},
	{
		"question": "What house is Draco Malfoy in?"
		"option1": "Gryffindor"
		"option2": "Ravenclaw"
		"option3": "Slytherin"
	},
]

var audio = new Audio("../Song.mp3");

$("#start").on(click, function(){
	
	audio.play();

var timer = {
	start: function() {
	$("#time").html("00:00");
    counter = setInterval(stopwatch.count, 1000);
  }
}



})

