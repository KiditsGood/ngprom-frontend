$('.fiz').click(() => {
    $('.order__yur').css('display', 'none').find('.order__input').attr('disabled', '')
    $('#ip').attr('checked', '')
    $('#org').removeAttr('checked')
    $('.order__yur .order__item-inputs--item:nth-child(3)').css('display', 'none')
})

$('.yur').click(() => {
    $('.order__yur').css('display', 'flex').find('.order__input').removeAttr('disabled')
    $('.order__yur .order__item-inputs--item:nth-child(3) > input').attr('disabled', '')
})

$('#ip').click(() => {
    $('.order__yur .order__item-inputs--item:nth-child(3)').css('display', 'none')
    $('.order__yur .order__item-inputs--item:nth-child(3) > input').attr('disabled', '')
})

$('#org').click(() => {
    $('.order__yur .order__item-inputs--item:nth-child(3)').css('display', 'flex')
    $('.order__yur .order__item-inputs--item:nth-child(3) > input').removeAttr('disabled')
})


$('.order__yur-radio--item label').click(function () {
    $('.order__yur-radio--item input').removeAttr('checked')
    $(this).prev().attr('checked', '')
})

$('.product__tabs-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})