$('.product__slider-info--buttons_buy, .preview__buttons-cart').click(function () {
    let buyButton = $(this)
    buyButton.text('В корзине').addClass('active')

    setTimeout(function () {
        buyButton.text('В корзину').removeClass('active')
    }, 2000)
})

$('.sort__mobile').click(function () {
    $('.products__filter').addClass('active')
    $('body').addClass('hidden')
    $('.products__filter-top').prepend(`<i class="mobile__back filter__back icon-left-lg" onclick="filterClose()"></i>`)
})

function filterClose() {
    $('.products__filter').removeClass('active')
    $('body').removeClass('hidden')
    $('.filter__back').remove()
}