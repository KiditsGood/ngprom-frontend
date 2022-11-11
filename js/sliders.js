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
    },
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        580: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        }
    }
})

const serviceSlider = new Swiper('.service__bot', {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    navigation: {
        prevEl: '.service .product__slider-prev',
        nextEl: '.service .product__slider-next'
    },
    breakpoints: {
        360: {
            slidesPerView: 2
        },
        580: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 5
        }
    }
})

const brandsSlider = new Swiper('.brand__field', {
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    navigation: {
        prevEl: '.brands .product__slider-prev',
        nextEl: '.brands .product__slider-next'
    },
    breakpoints: {
        360: {
            slidesPerView: 3
        },
        580: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 5
        },
        1000: {
            slidesPerView: 6
        }
    }
})