$(function() {
    $('#features-carousel').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [260, 300],
        // autoPlay: true,
        interval: 3000
    });
    $('#simpleImg').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [260, 320]
    });
    $('#team-showcase').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [300, 360]
    });
    $('#navtopbox').utilCarousel({
        navigation: true,
        navigationText: ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
        breakPoints: [
            [1900, 5],
            [1200, 4],
            [992, 3],
            [768, 2],
            [480, 1]
        ]
    });
    $('#normal-imglist').utilCarousel({
        pagination: false,
        navigationText: ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
        navigation: true,
        rewind: false
    });
    $('#normal-imglist2').utilCarousel({
        pagination: false,
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [100, 130],
        navigationText: ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
        navigation: true,
        rewind: false
    });
    $('#logo-showcase').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [200, 210]
    });
    $('#logo-showcase-gray').utilCarousel({
        showItems: 5,
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [200, 210],
        interval: 3000,
        autoPlay: true,
        pagination: false
    });
    $('#testimonial').utilCarousel({
        showItems: 1,
        breakPoints: [
            [1920, 1]
        ],
        autoPlay: true
    });
    $('#fullwidth').utilCarousel({
        breakPoints: [
            [600, 1],
            [900, 2],
            [1200, 3],
            [1500, 4],
            [1800, 5]
        ],
        mouseWheel: true,
        rewind: false
    });
    $('#portfolio').utilCarousel({
        breakPosints: [
            [1200, 4],
            [992, 3],
            [768, 2],
            [480, 1]
        ]
    })
});