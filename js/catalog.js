$('.header__main-cat').click(function () {
    $(this).toggleClass('active')
    $('.catalog').toggleClass('active').css('top', 'unset')
    $('body').toggleClass('hidden')

    if ($('.header').hasClass('hidden')) {
        $('.catalog').css('top', $('.header__bottom').height() + 5)
    }
    else {
        $('.catalog').css('top', $('.header').height())
    }
})

$('button.catalog__item').click(function () {
    if ($(window).width() > 999){
        $(this).addClass('active').siblings().removeClass('active')
    }
    let id = $(this).attr('data-tab'),
        content = $('.catalog--peace[data-tab="'+ id +'"]')

    $('.catalog--peace.active').removeClass('active')
    content.addClass('active')

    if ($(window).width() < 1000) {
        $('.catalog--left').addClass('check')
        $('.catalog--right').addClass('check')
    }
})
