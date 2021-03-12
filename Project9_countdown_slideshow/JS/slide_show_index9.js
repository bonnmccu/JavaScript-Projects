var slideIndex = 1; //link to select image 1
showSlides(slideIndex);

function plusSlides(n) { //links to next image
  showSlides(slideIndex += n);
}

function currentSlide(n) { //links to third image
  showSlides(slideIndex = n);
}

function showSlides(n) { //displays the images links to html file
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot"); //displays 'dots'
  if (n > slides.length) {slideIndex = 1}    //sets sizing of displayed images
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) { //defines 'dot' appearance
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}