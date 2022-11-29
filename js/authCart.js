$('.yur').click(() => {
    $('.order__item:first-child').find('.order__item-inputs').css('display', 'none').find('.order__input').attr('disabled', '')
    $('.order__item-create').css('display', 'flex')
})

$('.fiz').click(() => {
    $('.order__item:first-child').find('.order__item-inputs').css('display', 'flex').find('.order__input').removeAttr('disabled')
    $('.order__item-create').css('display', 'none')
})

$('.product__tabs-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.org__select').click(function () {
    if ($('.hidden__org').css('display') === 'none') {
        $('.org__select').find('.order__select-icon').addClass('active')
        $(this).addClass('active')
    }
    else {
        $('.org__select').find('.order__select-icon').removeClass('active')
        $(this).removeClass('active')
    }
    $('.hidden__org').slideToggle(200)
})

$('.hidden__org-item').click(function () {
    $('.select__org').text($(this.firstElementChild).text() + ' / ' + $(this.firstElementChild).next().text() + ' / ' + $(this.lastElementChild).text())

    $('.hidden__org').slideUp(200)
    $('.org__select').removeClass('active').find('.order__select-icon').removeClass('active')
})

$('.new').click(() => {
    $('.create__org').css('display', 'none')
    $('.new__org').css('display', 'flex')
})

$('.save').click(() => {
    $('.create__org').css('display', 'block')
    $('.new__org').css('display', 'none')
})

$('.new__select').click(function() {
    $('.new__select-hidden').slideUp(200)
    $('.new__select').removeClass('active')

    $(this).next().slideToggle(200)
    $(this).toggleClass('active')
})

$('.new__select-hidden--item').click(function () {
    $(this).parent().slideUp(200)
    $(this).parent().prev().removeClass('active')
    $(this).parent().prev().find('p').text($(this).text())
})