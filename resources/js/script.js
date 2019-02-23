$(document).ready(() => {

    // Test code
    // $('h1').click((event) => {

    //     $(event.target).css("background-color", "red");

    //     console.log(this);
    //     console.log("Clicked")
    // });


    // var waypoints = $('#handler-first').waypoint(function (direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //         offset: '25%'
    //     })

    $('.js--section-features').waypoint((direction) => {
        if (direction == "down") {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    }, {
            offset: "60px"
        });

    $(".js--scroll-to-plans").click(() => {
        $("html, body").animate({
            scrollTop: $(".js--section-plans").offset().top,
        }, 1000)
    });

    $(".js--scroll-to-start").click(() => {
        $("html, body").animate({
            scrollTop: $(".js--section-features").offset().top,
        }, 1000)
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


        /* Animations */
        $(".js--wp-1").waypoint((dir) => {
            $(".js--wp-1").addClass("animated fadeIn");
        }, {
            offset: "50%"
        });

        $(".js--wp-2").waypoint((dir) => {
            $(".js--wp-2").addClass("animated fadeInUp");
        }, {
            offset: "50%"
        });

        $(".js--wp-3").waypoint((dir) => {
            $(".js--wp-3").addClass("animated fadeIn");
        }, {
            offset: "50%"
        });

        $(".js--wp-4").waypoint((dir) => {
            $(".js--wp-4").addClass("animated pulse");
        }, {
            offset: "50%"
        });

        // mobile nav 
        $(".js--nav-icon").click(() => {
            let nav = $(".main-nav");

            nav.slideToggle(200);
            
        });

});