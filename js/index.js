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

    setTimeout(autoSlideShow, 3000); // Change image every 2 seconds
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





autoSlideShow();


