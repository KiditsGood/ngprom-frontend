$('.product__slider-info--buttons_buy').click(function () {
    let buyButton = $(this)
    buyButton.text('В корзине').addClass('active')

    setTimeout(function () {
        buyButton.text('В корзину').removeClass('active')
    }, 2000)
})