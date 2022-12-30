/*--------------------------
    Project Name: Medcity
    Version: 1.0
    Author: 7oorof
    Relase Date: April 2021
---------------------------*/
/*---------------------------
      Table of Contents
    --------------------
    01- Pre Loading
    02- Mobile Menu
    03- Sticky Navbar
    04- Scroll Top Button
    05- Close Topbar
    06- Set Background-img to section 
    07- Add active class to accordions
    08- Contact Form validation
    09- Slick Carousel
    10- Popup Video
    11- Progress bars
    12- NiceSelect Plugin
    13- Range Slider
     
 ----------------------------*/

$(function () {
  "use strict";

  // Global variables
  var $win = $(window);

  /*==========  Pre Loading   ==========*/
  setTimeout(function () {
    $(".preloader").remove();
  }, 2000);

  /*==========   Mobile Menu   ==========*/
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").addClass("menu-opened");
  });

  $(".close-mobile-menu").on("click", function (e) {
    $(".navbar-collapse").removeClass("menu-opened");
  });

  /*==========   Sticky Navbar   ==========*/
  $win.on("scroll", function () {
    if ($win.width() >= 992) {
      var $stickyNavbar = $(".sticky-navbar"),
        $secondaryNavbar = $(".secondary-nav");
      if ($win.scrollTop() > 150) {
        $stickyNavbar.addClass("is-sticky");
      } else {
        $stickyNavbar.removeClass("is-sticky");
      }
      if ($secondaryNavbar.length) {
        if ($win.scrollTop() > $secondaryNavbar.offset().top - 100) {
          $secondaryNavbar.addClass("secondary-nav-sticky");
        } else {
          $secondaryNavbar.removeClass("secondary-nav-sticky");
        }
      }
    }
  });

  /*==========   Set Background-img to section   ==========*/
  $(".bg-img").each(function () {
    var imgSrc = $(this).children("img").attr("src");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + imgSrc + ")",
        "background-size": "cover",
        "background-position": "center",
      });
    $(this).parent().addClass("bg-img");
    if ($(this).hasClass("background-size-auto")) {
      $(this).parent().addClass("background-size-auto");
    }
    $(this).remove();
  });

  /*==========   Add active class to accordions   ==========*/
  $(".accordion__header").on("click", function () {
    $(this).parent(".accordion-item").toggleClass("opened");
    $(this).parent(".accordion-item").siblings().removeClass("opened");
  });
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
  });

  /*==========   Slick Carousel ==========*/
  $(".slick-carousel").slick();

  $(".slider-with-navs").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-with-navs",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
  });

  /*==========  Popup Video  ==========*/
  $(".popup-video").magnificPopup({
    mainClass: "mfp-fade",
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });
  $(".popup-gallery-item").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });

  /*==========  NiceSelect Plugin  ==========*/
  $("select").niceSelect();

  /*==========   Range Slider  ==========*/
  var $rangeSlider = $("#rangeSlider"),
    $rangeSliderResult = $("#rangeSliderResult");
  $rangeSlider.slider({
    range: true,
    min: 0,
    max: 300,
    values: [50, 200],
    slide: function (event, ui) {
      $rangeSliderResult.val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $rangeSliderResult.val(
    "$" +
      $rangeSlider.slider("values", 0) +
      " - $" +
      $rangeSlider.slider("values", 1)
  );

  /*==========  image zoomsl Plugin  ==========*/
  // [Zoom Effect on Hovering] Find it in shop-single-product.html
  $(".zoomin").imagezoomsl();
});
