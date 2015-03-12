$(document).ready(function() {

    // Variables
    var $nav            = $('.navbar'),
        $body           = $('body'),
        $window         = $(window),
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

        if(15 < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
            $body.addClass('has-docked-nav')
        }
        if(15 > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
            $body.removeClass('has-docked-nav')
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
