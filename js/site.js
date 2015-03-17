$(document).ready(function() {

    // Variables
    var $nav            = $('.navbar'),
        $body           = $('body'),
        $window         = $(window),
        $navbar         = $('#navbar'),
        navOffsetTop    = $nav.offset().top,
        $document       = $(document);

    // get everything setup on page load
    init();

    // initialization function
    // sets up resize event listener and mouse events
    function init() {

        $window.on('scroll', recalculateNavBar);
        $window.on('resize', reRender);
        $('a[href^="#"]').on('click', smoothScroll);

    }

    // nav managing function, fired on scroll
    function recalculateNavBar() {

        var top = $window.scrollTop();
        $('.navbar-link').removeClass('navbar-current');

        if(15 < top && !$body.hasClass('has-docked-nav')) {
            $body.addClass('has-docked-nav');
            $('#logo').attr('src','images/grapefruit-logo.svg');
            $('#menu-button-image').attr('src','images/menu-black.png');

        }
        if(window.innerHeight <  top && !$navbar.hasClass('shrink')) {
            $navbar.addClass('shrink');
        }
        if(window.innerHeight >  top && $navbar.hasClass('shrink')) {
            $navbar.removeClass('shrink');
        }
        if(15 > top && $body.hasClass('has-docked-nav')) {
            $body.removeClass('has-docked-nav')
            $navbar.removeClass('shrink')
            $('#logo').attr('src','images/grapefruit-logo-white.svg');
            $('#menu-button-image').attr('src','images/menu-white.png');
        }
        if(top > $('#instructors').offset().top) {
            $('#instructors-image').addClass('show');
        }
        if(top > $('#students').offset().top) {
            $('#students-image').addClass('show');
        }
        if(top > $('#why-grapefruit').offset().top - window.innerHeight/2) {
            if(top > $('#instructors').offset().top - window.innerHeight/2) {
                if(top > $('#orchard').offset().top - window.innerHeight/2) {
                    if(top > $('#sponsors').offset().top - window.innerHeight/2) {

                    } else {
                        $('#navbar-orchard').addClass('navbar-current');
                    }
                } else {
                    $('#navbar-features').addClass('navbar-current');
                }
            } else {
                $('#navbar-why').addClass('navbar-current');
            }
        }



    }

    // smooth scroll animation for navigating to anchors
    function smoothScroll(e) {
        console.log('smoothscrool');
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash;
        menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-40
        }, 0, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", recalculateNavBar);
        });

    }

    $("#button").click(function() {

        $('html, body').animate({
            scrollTop: $("#elementtoScrollToID").offset().top
        }, 2000);

    });

    // recalculates offset and then recalculates nav bar
    function reRender() {

        $body.removeClass('has-docked-nav');
        navOffsetTop = $nav.offset().top;
        recalculateNavBar();

    }


    // toggle mobile menu overlay event
    $('.menu-button').on('click',function(e) {

        $('#menu-mobile').toggleClass('open');

    });

    $('.mobilenav-link').on('click',function(e) {

        $('#menu-mobile').toggleClass('open');

    });

});
