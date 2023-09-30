jQuery(function ($) {
  $(document).ready(function () {

    document.addEventListener('wpcf7submit', function (event) {
      yaCounter39033535.reachGoal("contact");
      gtag('event', 'send', { 'event_category': 'money', 'event_action': 'contact' });
      console.log('work');
    }, false);

    // Toggle Burger Menu
    $('.toggle-menu').on('click', function (e) {
      e.preventDefault();
      $('.menu-container').toggle();
    });
    // Build fixed menu
    $('.section-screen').each(function (s) {
      var fixedMenu = $('#fixedMenu'),
        before = '<li>',
        after = '</li>',
        id = $(this).attr('id'),
        count = s + 1,
        num = '<span class="menu-num">' + count + '</span>',
        dots = '<span class="menu-dots"></span>',
        link = '<a href="#' + id + '" class="fixed-menu-link">' + num + dots + '</a>'
      //console.log(id);
      fixedMenu.append(before + link + after)
    });
    // Scroll to id
    $('a.fixed-menu-link').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600, function () {
        location.hash = target;
      });
      return false;
    });
    $(window).scroll(function () {
      var scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      $('.section-screen').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $('li a.fixed-menu-link').removeClass('active');
          $('li a.fixed-menu-link').eq(i).addClass('active');
        }
      });
    }).scroll();

    // Inverse text color
    if ($(window).width() >= '992') {

      $(window).scroll(function () {
        var dark_height = $('.section-screen').height(),

          invT = $('.header-top .inverse-color'),
          invB = $('.header-bottom .inverse-color'),

          invPosT = invT.offset().top,
          invPosB = invB.offset().top,
          invPosM = (invPosT + invPosB) / 2,

          partT = invPosT / dark_height,
          partB = invPosB / dark_height;
        partM = invPosM / dark_height;

        //console.log('partT',partT);
        //console.log('partB',partB);
        //console.log('partM',partM);

        if (partT & 1) {
          invT.addClass('dark');
        } else {
          invT.removeClass('dark');
        }
        if (partB & 1) {
          invB.addClass('dark');
        } else {
          invB.removeClass('dark');
        }
        if (partM & 1) {
          $('.menu-dots').addClass('dark');
        } else {
          $('.menu-dots').removeClass('dark');
        }
      });
    }

    // Line in top&bottom section
    function linePos(k) {
      var screenWidth = $(window).width();
      // Top Line
      var offsetTop = $('.header-top-lc').innerWidth() + $('.header-top-rc').innerWidth() + 90,
        posLeftT = $('.header-top-lc').innerWidth() + 45;
      $('.section-inner-top').css({ left: posLeftT, width: screenWidth - offsetTop });
      // Bottom Line
      var offsetBottom = $('.header-bottom-lc').innerWidth() + $('.header-bottom-rc').innerWidth() + 90,
        posLeftB = $('.header-bottom-lc').innerWidth() + 45;
      $('.section-inner-bottom').css({ left: posLeftB, width: screenWidth - offsetBottom });
      $('#screenFive .section-inner-bottom').css({ left: posLeftB - 25, width: screenWidth - offsetBottom });
    };
    linePos();

    // Line in left side of section
    function lineLeft() {
      $('.section-screen').each(function () {
        var screenHeight = $(window).height(),
          posB = $('.header-bottom').innerHeight(),
          posT = $('.header-top').innerHeight(),
          containerWidth = (screenHeight - posB - posT)
        contentWidth = $(this).find('.section-side-name').height(),
          // Left line
          offsetLeft = (screenHeight - contentWidth) / 2,
          lineLeftWidth = offsetLeft - posB - 45;
        // Right Line			
        lineRightWidth = offsetLeft - posT - 45;

        $(this).find('.section-inner-left').css({ height: containerWidth });
        $(this).find('.side-left-line').each(function () {
          $(this).css({ height: lineLeftWidth });
        });
        $(this).find('.side-right-line').each(function () {
          $(this).css({ height: lineRightWidth });
        });
      });
    }
    lineLeft();

    $(window).resize(function () {
      linePos();
      lineLeft();
    });

    // Scroll to next section
    $('.scroll-next').click(function () {
      var slide = $(this).closest('.section-screen').next();
      $('html, body').animate({
        scrollTop: slide.offset().top
      }, 400);
    });

    if ($('.slider-video-f').length) {
      $('.slider-video-f').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.slider-v-cont'),
        prevArrow: $('.slider-v-buttons button.slick-prev'),
        nextArrow: $('.slider-v-buttons button.slick-next'),
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }


    if ($('.slider-video-s').length) {
      $('.slider-video-s').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.slider-s-cont'),
        prevArrow: $('.slider-video-s-buttons button.slick-prev'),
        nextArrow: $('.slider-video-s-buttons button.slick-next'),
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }

    // Catalog Slider
    $('.slider-catalog-content').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.slider-catalog-nav'),
      prevArrow: $('.slider-catalog-nav button.slick-prev'),
      nextArrow: $('.slider-catalog-nav button.slick-next'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    // Post Slider
    $('.slider-post-content').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.slider-post-nav'),
      prevArrow: $('.slider-post-nav button.slick-prev'),
      nextArrow: $('.slider-post-nav button.slick-next'),
    });

    if ($(window).width() <= '991') {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop()
        if (scroll >= '40') {
          $('.header-top, .header-bottom').addClass('scroll-header');
          $('.header-top .inverse-collor, .header-bottom .inverse-collor').removeClass('dark');
        } else {
          $('.header-top, .header-bottom').removeClass('scroll-header');
        }
      });

    };

    $(document).mouseup(function (e) {
      var container = $('.menu-container');
      if (container.has(e.target).length === 0) {
        container.hide();
      }
    });

    $('input[type=tel]').inputmask('+7(999)-999-9999');

  });
});