
var formattedName;
formattedName = HTMLheaderName.replace("%data", "Kristin Majcher");

var formattedRole;
formattedRole = HTMLheaderRole.replace("%data", "Web Developer");

$("#main").append(formattedRole);
$("#main").prepend(formattedName);


var bio = {
	"name" : "Kristin",
	"role" : "Web Developer",
	"contacts": {
	 "mobile" : "555-5555",
	 "email"  : "kristin@example.com",
	 "github" : "kmajch",
	 "twitter": "@example",
	 "location" : "Boston",
	},
	"welcomeMessage": "This is going to be my welcome message.",
	"skills" : ["javascript", "css", "being cool"
	],
	"bioPic" : "http://placekitten.com/200/300"

};

$("#main").append(bio);








