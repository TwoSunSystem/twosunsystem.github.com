/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

$(function () {
    /* ========================================================================= */
    /*  Menu item highlighting
    /* ========================================================================= */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery("#navigation").css("background-color", "rgba(0, 0, 0, 0.85)")
            jQuery("#navigation").addClass("animated-nav")
        } else {
            jQuery("#navigation").css("background-color", "transparent")
            jQuery("#navigation").removeClass("animated-nav")
        }
    })

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    })

    // Slider Height
    var slideHeight = $(window).height()
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height', slideHeight)

    $(window).resize(function () {
        'use strict',
            $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height', slideHeight)
    })

    // portfolio filtering

    $("#projects").mixItUp()

    //fancybox

    $(".fancybox").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 650,

        closeEffect: 'elastic',
        closeSpeed: 550,
    })


    /* ========================================================================= */
    /*  Facts count
    /* ========================================================================= */

    "use strict"
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to")
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    })

    /* ========================================================================= */
    /*  On scroll fade/bounce fffect
    /* ========================================================================= */

    $("#member").owlCarousel({
        pagination: true, // Show bullet pagination
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 3000
    })

})

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
})
wow.init()

/* ---------------------------------------------------------------------- */
/*      Progress Bars
/* ---------------------------------------------------------------------- */

initProgress('.progress')

function initProgress(el) {
    jQuery(el).each(function () {
        var pData = jQuery(this).data('progress')
        progress(pData, jQuery(this))
    })
}



function progress(percent, $element) {
    var progressBarWidth = 0;

    (function myLoop(i, max) {
        progressBarWidth = i * $element.width() / 100
        setTimeout(function () {
            $element.find('div').find('small').html(i + '%')
            $element.find('div').width(progressBarWidth)
            if (++i <= max) myLoop(i, max)
        }, 10)
    })(0, percent)
}


const boardFrame = document.getElementById('boardFrame')
let frameCurrentUrl = boardFrame.src

window.addEventListener('message', function ({ data: message }) {
    if (message.relocate) location.href = message.href
    boardFrame.style.height = message.height + 'px'
    frameCurrentUrl = message.href.indexOf('?') === -1 ? message.href : message.href.substring(0, message.href.indexOf('?'))
}, false)

const boardUrls = [
    "HOME",
    "//bdmp-003.cafe24.com/bizdemo151251/notice.php",
    "//bdmp-003.cafe24.com/bizdemo151251/member/board.php",
    "//bdmp-003.cafe24.com/bizdemo151251/regular.php",
    "//bdmp-003.cafe24.com/bizdemo151251/base.php"
]

function boardChange(id) {
    boardFrame.src = boardUrls[id]
    boardFrame.parentElement.id = "menu" + id
}
