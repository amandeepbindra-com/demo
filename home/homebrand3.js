$(document).ready(function () {
    function initBrandSlider() {
        if ($('#brandslider1').hasClass('slick-initialized')) {
            $('#brandslider1').slick('unslick'); // Remove only if already initialized
        }

        let slidesToShow = $(window).width() >= 350 && $(window).width() <= 750 ? 3 : 9;

        $('#brandslider1').slick({
            slidesToShow: slidesToShow,
            autoplay: true,
            infinite: true, // Enables infinite looping
            speed: 1000, // Adjust speed if needed
            autoplaySpeed: 2000, // Delay between transitions
            arrows: false,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: 'linear'
        });
    }

    initBrandSlider();
    $(window).resize(function () {
        initBrandSlider();
    });
});
