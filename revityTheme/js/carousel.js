$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
        }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
        }]
    });
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
        }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        }
        }]
    });
});

