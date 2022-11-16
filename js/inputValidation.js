$('.preview__buttons-col--button.minus').click(function () {
    let counter = parseInt($(this).next().val())

    if (counter <= 1) {
        $(this).next().val(1)
    }
    else {
        $(this).next().val(counter - 1)
    }
})

$('.preview__buttons-col--button.plus').click(function () {
    let counter = parseInt($(this).prev().val())

    if (counter >= 999) {
        $(this).prev().val(999)
    }
    else {
        $(this).prev().val(counter + 1)
    }
})

$(document).ready(function() {
    $(".preview__buttons-col--input").on('blur', function () {
        if ($(this).val() === '' || $(this).val() == 0){
            $(this).val(1)
        }
    })

    $(".preview__buttons-col--input").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {

            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});