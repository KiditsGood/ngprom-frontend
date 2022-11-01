$(function() {
    $(window).on("scroll", function() {
        if($(window).width() > 999) {
            if($(window).scrollTop() > 50) {
                $(".header").addClass("hidden");
            } else {
                $(".header").removeClass("hidden");
            }
        }
        else {
            if($(window).scrollTop() > 50) {
                $('.mobile__header').addClass('hidden')
            } else {
                $('.mobile__header').removeClass('hidden')
            }
        }
    });
});