$(document).ready(function () {
    'use strict';
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
    });

// bottom-bar
    $('.bottom-bar .list li a').click(function (e) {
        e.preventDefault();
        $('.bottom-bar .list li a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 200
        }, 500);
    });
// sync bottom-bar with sections
    $(window).scroll(function () {
        $('.food-content').each(function () {
            
            if ($(window).scrollTop() > $(this).offset().top - 201) {
                var contentId = $(this).attr('id');
                $('.bottom-bar .list li a').removeClass('active');
                $('.bottom-bar .list li a[data-scroll="' + contentId + '"]').addClass('active');
            }
        });
    });

    

// Food Card
    $('.food-section .food-card').click(function (e) {
        $('#order').addClass('card-active');
    });
    $('#order .order-content .close').click(function (e) {
        e.stopPropagation();
        $('#order').removeClass('card-active');
    });


// Food Card
//    $('.food-section .food-card').click(function (e) {
//        $(this).children('.order').addClass('card-active');
//    });
//    $('.food-section .food-card .order .order-content .close').click(function (e) {
//        e.stopPropagation();
//        $('.food-section .food-card .order').removeClass('card-active');
//    });


});




