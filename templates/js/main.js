$(document).ready(function () {

$("h1").fitText(1.5, { minFontSize: '16px', maxFontSize: '60px' });
$("h2").fitText(2, { minFontSize: '16px', maxFontSize: '40px' });
$("h3").fitText(2, { minFontSize: '14px', maxFontSize: '30px' });
$("body").fitText(2.5, { minFontSize: '12px', maxFontSize: '20px' });
$(".main").fitText(1.5, { minFontSize: '16px', maxFontSize: '60px' });

    $("nav.main ul li div").on("click", function (ev) {
        ev.stopPropagation();
        $("nav.main ul li div").removeClass('clicked');
        $(this).addClass('clicked');
    })

    function boxResize() {
        _height = $(window).height();
        _width = $(window).width();
        var padding = $('nav.main ul li').css('padding-right')
        $('nav.main ul li div').css('height', ((_height - 70) / 3) - parseInt(padding) * 2);
    }

    $(window).on("load resize", function (e) {

		boxResize()

        $('.post-wrapper ul li').each(function () {

            $rightColumn = $('.post-wrapper ul li').width() - $('.post-wrapper ul li .left-column').innerWidth() - 30;
            if ($(this).find('.left-column').length == 0) {
                $rightColumn = $('.post-wrapper ul li').width() - 30;
            }
            ($(this).find('.desc-column')).css('width', Math.floor($rightColumn));
        });
    });

    $slideMenu = $("#slideMenu")

    $('#nav-button').on('click', function () {
        $('#nav-button').css({ 'transform':'rotate(180deg)', 'transition-duration': '0.7s'})
        $('#main, header#logo, footer').css({
                'left':'0',
                'transition' : 'all 0.5s ease-out',
        })
        if (($slideMenu).is(':visible')) {
            $('.theFixed').remove()
            $('html, body').css({
                'overflow': 'auto'
            });
            $slideMenu.toggle('slide');
            $('#main, header#logo, footer').css({
                'left':'0',
                'transition' : 'all 0.5s ease-out'
            })
            $('#nav-button').css({ 'transform':'rotate(-0deg)', 'transition-duration': '0.7s'})
        } else {
            $('<div class=theFixed></div>').insertAfter('#main');
            $('html, body').css({
                'overflow': 'hidden'
            });
            $slideMenu.css({'z-index':'0','display':'block'});
            $('#main, header#logo, footer, .theFixed').css({
                'left':'-250px',
            })
        }
    });

    $('.gototop').on('click',function(){
        $('body,html').animate({
            scrollTop: -45
        }, 0);
        return false;
    });

    // Tabs
    $('.tabs').find('.tab').css({'display':'none'})
    displayFirstTab()

    $('body').on('click', '.tabs #centered-menu .active1 a', function(e){
        e.preventDefault();
        var contentId = $(this).attr('href')
        $(this).parents("#centered-menu").find('.active1 a').removeClass('active')
        $(this).parents('.tabs').find('.tab').css({'display':'none'})
        $(this).addClass('active')
        $(contentId).css({'display':'block'})
    })
    $('body').on('click', '.tabs #centered-menu .active2 a', function(e){
        e.preventDefault();
        var contentId = $(this).attr('href')
        $(this).parents("#centered-menu").find('.active2 a').removeClass('active')
        $(this).parents('.tabs').find('.tab').css({'display':'none'})
        $(this).addClass('active')
        $(contentId).css({'display':'block'})
    })
    // End of tab
});

function displayFirstTab() {
    $('.tabs').find('.tab').first().css({'display':'block'})
}

$(window).load(function() {
$("#status").fadeOut();
$("#preloader").delay(500).fadeOut("slow");
});

