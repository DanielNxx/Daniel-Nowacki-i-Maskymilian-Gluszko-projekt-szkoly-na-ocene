let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}else if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

window.onload = function()
{
    showSlides(slideIndex);
}
function zmiana(n){
    zmianan(n);
}
function zmianan(k){
    if (k == 0) {
        okienko1.style.visiblity = "visible";
        okienko2.style.visiblity = "hidden";
    }if (k == 1){
        okienko1.style.visiblity = "hidden";
        okienko2.style.visiblity = "visible";
    }
}