const viewButton = $('.view__item')
const changeField = $('.products__field-bottom')

viewButton.click(function () {
    let currClass = $(this).attr('data-view')
    $(this).addClass('active').siblings().removeClass('active')

    if (currClass === 'block') {
        changeField.removeClass('i_list list')
    } else if (currClass === 'i_list') {
        changeField.addClass(currClass).removeClass('block list')
    } else if (currClass === 'list') {
        changeField.addClass(currClass).removeClass('block i_list')
    }
})
