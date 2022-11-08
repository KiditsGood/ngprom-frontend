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

if ($(window).width() > 999) {
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
}


const photoSlider = new Swiper('.photo__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl: '.photo .product__slider-prev',
        nextEl: '.photo .product__slider-next'
    }
})

const serviceSlider = new Swiper('.service__bot', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    navigation: {
        prevEl: '.service .product__slider-prev',
        nextEl: '.service .product__slider-next'
    }
})

const brandsSlider = new Swiper('.brand__field', {
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    navigation: {
        prevEl: '.brands .product__slider-prev',
        nextEl: '.brands .product__slider-next'
    }
})