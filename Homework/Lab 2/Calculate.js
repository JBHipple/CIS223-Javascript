/*
	CIS 223
	Lab Assignment 2
	
	Author: Joshua Hipple
	Date:   9/12/2014
	
	Filename: Calculate.js  
*/

var name = "";
var quantity = 0;
var unitPrice = 0;
var sales = 0;

function calcTotal() {
	name = document.getElementById("name").value;
	quantity = document.getElementById("quantity").value;
	unitPrice = document.getElementById("unitprice").value;
	sales = quantity * unitPrice;
	alert("Hello, " + name + "\nYour sales is $" + sales);
}

document.getElementById("salessubmit").addEventListener("click", calcTotal, false);