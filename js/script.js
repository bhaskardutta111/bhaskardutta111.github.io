
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

//////////////////////////////////////////
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
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
  function w3RemoveClass(element, name) {
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
    var btns = document.getElementsByClassName("projectBtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }