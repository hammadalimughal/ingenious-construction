  /*
  |--------------------------------------------------------------------------
  | Template Name: Anglo
  | Author: Sifency
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Testimonial Slider
  | 2. Client Image Slider
  | 3. Scroll To Top
  | 3. Preloader
  | 4. Splite Text
  | 5. Page Loading Transition
  | 5. Header
  | 5. Mobile Menu
  | 7. Text Animation

  */

/*--------------------------------------------------------------
    ## Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    $(window).trigger('scroll');
    $(window).trigger('resize');
  });

  $(function () {
    $(window).trigger('resize');
    mainNav();
    stickyHeader();
    if ($.exists('.wow')) {
      new WOW().init();
    }
  });
  AOS.init();

/*--------------------------------------------------------------
  01_ Testimonial Slider
--------------------------------------------------------------*/
$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    dots:false,
  });

  // Testimonial Slider Custom Button
  $('.customNextBtn').on('click', function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').on('click', function() {
    owl.trigger('prev.owl.carousel');
  });
});

/*--------------------------------------------------------------
  02_ Client Image Slider
--------------------------------------------------------------*/
$(document).ready(function(){

  var owl = $('.owl-carousel-client');
  owl.owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    items: 5,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });

});


/*--------------------------------------------------------------
  03_ Scroll To Top
--------------------------------------------------------------*/
const toTop = document.querySelector(".to-top");

$(window).on('scroll', function() {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


/*--------------------------------------------------------------
  04_ Preloader
--------------------------------------------------------------*/
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    });

  /*--------------------------------------------------------------
    05. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.cs_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('cs_gescout_sticky');
      } else {
        $header.removeClass('cs_gescout_sticky');
        $header.removeClass('cs_gescout_show');
      }

      if ($header.hasClass('cs_gescout_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('cs_gescout_show');
        } else {
          $header.removeClass('cs_gescout_show');
        }
      }

      lastScrollTop = windowTop;
    });
  }
  /*--------------------------------------------------------------
    06. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs_nav').append('<span class="cs_munu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs_munu_dropdown_toggle"></span>',
    );
    $('.cs_munu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs_toggle_active')
        .siblings('.cs_nav_list')
        .slideToggle();
    });
    $('.cs_munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
    // Mega Menu
    // $('.cs_mega_wrapper>li>a').removeAttr('href');
    // Modal Btn
    $('.cs_mode_btn').on('click', function () {
      $(this).toggleClass('active');
      $('body').toggleClass('cs_dark');
    });
    // Side Nav
    $('.cs_icon_btn').on('click', function () {
      $('.cs_side_header').addClass('active');
    });
    $('.cs_close, .cs_side_header_overlay').on('click', function () {
      $('.cs_side_header').removeClass('active');
    });
    //  Menu Text Split
    $('.cs_animo_links > li > a').each(function () {
      let xxx = $(this).html().split('').join('</span><span>');
      $(this).html(`<span class="cs_animo_text"><span>${xxx}</span></span>`);
    });
  }
/*--------------------------------------------------------------
  07_ Splite Text
--------------------------------------------------------------*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


