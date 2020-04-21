$(window).scroll(function () {
  $("nav").toggleClass("scrolled mt-0", $(this).scrollTop() > 50);
  $("nav").removeClass("mt-3", $(this).scrollTop() > 50);
  $("nav img").toggleClass("logo-img-scrolled", $(this).scrollTop() > 50);
});

// Smooth Scroll Effect
$(document).ready(function () {
  // Add smooth scrolling to all links in the nav
  $("#myNav a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
