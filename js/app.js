jQuery( document ).ready( function( $ ) {

    $('.header.with-sticky').stickybits({useStickyClasses: true});


    $('.nav__sub-nav__link').on('click', function(e) {

        e.preventDefault();

        var clicked = $(this);

        var parentMenu = clicked.parent().parent().parent();
        var relativeSubMenu = clicked.parent().next();

        relativeSubMenu.addClass('active');
        parentMenu.addClass('pull-back');

    });


    $('.nav__item__link').on('click', function() {

        $('.header__navigation__wrapper').collapse('hide');

        var mainNavigation = $('.nav__navigation');
        var subNav = $('.nav__sub-nav');

        mainNavigation.removeClass('pull-back');
        subNav.removeClass('active');
    });




    $('.nav__sub-nav__back-link').on('click', function(e) {

        e.preventDefault();

        var clicked = $(this);

        var parentMenu = clicked.parent().parent().parent().parent();
        var relativeSubMenu = clicked.parent().parent();

        relativeSubMenu.removeClass('active');
        parentMenu.removeClass('pull-back');
    });



    $('#mainNavigation').on('hide.bs.collapse', function () {

        var mainNavigation = $('.nav__navigation');
        var subNav = $('.nav__sub-nav');

        mainNavigation.removeClass('pull-back');
        subNav.removeClass('active');
    })


    $(document).on('click', '[data-toggle="lightbox"]', function(event) {

        event.preventDefault();
        $(this).ekkoLightbox();


    });


    $('.partner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        arrows: false,
        centerMode: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });


    $('.modal').on('hidden.bs.modal', function (e) {

        $('.modal-content iframe').attr('src','');
    });

    $('.modal').on('show.bs.modal', function (e) {

        var clicked = $(this);
        var clickedModal = clicked.find('.modal-content');
        var clickedVideoLink = clickedModal.attr('data-video-link');

        $('.modal-content iframe').attr('src', clickedVideoLink);
    });

});