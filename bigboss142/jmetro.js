$(window).resize(function () {

            $.each($('.metro-tile-page:not(.active)'), function () {
                $(this).css('right', ($(this).width() + 30) * -1);
            });
        });
        $(document).ready(function () {
            $.each($(".metro-tile-page"), function (index, tile) {
                $.each($(tile).children('img'), function (ind, img) {
                    $(tile).css('background-image', 'url(' + $(img).attr('src') + ')');
                    $(img).hide();
                });
            });
            $.each($('.metro-tile-page:not(.active)'), function () {
                $(this).css('right', ($(this).width() + 30) * -1);
            });

            $('.metro-tile').hover(function () {
                $(this).children('.active').clearQueue();
                $(this).children(':not(.active)').clearQueue();

                $(this).children('.active').animate({ 'right': $(this).width() + 30 }, 500, 'swing');
                $(this).children(':not(.active)').animate({ 'right': '5px' }, 500, 'swing');
            }, function () {

                $(this).children('.active').clearQueue();
                $(this).children(':not(.active)').clearQueue();

                $(this).children(':not(.active)').animate({ 'right': ($(this).width() + 10) * -1 }, 500, 'swing');
                $(this).children('.active').animate({ 'right': '5px' }, 500, 'swing');
            });
        });