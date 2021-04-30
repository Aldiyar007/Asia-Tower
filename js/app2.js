const body = document.querySelector('body');
let headerBurger = document.querySelector('.header__burger');
let numOffClicks = 0;

function disable() {
    let pagePosition = window.scrollY;
    body.classList.add('lock');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}

function enable() {
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('lock');
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
}

headerBurger.addEventListener("click", function () {
    numOffClicks++;
    if (numOffClicks % 2 !== 0) {
        document.querySelector('.header__burger').classList.add('active');
        document.querySelector('.header__menu').classList.add('active');
        document.querySelector('header').classList.add('not-opacity');
        disable();
    } else {
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        document.querySelector('header').classList.remove('not-opacity');
        enable();
    };
});

"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        } else {
            alert('Введите обязательные поля!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

window.onscroll = function showHeader() {
    var header = document.querySelector('header');

    if (window.pageYOffset > 140) {
        header.classList.add('active__scroll');
    } else {
        header.classList.remove('active__scroll');
    }
}

function wpguruLink() {
    var istS = 'Источник:';
    var copyR = '© Asia-Tower.kz';
    var body_element = document.getElementsByTagName('body')[0];
    var choose = window.getSelection();
    var myLink = document.location.href;
    var authorLink = "<br /><br />" + istS + ' ' + "<a href='" + myLink + "'>" + myLink + "</a><br />" + copyR;
    var copytext = choose + authorLink;
    var addDiv = document.createElement('div');
    addDiv.style.position = 'absolute';
    addDiv.style.left = '-99999px';
    body_element.appendChild(addDiv);
    addDiv.innerHTML = copytext;
    choose.selectAllChildren(addDiv);
    window.setTimeout(function () {
        body_element.removeChild(addDiv);
    }, 0);
}
document.oncopy = wpguruLink;