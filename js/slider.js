$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 2000,
        draggable: false,
        swipe: true,
        waitForAnumate: true,
        centerMode: false,
        easing: 'ease',
            responsive: [
                {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 2,
                        appendArrows: $('.slider-arrows')
                }
            },{
                breakpoint: 699,
                settings: {
                slidesToShow: 1,
                appendArrows: $('.slider-arrows')
            }
        }]
    });
});