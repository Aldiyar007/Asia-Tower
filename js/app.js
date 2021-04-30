let slider = $('.slider');
let textLloading = $('.text__loading');
let button = $('.back-to-top');

if (slider.slick) {
    textLloading.text('');
}

$('.user-input').focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass('focus');
    }
});

function backToTop(a) {
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 200) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    a.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });

}

backToTop(button);

$('[data-scroll]').on("click", function (e) {
    e.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;

    $('html, body').animate({
        scrollTop: elementOffset - 70
    }, 700);

});

// smoothScroll('.header__link_1', '#main')
// smoothScroll('.header__link_2', '#arenda')
// smoothScroll('.header__link_3', '#about')
// smoothScroll('.header__link_4', '#contact')

// $(document).ready(function () {
//     $('.slider').slick({
//         arrows: true,
//         dots: true,
//         slidesToShow: 3,
//         autoplay: true,
//         adaptiveHeight: true,
//         slidesToScroll: 3,
//         autoplaySpeed: 2000,
//         draggable: false,
//         swipe: true,
//         speed: 800,
//         waitForAnimate: true,
//         responsive: [
//             {
//                 breakpoint: 1706,
//                 settings: {
//                     appendArrows: $('.slider-arrows')
//                 }
//             },
//             {
//                 breakpoint: 1020,
//                 settings: {
//                     arrows: true,
//                     slidesToScroll: 2,
//                     appendArrows: $('.slider-arrows'),
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 662,
//                 settings: {
//                     slidesToScroll: 1,
//                     slidesToShow: 1
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     slidesToScroll: 1,
//                     slidesToShow: 1,
//                     appendArrows: $('.slider-arrows')
//                 }
//             }
//         ]
//     });
// });