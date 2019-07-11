$(document).ready(function () {
    $('.quick-see').click(function (e) {
        e.stopPropagation();
        $('body').addClass('visible-item-overflow');
        $('.content-modal-wrap').addClass('visible-item');
        $('.modal-call').toggleClass('content-modal-display');
        $('.hidden-menu').removeClass('hidden-display');
    });
    $('.content-modal-wrap, .cross').click(function () {
        $('.content-modal-wrap').removeClass('visible-item');
        $('.content-modal-block').removeClass('content-modal-display');
        $('.hidden-menu').removeClass('hidden-display');
        $('body').removeClass('visible-item-overflow');
    });
    $('.content-modal-block').click(function (e) {
        e.stopPropagation();
    });
    $('.btn-menu-open').on('click', function (e) {
        $('body').toggleClass('visible-item-overflow');
        $('.content-modal-wrap').toggleClass('visible-item');
        $('.hidden-menu').addClass('hidden-display');
    });
    $('.btn-menu-close').on('click', function (e) {
        $('body').toggleClass('visible-item-overflow');
        $('.content-modal-wrap').toggleClass('visible-item');
        $('.hidden-menu').removeClass('hidden-display');
    });

    $(".menu-call").on("click", "a", function (event) {
        $('body').removeClass('visible-item-overflow');
        $('.content-modal-wrap').removeClass('visible-item');
        $('.hidden-menu').removeClass('hidden-display');

        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


});
