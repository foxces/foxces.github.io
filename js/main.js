$(document).ready(function(){
    // gallery slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '475px',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        dots: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '375px'
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '275px'
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '175px'
                }
            },
            {
                breakpoint: 770,
                settings: {
                    centerPadding: '75px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '50px'
                }
            }
        ]
    });

    $('.slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    // scrolling nav
    $('body').scrollspy({target: ".main-header", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#main-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });

    // detail view modal slider
    $('.detail-view-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.detail-view-slider').resize();
    })
});
