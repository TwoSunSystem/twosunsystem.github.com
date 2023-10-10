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
let boardPathIdx

window.addEventListener('message', function ({ data: message }) {
    const frameUrl = new URL(message.href)
    if (message.relocate) {
        frameUrl.searchParams.append("relocated", "true")
        location.href = frameUrl.href
    }
    boardFrame.style.height = message.height + 'px'
    boardPathIdx = boardPaths.indexOf(frameUrl.pathname)
}, false)

document.addEventListener('DOMContentLoaded', function () { boardChange(1) })

const boardHost = "bdmp-003.cafe24.com"
const boardPaths = [
    "_HOME",
    "/bizdemo151251/notice.php",
    "/bizdemo151251/member/board.php",
    "/bizdemo151251/regular.php",
    "/bizdemo151251/base.php"
]

function boardChange(id) {
    const frameUrl = new URL(location.href)
    frameUrl.host = boardHost
    frameUrl.pathname = boardPaths[id]
    frameUrl.search = ""
    boardFrame.src = frameUrl.href
    boardFrame.parentElement.id = "menu" + id
}
