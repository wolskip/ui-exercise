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


// Toggle Sidebar
toggleSidebar = function () {
    var sidebarVisible = $('.sidebar').width() > 0;

    if (sidebarVisible) {
        $('.sidebar').width(0);
        $('.content').width('100vw');
        return;
    }
    $('.sidebar').width('30vw');
    $('.content').width('70vw');
};

// Toggle Sidebar test

toggleSidebarTest = function () {

    var sidebarVisible = $('.sidebar').width() > 0;

    $('#btnToggleSidebar').trigger('click', null);

    setTimeout(function () {
        if ((sidebarVisible && $('.sidebar').width() == 0)
            || (!sidebarVisible && $('.sidebar').width() > 0)) {
            console.info("TEST PASS: Toggle button toggles sidebar...");
        }
        else {
            console.error("TEST FAILED: Toggle button toggles sidebar...");
        }
        $('#btnToggleSidebar').trigger('click', null);
    }, 1000);

};
