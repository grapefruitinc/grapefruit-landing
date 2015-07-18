$(document).ready(function() {

    // Variables
    var $nav            = $('.navbar'),
        $body           = $('body'),
        $window         = $(window),
        $navbar         = $('#navbar'),
        navOffsetTop    = $nav.offset().top,
        $document       = $(document),
        pathname        = window.location.pathname,
        $root           = $('html, body');

    // get everything setup on page load
    init();

    // initialization function
    // sets up resize event listener and mouse events
    function init() {

        $window.on('scroll', recalculateNavBar);
        $window.on('resize', reRender);
        $('a').on('click', smoothScroll);

    }

    // nav managing function, fired on scroll
    function recalculateNavBar() {

        var top = $window.scrollTop();
        $('.navbar-link').removeClass('navbar-current');

        if(15 < top && !$navbar.hasClass('docked')) {
            $navbar.addClass('docked');
        }
        if(15 > top && $navbar.hasClass('docked')) {
            $navbar.removeClass('docked');
        }
        if(window.innerHeight/5 <  top && !$navbar.hasClass('shrunk')) {
            $navbar.addClass('shrunk');
        }
        if(window.innerHeight/5 >  top && $navbar.hasClass('shrunk')) {
            $navbar.removeClass('shrunk');
        }

    }

    // smooth scroll animation for navigating to anchors
    function smoothScroll(e) {
        var href = $.attr(this, 'href');
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
        return false;

    }
    
    // recalculates offset and then recalculates nav bar
    function reRender() {

        navOffsetTop = $nav.offset().top;
        recalculateNavBar();

    }


    // toggle mobile menu overlay event
    $('.menu-button').on('click',function(e) {

        $('#menu-mobile').toggleClass('open');
        $('body').toggleClass('disable-scroll');

    });

    $('.mobilenav-link').on('click',function(e) {

        $('#menu-mobile').toggleClass('open');
        $('body').toggleClass('disable-scroll');

    });


    // gfs.init();

});
