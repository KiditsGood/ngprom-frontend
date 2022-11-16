$('.product__field-tabs--item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    let id = $(this).attr('data-tab'),
        content = $('.product__field-info > *[data-tab="'+ id +'"]')

    $('.product__field-info > *.active').removeClass('active')
    content.addClass('active')
})