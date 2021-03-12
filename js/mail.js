$(document).ready(() => {
    $('.form-box').submit(() => {
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize()    
        }).done(() =>{
            alert("Ваше сообщение отправлено!");
            setTimeout(() => {
                th.trigger("reset");
            }, 1000);
        })
    })
})