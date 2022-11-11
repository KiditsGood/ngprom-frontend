$('.header__mobile-burger').click(function () {
    burgerHandler()
})

$('.menu__item:first-child').click(function () {
    if($(this).hasClass('active')){
        mobileCatalog()
        $('.header__logo, .header__mobile-phone, .header__mobile-burger').remove()
        $('body').addClass('hidden')
    }
    else {
        $('.catalog').removeClass('active')
        $('.mobile__back, .header__main-search, .mobile__phone').remove()
        $('.header__bottom').append(`
            <a href="index.html" class="header__logo"><img src="img/logo.svg" alt="" class="header__logo-image"></a>
            <a href="tel: +7 369 456 78 98" class="header__mobile-phone">+7 369 456 78 98</a>
            <div class="header__mobile-burger" onclick="burgerHandler()">
                <span></span>
            </div>
        `)

        $('body').removeClass('hidden')
    }
})

$(document).ready(function () {
    if ($(window).width() < 1000) {
        $('.header .header__nav').append(`
        <div class="footer__socials">
\t\t\t\t<a href="" class="footer__socials-link">
\t\t\t\t\t<i class="footer__socials-link--icon icon-insta"></i>
\t\t\t\t</a>
\t\t\t\t<a href="" class="footer__socials-link">
\t\t\t\t\t<i class="footer__socials-link--icon icon-telegram-svgrepo-com-1"></i>
\t\t\t\t</a>
\t\t\t\t<a href="" class="footer__socials-link">
\t\t\t\t\t<i class="footer__socials-link--icon icon-facebook"></i>
\t\t\t\t</a>
\t\t\t\t<a href="" class="footer__socials-link">
\t\t\t\t\t<i class="footer__socials-link--icon icon-insta"></i>
\t\t\t\t</a>
\t\t\t</div>
    `)
    }
})

function mobileCatalog() {
    $('.catalog').addClass('active')

    $('.header .header__nav').slideUp(200)
    $('.header__mobile-burger').removeClass('open')
    $('.header__main-cat, .header__mobile-burger').remove()
    $('.header__bottom').append(`
        <i class="mobile__back icon-left-lg" onclick="backHandler()"></i>
        <div class="header__main-search">
            <input type="text" class="header__main-search--input" placeholder="Поиск">
        </div>
        <i class="mobile__phone icon-phone" onclick="location.href='tel: +7 369 456 78 98'"></i>
    `)
}

function backHandler() {
    if ($('.catalog--left').hasClass('check')) {
        $('.catalog--left').removeClass('check')
        $('.catalog--right').removeClass('check')
    }
    else {
        $('.catalog').removeClass('active')
        $('.mobile__back, .header__main-search, .mobile__phone').remove()
        $('.header__bottom').append(`
            <a href="index.html" class="header__logo"><img src="img/logo.svg" alt="" class="header__logo-image"></a>
            <a href="tel: +7 369 456 78 98" class="header__mobile-phone">+7 369 456 78 98</a>
            <div class="header__mobile-burger" onclick="burgerHandler()">
                <span></span>
            </div>
        `)

        $('body').removeClass('hidden')
    }
}

function burgerHandler() {
    $('.header__mobile-burger').toggleClass('open')

    if ($('.header__mobile-burger').hasClass('open')){
        $('body').addClass('hidden')

        $('.header__bottom').prepend(`
            <button onclick="mobileCatalog()" class="header__main-cat">Каталог товаров</button>
        `)
        $('.header__logo, .header__mobile-phone ').remove()
    }
    else {
        $('body').removeClass('hidden')

        $('.header__main-cat').remove()
        $('.header__bottom').prepend(`
            <a href="index.html" class="header__logo"><img src="img/logo.svg" alt="" class="header__logo-image"></a>
            <a href="tel: +7 369 456 78 98" class="header__mobile-phone">+7 369 456 78 98</a>
        `)
    }

    $('.header .header__nav').slideToggle(200)
}