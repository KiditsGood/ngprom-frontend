const viewButton = $('.view__item')
const changeField = $('.products__field-bottom')
const lineField = $('.products__field-line')

viewButton.click(function () {
    let currClass = $(this).attr('data-view')
    $(this).addClass('active').siblings().removeClass('active')

    if (currClass === 'block') {
        changeField.removeClass('i_list hidden')
        lineField.removeClass('active')
    } else if (currClass === 'i_list') {
        changeField.addClass(currClass).removeClass('block hidden')
        lineField.removeClass('active')
    } else if (currClass === 'list') {
        changeField.addClass('hidden')
        lineField.addClass('active')
    }
})
