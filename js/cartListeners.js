$('.order__buttons-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.self').click(() => {
    $('.order__delivery').css('display', 'none').prev().css('display', 'flex')

    $('.order__delivery').find('.order__input').attr('disabled', '')
})

$('.delivery').click(() => {
    $('.order__delivery').css('display', 'flex').prev().css('display', 'none')

    $('.order__delivery').find('.order__input').removeAttr('disabled')
})