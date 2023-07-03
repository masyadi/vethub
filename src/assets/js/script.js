if ($(".nav").length) {
    const nav = $(".nav");
    const btnMenu = $(nav).find("button");

    $(btnMenu).on("click", function () {
        const menu = $(nav).find(".menu");

        $(menu).toggleClass("hidden");

        $(menu).css({
            "border-color": "rgba(0,0,0, 0.2)",
            "border-top-width": "1px",
            "border-bottom-width": "1px",
        });
    });
}

// Navbar fixed
if ($(".navbar-fixed").length) {
    const navbarTopPosition = parseInt($(".navbar-fixed").offset().top);

    $(window).on("scroll", function () {
        const _element = $(".navbar-fixed");
        const windowTopPosition = $(window).scrollTop();

        if (windowTopPosition > navbarTopPosition) {
            $(_element).addClass("active");
        } else {
            $(_element).removeClass("active");
        }
    });
}

// Animation scroll
// $(window).on('scroll resize', function() {
$(window).on("scroll", function () {
    const windowHeight = $(window).height();
    const windowTopPosition = $(window).scrollTop();
    const windowBottomPosition = windowTopPosition + windowHeight;

    // get all class selector
    $(".fade-to-left, .fade-to-right, .fade-to-top, .fade-to-bottom").each(function () {
        const element = $(this);

        $.each(element, function () {
            const _element = $(this);
            const elementHeight = _element.outerHeight();
            const elementTopPosition = _element.offset().top;
            const elementBottomPosition = elementTopPosition + elementHeight;

            if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
                _element.addClass("active");
            } else {
                _element.removeClass("active");
            }
        });
    });
});

// initial trigger scroll
$(window).trigger("scroll");
