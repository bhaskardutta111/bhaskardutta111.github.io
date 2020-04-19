
//change navbar bg on scroll, show scrollUpBtn
window.onscroll = function() {
    var fixedTop = document.querySelector('.fixed-top');
    var scrollTopBtn = document.querySelector(".scroll-up-button");
    var scrollTop = window.scrollY;
    // console.log(scrollTop);
      if (scrollTop > 50) {
          fixedTop.style.background = '#333';
          // fixedTop.style.margin = '0';
          fixedTop.style.transition = 'ease 0.5s';
          scrollTopBtn.style.display = "block";
          scrollTopBtn.addEventListener("click", scrollToTop);
      }
      else {
          scrollTopBtn.style.display = "none";
          fixedTop.style.opacity = '0.8';
          // fixedTop.style.margin = '15px 0 0 0';
          fixedTop.style.background = 'transparent';
      }
};   
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth"
    });
}

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
    var slides = document.getElementsByClassName("slidee");
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
        dots[x].className = dots[x].className.replace(" on", "");
    }
    dots[slideInd-1].className += " on";

}

//////////////////////////////////////////
projectSelect("all")
function projectSelect(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
  }
  
  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
    var btnContainer = document.getElementsByClassName("project-dashboard");
    var projectBtn = document.getElementsByClassName("projectBtn");
  for (var i = 0; i < projectBtn.length; i++) {
    projectBtn[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

