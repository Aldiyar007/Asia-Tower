function headerMenu() {
    let slider = $('#slider');

    $(window).on('scroll', () => {
        if($(this).scrollTop() >= slider.offset().top) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
}

headerMenu();