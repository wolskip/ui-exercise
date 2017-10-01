/* test.js */

// Bind the resize function to recalculate the main content section
$(document).ready(function () {
    $(window).resize(function () {
        setContentHeight();
    }).resize();

    setContentHeight();
});

// Recalculate main content section
setContentHeight = function () {
    var height = $(this).height() - $('header').outerHeight() - $('.main-nav-outer').outerHeight() - $('footer').outerHeight();
    $(".main-section").css('max-height', height + 'px');
    $(".sidebar").height(height - height * 0.05);
};