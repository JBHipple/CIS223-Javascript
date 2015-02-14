/*	CIS 230 - W1
 *	Final - Part 2
 *	Joshua Hipple
 *
 *	Filename: Final2.js
 */

 // Create global variables
 var cardNumber = "";
 var cardType = "";
 var expMonth = "";
 var expYear = "";
 
 // Fires when submit button is pressed, gathering info and creating cookies
 function submitInfo() {
	if (document.getElementById("ccnumber").value !== "") {
		getCardNumber();
		getCardType();
		getExpiration();
		createCookies();
	} else {
		window.alert("Please complete the form before submitting");
		}
 }
 
 // This function finds the credit card number and sets it to cardNumber
 function getCardNumber() {
	cardNumber = document.getElementById("ccnumber").value;
 }
 
 // This function finds the card type and sets it to cardType
 function getCardType() {
	// set the radio list to an array
	var cardList = document.querySelectorAll("#cardselections input");
	for (i = 0; i < cardList.length; i++) {
		if (cardList[i].checked) {
			cardType = cardList[i].value;
		}
	}
 }
 
 // This function finds the expiration date and sets it to expMonth and expYear
 function getExpiration() {
	// get the month
	monthValue = document.getElementById("expMo");
	expMonth = monthValue.options[monthValue.selectedIndex].value;
	
	// get the year
	yearValue = document.getElementById("expYr");
	expYear = yearValue.options[yearValue.selectedIndex].value;
 }
 
 // This function sets the payment information to cookies, expiring in 2 minutes
 function createCookies() {
	// create date to use for cookie expiration
	var expiresDate = new Date();
	expiresDate.setMinutes(expiresDate.getMinutes() + 2);
	document.cookie = "cardNumber=" + cardNumber + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cardType=" + cardType + "; expires=" + expiresDate.toUTCString();
	document.cookie = "expMonth=" + expMonth + "; expires=" + expiresDate.toUTCString();
	document.cookie = "expYear=" + expYear + "; expires=" + expiresDate.toUTCString();
 }
 
 // chooses the card type based on what is entered in the ccnumber field
 function setCardType() {
	// retrieve the CC number and set the radio, set errortext to variable
	var ccNumber = document.getElementById("ccnumber").value;
	var errorText = document.getElementById("errortext");
	
	if ((ccNumber.slice(0,2) === "34" || ccNumber.slice(0,2) === "37") && ccNumber.length === 15) {
		document.getElementById("amex").checked = true;
		errorText.style.display = "none";
	} else if ((ccNumber.slice(0,4) === "6011" || ccNumber.slice(0,2) === "65") && ccNumber.length === 16) {
		document.getElementById("discover").checked = true;
		errorText.style.display = "none";
	} else if ((ccNumber.slice(0,2) === "51" || ccNumber.slice(0,2) === "55") && ccNumber.length === 16) {
		document.getElementById("mastercard").checked = true;
		errorText.style.display = "none";
	} else if (ccNumber.slice(0,1) === "4" && (ccNumber.length === 16 || ccNumber.length === 13)) {
		document.getElementById("visa").checked = true;
		errorText.style.display = "none";
	} else {
		errorText.style.display = "block";
	}
 }
 
 // Creates event handlers
 function setUpPage() {
	// clicking submit fires the submitInfo() function
	var submitButton = document.getElementById("submitbutton");
	if (submitButton.addEventListener){
		submitButton.addEventListener("click", submitInfo, false);
	} else if (submitButton.attachEvent) {
		submitButton.attachEvent("onclick", submitInfo);
	}
 
	// changing the CC number attempts to autoselect a card type
	var ccNumber = document.getElementById("ccnumber");
	if (ccNumber.addEventListener) {
		ccNumber.addEventListener("blur", setCardType, false);
	} else if (ccNumber.attachEvent) {
		ccNumber.attachEvent("onblur", setCardType);
	}
 }
 
 if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}