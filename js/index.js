
new WOW().init();

//function for automatic slideshow
var slideInd = 0;

function autoSlideShow() {
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideInd++;
    if (slideInd > slides.length) {
        slideInd = 1;
    }
    slides[slideInd-1].style.display = 'block';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideOn", "");
    }
    dots[slideInd-1].className = dots[slideInd-1].className +  " slideOn";

    setTimeout(autoSlideShow, 3000); // Change image every 3 seconds
}

//////////////////////
function openEvent(monthName, elmnt, color) {

var eventName = document.getElementsByClassName("event-name");
    for (var i = 0; i < eventName.length ; i++) {
    eventName[i].style.display = "none";
    }
  
  var months = document.getElementsByClassName("months");
    for (i = 0; i < months.length; i++) {
      months[i].style.backgroundColor = "";
    }
  
    document.getElementById(monthName).style.display = "block";

    elmnt.style.backgroundColor = color;
}
  
document.getElementById("defaultOpen").click();
  
//////////////////////////  

function showMenu() {
    document.getElementById("nav").style.width = "100%";
  }
  
  function closeMenu() {
    document.getElementById("nav").style.width = "0%";
  }
////////////////////////

var mybutton = document.querySelector(".btn-scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//change background of navbar on scroll
var navbar = document.querySelector('.navbar');

window.onscroll = function(){
    // console.log(window.scrollY);
    if(window.scrollY > 277){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");

    }
};


autoSlideShow();
