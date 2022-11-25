$(document).ready(function(){
    $('.filter__search').each(function () {
        $(this).on('keyup', function () {
            let value = $(this).val().toLowerCase()

            $(this).next().find($('.filter__check-box--label')).filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        })
    })
});