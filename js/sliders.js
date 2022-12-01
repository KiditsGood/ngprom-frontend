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

    const beforeSlider = new Swiper('.before .product__slider-field', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            prevEl: '.before .product__slider-prev',
            nextEl: '.before .product__slider-next'
        }
    })

    const withSlider = new Swiper('.with .product__slider-field', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            prevEl: '.with .product__slider-prev',
            nextEl: '.with .product__slider-next'
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

const bigCardLeft = new Swiper('.product__card-images--left--field', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 12,
    navigation:{
        prevEl: '.product__card-prev',
        nextEl: '.product__card-next'
    }
})

const bigCardRight = new Swiper('.product__card-images--right', {
    thumbs: {
        swiper: bigCardLeft
    }
})

const analogModalSlider = new Swiper('#same .analog__slider-field', {
    loop: true,
    navigation: {
        prevEl: '#same .product__slider-prev',
        nextEl: '#same .product__slider-next'
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
            spaceBetween: 8
        },

        573:{
            slidesPerView: 3
        },

        1000: {
            spaceBetween: 20,
            slidesPerView: 3
        }
    }
})