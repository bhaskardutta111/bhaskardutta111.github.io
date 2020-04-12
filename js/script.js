
//change navbar bg on scroll
window.onscroll = function() {
    var fixedTop = document.querySelector('.fixed-top');
    var scrollTop = window.scrollY;
    if(scrollTop > 10 && scrollTop < 50){
        fixedTop.style.opacity = '0.8';
        fixedTop.style.margin = '0';
    } else if (scrollTop > 50) {
        fixedTop.style.background = '#333';
        fixedTop.style.margin = '0';
    }
    else {
        fixedTop.style.background = 'transparent';
    }
};   


/////////////////////////////////////////
var collapseBtn = document.getElementsByClassName("collapseBtn");

for (var i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener("click", function() {
    this.classList.toggle("show");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

/////////////////////////
var slideInd = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for (var z = 0; z < slides.length; z++) {
    slides[z].style.display = "none";
    }

    slideInd++;
    if (slideInd > slides.length) {
        slideInd = 1;
    }
    slides[slideInd - 1].style.display = "block";
    setTimeout(showSlides, 4000);

    for (var x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    dots[slideInd-1].className += " active";

}



// var counter = document.querySelectorAll(".counter-data")

// window.addEventListener("load", function() {
//     counter.forEach(function(x, y) {
	
//     var start = counter[y].getAttribute('data-count-start')
//     var end = counter[y].getAttribute('data-count-end')
//     var speed = counter[y].getAttribute('data-speed')

//     setInterval(function() {
//         start++;
//         if(start > end) {
//         return false;
//         }
//         counter[y].innerText = start;
//     }, speed)
// })}, false)
