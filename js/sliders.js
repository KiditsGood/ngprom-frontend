const slider = new Swiper('.slider__field', {
    navigation: {
        prevEl: '.slider__prev',
        nextEl: '.slider__next'
    },
    pagination: {
        el: ".slider__pagination",
        clickable: true
    }
})

const popularSlider = new Swiper('.popular_products .product__slider-field', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl: '.popular_products .product__slider-prev',
        nextEl: '.popular_products .product__slider-next'
    }
})

const newSlider = new Swiper('.new .product__slider-field', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl: '.new .product__slider-prev',
        nextEl: '.new .product__slider-next'
    }
})