$('.product__slider-info--buttons_click, .product__price-click:not(.product.unavailable .product__price-click), .preview__click').click(function () {
    $('#click').modal({
        fadeDuration: 200
    })
})

$('.header__address').click(function () {
    $('#map').modal({
        fadeDuration: 200
    })
})

$('.header__buttons-item.auth').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.order__item-none').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.login__form-forgot').click(() => {
    $('#reset').modal({
        fadeDuration: 200
    })
})

$('.login__form-cancel').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.reset__form').on('submit', function (event) {
    event.preventDefault()

    //ajax(Если удачно, то открываем модалку в саксессе (на вёрстке просто некст строчка от этой))
    //ajax(Если неудачно, то подсвечиваем в самом окне, не открывая)

    $('#success').modal({
        fadeDuration: 200
    })
})

$('.login__form-text--again').click(() => {
    $('#reset').modal({
        fadeDuration: 200
    })
})

$('.reg').click(() => {
    $('#reg').modal({
        fadeDuration: 200
    })
})

$('.entry').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

$('.default').on($.modal.BEFORE_OPEN, function () {
    $('html').css({
        overflow: 'hidden'
    })
})

$('.default').on($.modal.AFTER_CLOSE, function () {
    $('html').css({
        overflow: 'visible'
    })
})
$('.order__item-title--exist').click(() => {
    $('#login').modal({
        fadeDuration: 200
    })
})

if($(window).width() < 1000) {
    $('.menu__item:nth-child(3)').click(function () {
        $('#login').modal({
            fadeDuration: 200
        })
    })
}

$('.login__switch-button').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    let hiddenInput = $('.yur')

    if ($(this).text() === 'Физическое лицо') {
        $('.login__hidden').css({
            display: 'none'
        })

        hiddenInput.attr('disabled', '')
    }
    else {
        $('.login__hidden').css({
            display: 'flex'
        })
        hiddenInput.removeAttr('disabled')
    }
})

$('.big__product-analog, .product__price-analog').click(function () {
    $('#same').modal({
        fadeDuration: 200
    })
})

$('.product.unavailable .product__price-click').click(function () {
    $('#feedback').modal({
        fadeDuration: 200
    })
})