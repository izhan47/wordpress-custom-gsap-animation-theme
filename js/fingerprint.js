jQuery(document).ready(function ($) {
  /* Finger Print */

  var finger = $(".cls-1");
  var foretag_btn = $(".foretag-list ul li .elementor-icon-list-text span");
  var f_c = $(".f-c");

  $(".ft-1").addClass("active-color");
  $(".saeid").addClass("active-foretag");

  $(window).on("load", function () {
    $(".foretag-wrapper").css({ height: $(".f-c-active").height() + "px" });
  });

  $(".foretag-list .elementor-icon-list-text span").on("click", function () {
    var btn_attr = $(this).attr("foretag");
    var finger_content = "#" + btn_attr + "_c";
    var finger_attr = $(this).attr("finger");
    var finger_class = "." + finger_attr;

    if ($(this).hasClass("active-foretag")) {
    } else {
      $(".finger-content").hide().removeClass("f-c-active");
      $(finger_content).show().addClass("f-c-active");
      $(".foretag-wrapper").css({ height: $(".f-c-active").height() + "px" });
      foretag_btn.removeClass("active-foretag");
      $(this).addClass("active-foretag");
      finger.removeClass("active-color");
      $(finger_class).addClass("active-color");
    }
  });

  finger.on("click", function () {
    var f_p_class = $(this).attr("class");
    var f_p_split = f_p_class.split(" ")[1];
    var f_p_attr = $(
      ".foretag-list .elementor-icon-list-text span[finger=" + f_p_split + "]"
    );
    var foretag_attr = f_p_attr.attr("foretag");
    var foretag_content = "#" + foretag_attr + "_c";

    if ($(this).hasClass("active-color")) {
    } else {
      $(".finger-content").hide().removeClass("f-c-active");
      $(foretag_content).show().addClass("f-c-active");
      $(".foretag-wrapper").css({ height: $(".f-c-active").height() + "px" });
      foretag_btn.removeClass("active-foretag");
      f_p_attr.addClass("active-foretag");
      finger.removeClass("active-color");
      $(this).addClass("active-color");
    }
  });

  finger.hover(
    function () {
      $(this).addClass("hover-color");
    },
    function () {
      $(this).removeClass("hover-color");
    }
  );

  /* Finger Print END*/

  /* Slide */

  var windowWidth = $(window).width();

  gsap.registerPlugin(ScrollTrigger);

  if (windowWidth > 800) {
    if ($("body").hasClass("home")) {
      let sections = gsap.utils.toArray(".section-h");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#main > .elementor",
          pin: true,
          scrub: 1,

          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () =>
            "+=" + document.querySelector("#main > .elementor").offsetWidth,
        },
      });
    }
  }
});
