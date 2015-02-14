/*	CIS 230 - W1
 *	Final - Part 1
 *	Joshua Hipple
 *
 *	Filename: Final1.js
 */

// Global Variables
var firstName = "";
var lastName = "";
var emailAddress = "";
var sports = [];
var sportsOutput = "";
var color = "";
var searchEngine = "";

// This function runs when the submit button is clicked, calling other functions to do the work
function report() {
	getContact();
	getSport();
	getColor();
	getSearchEngine();
	displayAlert();
}

// This function gets the name and e-mail values
function getContact() {
	// The following statement retrieves the user's input from the name and e-mail values
	firstName = document.getElementById("firstname").value;
	lastName = document.getElementById("lastname").value;
	emailAddress = document.getElementById("email").value;
	
	// the following if statements replace a blank entry with "blank"
	if (firstName === "") {
		firstName = "blank";
	}
	if (lastName === "") {
		lastName = "blank";
	}
	if (emailAddress === "") {
		emailAddress = "blank";
	}
}

// This function gets the value of the sports checked
function getSport() {
	// The following empties the sports outputs for re-submissions
	sports = [];
	sportsOutput = "";
	
	// This statement assigns all the sports checkboxes to an array
	var sportsInput = document.querySelectorAll("#sports input");
	
	// Loop through the array and check if they are selected, if so add to array to display
	for (i = 0; i < sportsInput.length; i++) {
		if (sportsInput[i].checked) {
			sports.push(sportsInput[i].value);
		}
	}
	
	// If no sports were selected, add 1 array element stating so
	if (sports.length === 0) {
		sports[0] = "None";
	}
	
	// Create an output string
	for (i = 0; i < sports.length; i++) {
			sportsOutput = sportsOutput + " " + sports[i];
	}
}

// This function gets the value of the favorite color
function getColor() {
	// Assign radio selections to array
	var colorInput = document.querySelectorAll("#colors input");
	
	// Loop through the array and find the selected color
	for (i = 0; i < colorInput.length; i++) {
		if (colorInput[i].checked) {
			color = colorInput[i].value;
		}
	}
	
	// Check if color is empty, if so make it "None"
	if (color === "") {
		color = "None";
	}
}

// This function gets the value of the favorite search engine
function getSearchEngine() {
	// assign the selectedIndex to a variable
	searchValue = document.getElementById("searchengine");
	searchEngine = searchValue.options[searchValue.selectedIndex].value;
}

// This function displays the alert box
function displayAlert() {
	var outputString = "Name: " + firstName + " " + lastName + "\n E-mail: " + emailAddress + "\n Favorite Sports:" + sportsOutput + "\n Favorite Color: " + color + "\n Favorite Search Engine: " + searchEngine;
	window.alert(outputString);
}

var submitButton = document.getElementById("submitbutton");
if (submitButton.addEventListener) {
	submitButton.addEventListener("click", report, false);
} else if (submitButton.attachEvent) {
	submitButton.attachEvent("onclick", report);
}