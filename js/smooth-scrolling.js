$(document).ready(function() {
    $('#smooth-scrolling').on("click", function (e) {
        e.preventDefault();
        var header = $('#header-first').offset().top;
        $('html, body').animate({
            scrollTop: header
        }, 1000);
    });
});

$(document).ready(function() {
    $('#tenants').on("click", function (e) {
        e.preventDefault();
        var slider = $('#slider').offset().top;
        $('html, body').animate({
            scrollTop: slider
        }, 1000);
    });
});

