$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $('.up').html('<button class="up__outer"><i class="up__icon icon-left-lg"></i></button>')
            $('.up__outer').click(() => {
                $('html, body').animate({scrollTop: 0}, 300);
            })
        } else {
            $('.up__outer').remove()
        }
    });
});