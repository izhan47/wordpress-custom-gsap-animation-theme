jQuery(document).ready(function ($) {
  $(window).bind("pageshow", function (event) {
    if (event.originalEvent.persisted) {
      window.location.reload();
    }
  });

  var windowWidth = $(window).width();

  var top_offset = $(window).scrollTop();
  if (top_offset < 50) {
    $("body:not(.home) #site-header").removeClass("scroll-bg");
  } else {
    $("body:not(.home) #site-header").addClass("scroll-bg");
  }

  $(window).scroll(function () {
    var top_offset = $(window).scrollTop();
    if (top_offset < 50) {
      $("body:not(.home) #site-header").removeClass("scroll-bg");
    } else {
      $("body:not(.home) #site-header").addClass("scroll-bg");
    }
  });

  $(".meny-icon").click(function () {
    $(".open-meny").toggleClass("open");
    $("body").toggleClass("no-scroll");
    $("#meny-fullscreen").toggleClass("meny-hide");
    $(this).toggleClass("open-popup");
  });



  /* Gsap */

  /* preload*/

  //preload click

  let t1 = gsap.timeline({
    delay: 0,
  });

  if (windowWidth > 800) {
    $(document).on(
      "click",
      'a:not([href^=""]):not([href^="#"]):not([href^="%"]):not([target="_blank"]):not([href^="javascript:"]):not([href^="mailto:"]):not([href^="tel:"])',
      function (e) {
        if (e.ctrlKey || e.shiftKey) {
          t1.to(".preload-opacity-hidden", 0.26, {
            opacity: 0,
            visibility: "hidden",
            ease: Power3.easeInOut,
          });
        } else {
          t1.to(".preload-opacity-hidden", 0.26, {
            opacity: 1,
            visibility: "visible",
            ease: Power3.easeInOut,
          });
        }
      }
    );
  }

  gsap.from("#wrap", { autoAlpha: 0, ease: Power3.easeInOut, duration: 1.5 });

  /* gsap animation */

  var ac_ns_fade = $(".ac_ns_fade");

  ac_ns_fade.each(function (i) {
    var ac_ns_fade_i = $(this).find(".ac_ns_fade_i");
    gsap.from(ac_ns_fade_i, {
      y: 25,
      ease: Power4.easeOut,
      autoAlpha: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  });

  var ac_fade = $(".ac_fade");

  ac_fade.each(function (i) {
    var ac_fade_i = $(this).find(".ac_fade_i");

    gsap.from(ac_fade_i, {
      y: 25,
      ease: Power4.easeOut,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,

      scrollTrigger: {
        trigger: $(this),
        markers: false,
        start: "top 60%",
        end: "bottom 100px",
        toggleActions: "play pause resume reverse",
      },
    });
  });

  var ac_ns_fade_in = $(".ac_ns_fade_in");

  ac_ns_fade_in.each(function (i) {
    var ac_ns_fade_i = $(this).find(".ac_ns_fade_i");

    gsap.from(ac_ns_fade_i, {
      ease: Power4.easeOut,
      autoAlpha: 0,
      duration: 2,
      delay: 0.7,
      stagger: 0.3,
    });
  });
});
