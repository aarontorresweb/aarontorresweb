/*
	Epilogue by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
    xxsmall: "(max-width: 360px)",
  });

  $(function () {
    var $window = $(window),
      $body = $("body");

    // Disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-loading");
      }, 100);
    });

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on medium.
    skel.on("+medium -medium", function () {
      $.prioritize(
        ".important\\28 medium\\29",
        skel.breakpoint("medium").active
      );
    });

    // Items.
    $(".item").each(function () {
      var $this = $(this),
        $header = $this.find("header"),
        $a = $header.find("a"),
        $img = $header.find("img");

      // Set background.
      $a.css("background-image", "url(" + $img.attr("src") + ")");

      // Remove original image.
      $img.remove();
    });
  });

  // $(".carousel").carousel();
})(jQuery);

// JS for the slideShow.
// From this code pen: https://codepen.io/AndresUris/pen/rGXpvE
const slideShow = document.querySelectorAll('[data-component="slideshow"]');
slideShow.forEach(initSlideShow);

function initSlideShow(slideShow) {
  const slides = document.querySelectorAll(
    `#${slideShow.id} [role="slide-list"] .slide`
  );

  let index = 0,
    time = 3500;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}

//const nextSlide = function()
slideShow.addEventListener("click", function () {
  initSlideShow(slideShow);
});

// For the hamburger menu.
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
function hamburgerMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
