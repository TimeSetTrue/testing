const swiper = new Swiper('.reviews__wrapp_list', {
    slidesPerGroup:1,
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".reviews-arrow-next",
        prevEl: ".reviews-arrow-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

$(document).ready(function () {
    $('.faq__accord_item-head').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.faq__accord_item-head').not(this).removeClass('in').next().slideUp();
    });
    $('.header__flex_menu-mobile').click(function () {
        if($('.header__flex_menu-mobile').hasClass('active')) {
            removeClassMenu();
        } else {
            $('.header__flex_menu').show();
            $('.header__flex_menu-mobile').addClass('active');
            $('.overlay').addClass('active');
        }

    });
    $('.overlay').click(function () {
        removeClassMenu()
    })

    function removeClassMenu() {
        $('.header__flex_menu').hide();
        $('.header__flex_menu-mobile').removeClass('active');
        $('.overlay').removeClass('active');
    }




    let blocks = document.querySelectorAll('.animal');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition < windowHeight - 100) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});

