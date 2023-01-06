/*--------------------------
    Project Name: Hemolab
    Version: 1.0
    Author: Leo Sobral
    Relase Date: January 2023
---------------------------*/
/*---------------------------
      Table of Contents
    --------------------
    01- Mobile Menu
    02- Sticky Navbar
    03- Set Background-img to section 
    04- Add active class to accordions
    05- Slick Carousel
    06- Popup Video
    07- Range Slider
    08- Seach Collapse

     
 ----------------------------*/

$(function () {
  "use strict";

  // Global variables
  var $win = $(window);

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

  /*==========   Search Collapse   ==========*/

  const exames = [
    {
      id: 1,
      name: "sexagem",
    },

    {
      id: 2,
      name: "mayaro",
    },

    {
      id: 3,
      name: "sangue",
    },

    {
      id: 4,
      name: "dna",
    },

    {
      id: 5,
      name: "covid",
    },
  ];
});
