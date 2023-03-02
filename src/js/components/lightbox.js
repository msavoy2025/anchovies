jQuery(document).ready(function ($) {

    //lightbox close
    $('.lightbox_close').on('click', function () {
        $('.lightbox_wrap').css({
            'position': 'static',
            'z-index': '-1',
        });
        $('.lightbox').css({
            'width': '100%',
            'height': '100%',
            'transform': 'translate(0, 0)',
        });
        $('.lightbox_close').css('opacity', '0');
        $('body').css('overflow', 'initial');
        $('.lightbox_open').css('display', 'block');
    });

    //lightbox example open
    $('.lightbox_example_open .btn').on('click', function () {
        $('.lightbox_example').css({
            'opacity': '1',
            'z-index': '999999999',
        });
        $('.lightbox_close').css('opacity', '1');
        $('body').css('overflow', 'hidden');
    });

    //lightbox example close
    $('.lightbox_example .btn, .example_close').on('click', function () {
        $('.lightbox_example').css({
            'opacity': '0',
            'z-index': '-1',
        });
        $('body').css('overflow', 'initial');
        $('.lightbox_close').css('opacity', '0');
    });

    //Good Days Bad Days 1-5
    //lightbox open 1
    $('.lightboxopen1').on('click', function () {
        $('.lightboxwrap1').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox1').css({
            'width': '950px',
            'height': '120%',
        });
        $('.lightboxclose1').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 2
    $('.lightboxopen2').on('click', function () {
        $('.lightboxwrap2').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox2').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose2').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });


    //lightbox open 3
    $('.lightboxopen3').on('click', function () {
        $('.lightboxwrap3').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox3').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose3').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 4
    $('.lightboxopen4').on('click', function () {
        $('.lightboxwrap4').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox4').css({
            'width': '755px',
            'height': '120%',
        });
        $('.lightboxclose4').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 5
    $('.lightboxopen5').on('click', function () {
        $('.lightboxwrap5').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox5').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose5').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Smell The Roses 6-10
    //lightbox open 6
    $('.lightboxopen6').on('click', function () {
        $('.lightboxwrap6').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox6').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose6').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 7
    $('.lightboxopen7').on('click', function () {
        $('.lightboxwrap7').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox7').css({
            'width': '950px',
            'height': '120%',
        });
        $('.lightboxclose7').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 8
    $('.lightboxopen8').on('click', function () {
        $('.lightboxwrap8').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox8').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose8').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 9
    $('.lightboxopen9').on('click', function () {
        $('.lightboxwrap9').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox9').css({
            'width': '755px',
            'height': '120%',
        });
        $('.lightboxclose9').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 10
    $('.lightboxopen10').on('click', function () {
        $('.lightboxwrap10').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox10').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose10').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Roman Candle 11-13
    //lightbox open 11
    $('.lightboxopen11').on('click', function () {
        $('.lightboxwrap11').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox11').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose11').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 12
    $('.lightboxopen12').on('click', function () {
        $('.lightboxwrap12').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox12').css({
            'width': '755px',
            'height': '120%',
        });
        $('.lightboxclose12').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 13
    $('.lightboxopen13').on('click', function () {
        $('.lightboxwrap13').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox13').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose13').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Thrive 14-15
    //lightbox open 14
    $('.lightboxopen14').on('click', function () {
        $('.lightboxwrap14').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox14').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose14').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 15
    $('.lightboxopen15').on('click', function () {
        $('.lightboxwrap15').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox15').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose15').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Show+Tell 16-18
    //lightbox open 16
    $('.lightboxopen16').on('click', function () {
        $('.lightboxwrap16').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox16').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose16').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 17
    $('.lightboxopen17').on('click', function () {
        $('.lightboxwrap17').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox17').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose17').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 18
    $('.lightboxopen18').on('click', function () {
        $('.lightboxwrap18').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox18').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose18').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Coppery Coyote 19-21
    //lightbox open 19
    $('.lightboxopen19').on('click', function () {
        $('.lightboxwrap19').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox19').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose19').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 20
    $('.lightboxopen20').on('click', function () {
        $('.lightboxwrap20').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox20').css({
            'width': '1000px',
            'height': '120%',
        });
        $('.lightboxclose20').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 21
    $('.lightboxopen21').on('click', function () {
        $('.lightboxwrap21').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox21').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose21').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Viridian 22-24
    //lightbox open 22
    $('.lightboxopen22').on('click', function () {
        $('.lightboxwrap22').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox22').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose22').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 23
    $('.lightboxopen23').on('click', function () {
        $('.lightboxwrap23').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox23').css({
            'width': '950px',
            'height': '120%',
        });
        $('.lightboxclose23').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 24
    $('.lightboxopen24').on('click', function () {
        $('.lightboxwrap24').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox24').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose24').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Parachute 25-26
    //lightbox open 25
    $('.lightboxopen25').on('click', function () {
        $('.lightboxwrap25').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox25').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose25').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 26
    $('.lightboxopen26').on('click', function () {
        $('.lightboxwrap26').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox26').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose26').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //Humanly 27-28
    //lightbox open 27
    $('.lightboxopen27').on('click', function () {
        $('.lightboxwrap27').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox27').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose27').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });

    //lightbox open 28
    $('.lightboxopen28').on('click', function () {
        $('.lightboxwrap28').css({
            'position': 'fixed',
            'z-index': '999999',
        });
        $('.lightbox28').css({
            'width': '1340px',
            'height': '120%',
        });
        $('.lightboxclose28').css('opacity', '1');
        $('body').css('overflow', 'hidden');
        $(this).css('display', 'none');
    });
});