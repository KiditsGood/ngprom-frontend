$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $('.up').html('<button class="up__outer"><i class="up__icon icon-right"></i></button>')
            $('.up__outer').click(() => {
                $('html, body').animate({scrollTop: 0}, 600);
            })
        } else {
            $('.up__outer').remove()
        }
    });
});