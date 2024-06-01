$(document).ready(function() {
    $(".tabs__nav li a").click(function() {
        $('.tabs__nav li').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab__content').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    $(".btn--green").click(function() {
        var ids = $(this).attr("data-modal");
        $(ids).addClass('show');
    });
    $(".close").click(function() {
        $('.modal').removeClass('show');
    });
});


$(document).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        items: 3,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            360: {
                items: 1,
                nav: false,
                loop: false
            },
            1024: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    });

    $('.slider1').owlCarousel({
        loop: true,
        items: 4,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            360: {
                items: 1,
                nav: true,
                dots: false,
                loop: false
            },
            768: {
                items: 2,
                nav: true,
                dots: false,
                loop: false
            },
            1024: {
                items: 4,
                nav: true,
                dots: false,
                loop: false
            }

        }
    });

});



new WOW({
    offset: 100,
    mobile: false,

}).init();