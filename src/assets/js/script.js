if ($('.nav').length) {
    const nav = $('.nav');
    const btnMenu = $(nav).find('button');

    $(btnMenu).on('click', function () {
        const menu = $(nav).find('.menu');

        $(menu).toggleClass('hidden');

        $(menu).css({
            'border-color': 'rgba(0,0,0, 0.2)',
            'border-top-width': '1px',
            'border-bottom-width': '1px',
        });
    });
}