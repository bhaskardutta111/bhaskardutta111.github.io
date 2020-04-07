if (window.matchMedia("(min-width: 901px) and (max-width: 1800px)").matches){
  var navbar = document.querySelector(".navbar");
  var options = document.querySelector(".nav-item");
  var sticky = document.querySelector(".sticky");
  window.onscroll = function() {
    if (window.scrollY > 250) {
      navbar.classList.add("sticky");
      options.style.color = "#000";
    } else {
      navbar.classList.remove("sticky");
      options.style.color = "#fff";
    }
  };
}

var tasksOnLoad = function() {
  //call function wow as soon as page loads
  new WOW().init();
};
