const orderDelivery = $('.order__delivery')

$('.order__buttons-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.company__field-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.send__buttons-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.self').click(() => {
    orderDelivery.css('display', 'none').prev().css('display', 'flex')
    orderDelivery.next().css('display', 'none')
})

$('.delivery').click(() => {
    orderDelivery.css('display', 'flex').prev().css('display', 'none')
    orderDelivery.next().css('display', 'none')
})

$('.courier').click(() => {
    orderDelivery.css('display', 'none').prev().css('display', 'none')
    orderDelivery.next().css('display', 'flex')
})

$(document).ready(function(){
    if($(window).width() < 1000) {
        $('.cart__order-check').html('Подтвердить')
    }

    $('.pointer__left-input').each(function () {
        $(this).on('keyup', function () {
            let value = $(this).val().toLowerCase()

            $(this).next().find($('.variable__lable')).filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        })
    })
});

$('.to_take').click(function () {
    $(this).parent().parent().parent().find('.del__address').css('display', 'none')
    $(this).parent().parent().next().css('display', 'flex')
})

$('.to_self').click(function () {
    $(this).parent().parent().parent().find('.del__address').css('display', 'flex')
    $(this).parent().parent().next().css('display', 'none')
})