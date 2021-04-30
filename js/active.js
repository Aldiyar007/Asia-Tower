window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.block').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header__menu').clientHeight < scrollDistance + 70) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('active-page')) {
                    el.classList.remove('active-page');
                }
            });

            document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active-page');
        }
    });
});
