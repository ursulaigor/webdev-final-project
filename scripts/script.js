var slideIndex = 0;
var time=0;

showSlides();

function showSlides(prev) {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       }
       if (prev){
              slideIndex--;
       }else{
              slideIndex++;
       }
       if(slideIndex > slides.length) {slideIndex = 1}
       if(slideIndex < 1) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       clearTimeout(time);
       time=setTimeout(showSlides,3000);
}