(function () {
  var carousels = document.querySelectorAll("[data-profile-carousel]");

  carousels.forEach(function (carousel) {
    var images = Array.prototype.slice.call(
      carousel.querySelectorAll("[data-profile-image]")
    );
    var previousButton = carousel.querySelector("[data-profile-prev]");
    var nextButton = carousel.querySelector("[data-profile-next]");
    var currentIndex = 0;

    if (images.length < 2 || !previousButton || !nextButton) {
      return;
    }

    function showImage(nextIndex) {
      currentIndex = (nextIndex + images.length) % images.length;

      images.forEach(function (image, imageIndex) {
        var isActive = imageIndex === currentIndex;
        image.hidden = !isActive;
        image.classList.toggle("profile-photo--active", isActive);
      });
    }

    previousButton.addEventListener("click", function () {
      showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showImage(currentIndex + 1);
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
      }
    });

    showImage(0);
  });
})();
