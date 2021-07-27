/*
   Final Project
   Filename: scripts.js
   
   
   Author:(Team #1)Zach Karr, Jenny Beezley
   Date: 7/19/2021
   
   Supporting Files:

*/

/* styles for slideshow */

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 5000); // Change image every 5 seconds
} 