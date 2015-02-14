/* CIS 223 Lab Assignment #5
   Lab5.js
   Joshua Hipple
*/
// create global variables
var entreeToPass = "";
var entreePrice = 0;
var sidesToPass = [];
var sidesPrice = 0;


// display browser info
function displayBrowserInfo() {
	var browName = navigator.appName;
	var browVer = navigator.appVersion;
	window.alert("Web Browser is " + browName + "\nWeb Browser Version is " + browVer);
}

// submit info
function submitOrder() {
	getEntree();
	getSides();
	openOrderPage();
	
}

// finds out which entree was selected
function getEntree() {
	var entreeElements = document.getElementsByName("entree");
	for (var i = 0; i < 4; i++) {
		if (entreeElements[i].checked) {
			entreeToPass = entreeElements[i].id;
			entreePrice = parseFloat(entreeElements[i].value);
		}
	}
	try {
		if (entreeToPass === "") {
			throw "Please select an entree.";
		}
	}
	catch(err) {
		window.alert(err);
	}
}

// finds out which sides were selected
function getSides() {
	sidesToPass = [];
	sidesPrice = 0;
	var sidesElements = document.getElementsByName("side");
	for (var i = 0; i < 5; i++){
		if (sidesElements[i].checked) {
			sidesToPass.push(sidesElements[i].id);
			sidesPrice += parseFloat(sidesElements[i].value);
		}
	}
}

// opens the new page for the order
function openOrderPage() {
	var winOptions = "width=500,height=600";
	var orderWindow = window.open("Lab5Total.html", "orderwin", winOptions)
	
	var orderTotal = 0;
	orderTotal = sidesPrice + entreePrice;
	orderTotal = orderTotal.toFixed(2);
	var sidesString = "";
	for (var i = 0; i < sidesToPass.length; i++) {
		sidesString += "<li>" + sidesToPass[i] + "</li>";
	}
	
	orderWindow.document.write('<!DOCTYPE HTML>\n<html>\n<head>\n<!--\nCIS 223 Lab Assignment #5\nLab5Total.html\nJoshua Hipple\n-->\n<title>Your Order</title>\n</head>\n<body>\n<h1>Your Chinese Food Order</h1>\n<ul id="orderList"><li>' + entreeToPass + '</li>\n' + sidesString + '</ul><br>\n<h2 id="total">Total order is $' + orderTotal + '</h2>\n<script src="total.js"></script>\n</body>\n</html>');
	
	orderWindow.focus();	
}

// creates event listeners
function createEventListeners() {
	var submitButton = document.getElementById("submitbutton");
	if (submitButton.addEventListener) {
		submitButton.addEventListener("click", submitOrder, false);
	} else if (submitButton.attachEvent) {
		submitButton.attachEvent("onclick", submitOrder);
	}
}

// set up page event handlers
function setUpPage() {
	createEventListeners()
	displayBrowserInfo();
}


// runs on page load, sets up page
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}