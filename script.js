// script.js
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the next sibling element which should be the filter options div
            const options = this.nextElementSibling;

            if (options.style.display === 'block') {
                options.style.display = 'none';
            } else {
                // First, close all other filter options
                document.querySelectorAll('.filter-options').forEach(opt => opt.style.display = 'none');
                // Then, open the clicked filter's options
                options.style.display = 'block';
            }
        });
    });
});
$(document).ready(function () {
    $("#heart").click(function () {
        if ($("#heart").hasClass("liked")) {
            $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
            $("#heart").removeClass("liked");
        } else {
            $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
            $("#heart").addClass("liked");
        }
    });
});

const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
