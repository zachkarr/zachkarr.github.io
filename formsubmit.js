/*

   Final Project
   Author:(Team #1)Zach Karr, Jenny Beezley
   Date: 7/19/2021
   Filename: formsubmit.js
   Supporting Files:



(window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}*/

var inputfName = document.getElementById('fName');
var inputlName = document.getElementById('lName');
var inputphone = document.getElementById('phone');
var inputdate = document.getElementById('date');
var inputtime = document.getElementById('time');
var inputguests = document.getElementById('guests');
var button = document.querySelector('.submit-button');
var form = document.querySelector('.interestForm');
function checkInput() {
   if (inputfName.value.trim() !== "") {
       button.style.backgroundColor = '#fa923f';
   } else {
	   button.style.backgroundColor = '#979695';
}
}

form.addEventListener('submit', function(event) {
	event.preventDefault();
	console.log('Submitted');
})