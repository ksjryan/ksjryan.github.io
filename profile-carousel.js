(function () {
  var carousels = document.querySelectorAll("[data-profile-carousel]");

  carousels.forEach(function (carousel) {
    var images = Array.prototype.slice.call(
      carousel.querySelectorAll("[data-profile-image]")
    );
    var previousButton = carousel.querySelector("[data-profile-prev]");
    var nextButton = carousel.querySelector("[data-profile-next]");
    var thumbnails = Array.prototype.slice.call(
      carousel.querySelectorAll("[data-profile-thumbnail]")
    );
    var status = carousel.querySelector("[data-profile-status]");
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

      thumbnails.forEach(function (thumbnail, imageIndex) {
        thumbnail.setAttribute("aria-pressed", imageIndex === currentIndex ? "true" : "false");
      });

      if (status) {
        status.textContent = "Photo " + (currentIndex + 1) + " of " + images.length;
      }
    }

    previousButton.addEventListener("click", function () {
      showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showImage(currentIndex + 1);
    });

    thumbnails.forEach(function (thumbnail, imageIndex) {
      thumbnail.addEventListener("click", function () {
        showImage(imageIndex);
      });
    });

    carousel.addEventListener("keydown", function (event) {
      if (
        (event.key !== "ArrowLeft" && event.key !== "ArrowRight") ||
        event.altKey || event.ctrlKey || event.metaKey
      ) {
        return;
      }

      event.preventDefault();
      var thumbnailIndex = thumbnails.indexOf(event.target);
      var startIndex = thumbnailIndex === -1 ? currentIndex : thumbnailIndex;
      showImage(startIndex + (event.key === "ArrowLeft" ? -1 : 1));

      if (thumbnailIndex !== -1) {
        thumbnails[currentIndex].focus();
      }
    });

    showImage(0);
  });
})();
