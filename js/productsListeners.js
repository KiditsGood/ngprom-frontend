$('.product__slider-info--buttons_buy, .preview__buttons-cart').click(function () {
    let buyButton = $(this)
    buyButton.text('В корзине').addClass('active')

    setTimeout(function () {
        buyButton.text('В корзину').removeClass('active')
    }, 2000)
})