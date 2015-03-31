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
        if(window.innerHeight/5 <  top && !$navbar.hasClass('shrink')) {
            $navbar.addClass('shrink');
        }
        if(window.innerHeight/5 >  top && $navbar.hasClass('shrink')) {
            $navbar.removeClass('shrink');
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
                        $('#navbar-orchard').addClass('navbar-current');
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


    $('.feature-button').on('click', function () {
        $('.feature-button').removeClass('selected');
        $('.feature').removeClass('selected');
        $(this).addClass('selected');
        $("."+$(this).data('shot')).addClass('selected');
    });

    // gfs.init();

});
