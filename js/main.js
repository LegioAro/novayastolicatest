$(document).ready(function () {

    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //Выпадающие списки
    //Закрыть select по нажатию на область
    $(document).mouseup(function (e) {
        var container = $(".select");
        if (container.has(e.target).length === 0) {
            container.children('.select__list-wrapper,.select__list,.select__result').removeClass('active');
        }
    });
    // расскрытие select 
    $('.select__result').click(function () {
        if ($(this).hasClass('active')) {
            $('.select__list-wrapper,.select__list,.select__result').removeClass('active');
        } else {
            $('.select__list-wrapper,.select__list,.select__result').removeClass('active');
            $(this).closest('.select').children('.select__list-wrapper,.select__list,.select__result').addClass('active');
        }
    })
    //работа радиокнопки
    $('.select input[type="radio"]').on("change", function () {
        let inputValue = $(this).closest('.select').find('.select__input:checked').next().text();
        $(this).closest('.select').children('.select__result').children('p').text(inputValue);
        $(this).closest('.select').children('.select__list,.select__result,.select__list-wrapper').removeClass('active');
    });

    $('.search__form-wrapper').submit(function () {
        $('.defalt').prop("checked", true);
    })

    //работа checkbox
    $('.select input[type="checkbox"]').on("change", function () {

        if ($(this).closest('.select').find('.defalt').is(':checked')) {
            $(this).closest('.select').find('.select__input:checked').not('.defalt').prop('checked', false);
        } else {
            $(this).closest('.select').find('.select__input').not('.defalt').click(function () {
                $(this).closest('.select').find('.defalt').prop('checked', false);
            });
        }
        if ($(this).closest('.select').find('.select__input:checked').length < 1) {
            $(this).prop('checked', true);
        }


        let inputValue = $(this).closest('.select').find('.select__input:checked').next();
        let result = [];
        let a = [];
        for (let i = 0; i < inputValue.length; i++) {
            result.push(inputValue[i]);
        }
        for (let j = 0; j < result.length; j++) {
            let b = result[j];
            a.push(b.innerText);
        }
        $(this).closest('.select').children('.select__result').children('p').text(a);
    });


    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //slider


    // $('.video__items').slick({
    //     slidesToShow: 3,
    //     appendArrows: $('.video__arrow'),
    //     responsive: [
    //         {
    //             breakpoint: 951,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 601,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // });
    let sliderVideo = new Swiper(".video__items", {
        spaceBetween: 0,
        slidesPerView: 3,
    });

    // $('.event__items').slick({
    //     slidesToShow: 4,
    //     appendArrows: $('.event__arrow'),
    //     responsive: [
    //         {
    //             breakpoint: 1201,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         }, {
    //             breakpoint: 901,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         }, {
    //             breakpoint: 601,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // });

    let sliderEvent = new Swiper(".event__items", {
        spaceBetween: 0,
        slidesPerView: 4,
    });

    let sliderAnnouncementBig = new Swiper(".announcement__slider-big", {
        spaceBetween: 20,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: {
                el: '.announcement__slider-list',
                direction: "vertical",
                slidesPerView: 4,
                spaceBetween: 20,
                breakpoints: {
                    // when window width is >= 320px
                    850: {
                        slidesPerView: 4,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 20,

                    },
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                },
            }
        },
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //перемещение


    function socialAppend() {
        if ($(window).width() <= 950) {
            $('.footer__social').prepend($('.footer__logo-text'));
        } else {
            $('.footer__logo-block').append($('.footer__logo-text'));
        }
    }
    // if ($(window).width() <= 370) {
    //     $('.home__other-item-list-item-info').prepend($(this).children('.rubric__title'));

    // }
    socialAppend();



    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //tab new
    selectAppend();
    $('.home__other-item-links,.home__other-item-select-list').on('click', '.home__other-item-link:not(.home__other-item-link-active)', function () {
        $(this)
            .addClass('home__other-item-link-active').siblings().removeClass('home__other-item-link-active')
            .closest('.home__other-item-new').find('.home__other-item-list').removeClass('home__other-item-list-active').eq($(this).index()).addClass('home__other-item-list-active');
        let selectValue = $(this).text();
        $(this).closest('.home__other-item-new').find('.home__other-item-select-result p').text(selectValue);
    });

    $('.home__other-item-select-result').click(function () {
        $(this).siblings('.home__other-item-select-list').toggleClass('home__other-item-select-list-active');
    })

    $('.home__other-item-select-list .home__other-item-link').click(function () {
        console.log('123')
        $(this).closest('.home__other-item-select-list').removeClass('home__other-item-select-list-active');
    })

    $(document).mouseup(function (e) {
        var container = $(".home__other-item-select");
        if (container.has(e.target).length === 0) {
            container.children('.home__other-item-select-list').removeClass('home__other-item-select-list-active');
        }
    });

    function selectAppend() {
        if ($(window).width() <= 450) {
            $('.home__other-item-select-list').prepend($('.home__other-item-links .home__other-item-link'));
        } else {
            $('.home__other-item-links').prepend($('.home__other-item-select-list .home__other-item-link'));
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //burger

    $('.burger__btn,.burger__close').click(function () {
        $('.burger').toggleClass('burger__active');
        $('body').toggleClass('lock');
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    //header-search    

    $('.header__search-hide span,.header__search-btn p ').click(function () {
        $('.header__search-hide-input').addClass('header__search-hide-input-active');
        $('.header__search-hide').addClass('header__search-hide-active');
        $('.header .select').addClass('select__hide');
        $('.header__social').addClass('header__social-hide');
    })

    $('.header__search-btn span').click(function () {
        $('.header__search-hide-input').removeClass('header__search-hide-input-active');
        $('.header__search-hide').removeClass('header__search-hide-active');
        $('.header .select').removeClass('select__hide');
        $('.header__social').removeClass('header__social-hide');
    })

    if ($(window).width() <= 700) {
        $('.header__search-hide span,.header__search-btn p ').click(function () {
            $(this).closest('.header__item').addClass('header__item-active');
            $('.burger__btn').addClass('burger__btn-hide');
            $('.header__logo').addClass('header__logo-hide');
            $('.header__search').addClass('header__search-active');


        })
        $('.header__search-btn span').click(function () {
            $(this).closest('.header__item').removeClass('header__item-active');
            $('.burger__btn').removeClass('burger__btn-hide');
            $('.header__logo').removeClass('header__logo-hide');
            $('.header__search').removeClass('header__search-active');

        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    //copy-link


    $('.copy-link__text').click(function () {
        var $text_copy = $(this);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($text_copy.text()).select();
        document.execCommand("copy");
        $temp.remove();
        $('.copy-link__alert').fadeIn(400);
        setTimeout(function () { $('.copy-link__alert').fadeOut(400); }, 5000);
    });



    $(window).resize(function () {
        socialAppend();
        selectAppend();

    })

})