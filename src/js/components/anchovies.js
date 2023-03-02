jQuery(document).ready(function ($) {
    //navigation functionality
    $('.nav_open').on('click', function () {
        $('.nav_wrap').css('right', '0');
        $(this).css('opacity', '0');
    });

    $('.nav_close').on('click', function () {
        $('.nav_wrap').css('right', '-100%');
        $('.nav_open').css('opacity', '1');
    });

    //thrive image block word change on resize/mobile
    if ($(window).width() < 767) {
        $(".thrive_images_intro_right .bold").text('The image below means...');
    }

    $(window).resize(function () {
        if ($(window).width() < 767) {
            $(".thrive_images_intro_right .bold").text('The image below means...');
        }
        else {
            $(".thrive_images_intro_right .bold").text('The image on the left means...');
        }
    });

    //work page lsab image swap
    /*if ($(".lsab_slide").length > 0) {
        var interval;
        
        var timer = function () {
            interval = setInterval(function () {
                var active = $('.active_lsab');
                var next = ($('.active_lsab').next().length > 0) ? $('.active_lsab').next() : $('.lsab_slide:first');
                active.removeClass('active_lsab');
                next.addClass('active_lsab');
                
            }, 1000);
        };

        timer();

    }
    else {

    }*/

    //if video is unknown
    $('video source[src=""]').each(function () {
        $(this).parents('.note_video').addClass('vid_hide');
    });

    if ($('.note_video_image').css('background-image') == 'none') {
        $(this).parents('.note_video').addClass('vid_hide');
        console.log('image test');
    }

    $('.note').each(function() {
        if ($('.note_video', this).hasClass("vid_hide")) {
            $('.note_upper', this).css('display', 'block');    
        }
    });

    $('.prev_project a, .next_project a').addClass('hoverswap');

    $('.inner .item:nth-child(1)').addClass('active');

});

var allWrap = document.getElementsByClassName('slider');

for (var i = 0; i < allWrap.length; i++) {
    allWrap[i].classList.add('mySlider_' + i);

    var slider = new Slider('.mySlider_' + i);
    slider.addListeners();
}


var allWrap = document.getElementsByClassName('slider');

for (var i = 0; i < allWrap.length; i++) {
    allWrap[i].classList.add('mySlider_' + i);

    var slider = new Slider('.mySlider_' + i);
    slider.addListeners();
}


function Slider(newclass) {
    this.buttons = document.querySelectorAll(newclass + ' button');
    this.items = document.querySelectorAll(newclass + ' .item');
    this.activeItem = 0;
    this.isSliding = false;

    this.addListeners = function () {
        this.buttons.forEach(el => el.addEventListener("click", this.slide))
    }

    this.slide = event => {
        if (!this.isSliding) {
            this.isSliding = true;
            var currentItem = this.activeItem;

            if (event.target === this.buttons[1]) {
                this.activeItem === this.items.length - 1 ? this.activeItem = 0 : this.activeItem++;
                //active slide out left
                this.items[currentItem].classList.add('active-left');
                //next slide in left
                this.items[this.activeItem].classList.add('item-next', 'item-left');
                //remove classes
                setTimeout(() => {
                    this.items[currentItem].classList.remove('active-left', 'active');
                    this.items[this.activeItem].classList.remove('item-next', 'item-left');
                    //set new active item
                    this.items[this.activeItem].classList.add('active');
                    this.isSliding = false;
                }, 1000)
            } else {
                this.activeItem === 0 ? this.activeItem = this.items.length - 1 : this.activeItem--;
                //active slide out right
                this.items[currentItem].classList.add('active-right');
                //prev slide in right
                this.items[this.activeItem].classList.add('item-prev', 'item-right');
                //remove classes
                setTimeout(() => {
                    this.items[currentItem].classList.remove('active-right', 'active');
                    this.items[this.activeItem].classList.remove('item-prev', 'item-right');
                    //set new active item
                    this.items[this.activeItem].classList.add('active');
                    this.isSliding = false;
                }, 1000)
            }
        }
    }
}
