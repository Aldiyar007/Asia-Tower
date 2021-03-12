window.onscroll = function showHeader() {
    var header = document.querySelector('header');

    if(window.pageYOffset > 80) {
        header.classList.add('active__scroll');
    } else {
        header.classList.remove('active__scroll');
    }

}