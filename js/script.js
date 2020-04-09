var counter = document.querySelectorAll(".counter-data")

window.addEventListener("load", function() {
    counter.forEach(function(x, y) {
	
    var start = counter[y].getAttribute('data-count-start')
    var end = counter[y].getAttribute('data-count-end')
    var speed = counter[y].getAttribute('data-speed')

    setInterval(function() {
        start++;
        if(start > end) {
        return false;
        }
        counter[y].innerText = start;
    }, speed)
})}, false)


var collapseBtn = document.querySelector(".collapseBtn");

for (var i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector(".btnContent");
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var z = 0; z < slides.length; z++) {
    slides[z].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}