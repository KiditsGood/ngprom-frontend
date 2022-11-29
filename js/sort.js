$('.sort__current').click(function () {
    $('.sort__hidden').slideToggle(200)
    $(this).toggleClass('active')
})

$('.sort__hidden-input').click(function () {
    $('.sort__current').html($(this).text()).removeClass('active')
    $('.sort__hidden').slideUp(200)
})

