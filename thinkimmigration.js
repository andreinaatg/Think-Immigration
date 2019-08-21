

$(function() {
   $('a[href*=#]').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
   });
  });
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
 showSlides(slideIndex += n);
}
function currentSlide(n) {
 showSlides(slideIndex = n);
}
function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}






function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("main").style.marginLeft = "250px";


}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

}
