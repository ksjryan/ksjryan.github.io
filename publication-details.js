(function () {
  function initializePublicationDetails() {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    document.querySelectorAll("[data-publication-details]").forEach(function (article) {
      var toggle = article.querySelector("[data-publication-toggle]");
      var label = article.querySelector("[data-publication-toggle-label]");
      var panel = article.querySelector("[data-publication-panel]");
      var inner = panel && panel.querySelector(".publication-details-inner");

      if (!toggle || !panel || !inner) {
        return;
      }

      var title = article.getAttribute("data-publication-title") || "this publication";
      var videos = panel.querySelectorAll("iframe[data-src]");
      var expanded = false;
      var animation = null;
      var targetHeight = 0;

      function cancelAnimation() {
        if (animation) {
          animation.onfinish = null;
          animation.cancel();
          animation = null;
        }
      }

      function finishTransition() {
        cancelAnimation();
        panel.hidden = !expanded;
        panel.style.removeProperty("height");
        panel.style.removeProperty("overflow");
      }

      function animatePanel() {
        // Read the visible height before cancelling so rapid reversals stay smooth.
        var startHeight = panel.hidden ? 0 : panel.getBoundingClientRect().height;
        cancelAnimation();
        panel.hidden = false;
        panel.style.overflow = "hidden";
        panel.style.height = startHeight + "px";
        targetHeight = expanded ? inner.getBoundingClientRect().height : 0;

        if (
          reducedMotion.matches ||
          typeof panel.animate !== "function" ||
          Math.abs(targetHeight - startHeight) < 1
        ) {
          finishTransition();
          return;
        }

        animation = panel.animate(
          [{ height: startHeight + "px" }, { height: targetHeight + "px" }],
          { duration: 280, easing: "cubic-bezier(0.2, 0, 0, 1)", fill: "both" }
        );

        var currentAnimation = animation;
        currentAnimation.onfinish = function () {
          if (animation === currentAnimation) {
            // An open panel returns to its natural height after the animation.
            finishTransition();
          }
        };
      }

      function updateState() {
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        toggle.setAttribute("aria-label", (expanded ? "Close details for " : "More details for ") + title);
        if (label) {
          label.textContent = expanded ? "Close" : "More Details";
        }

        panel.setAttribute("aria-hidden", expanded ? "false" : "true");
        if (expanded) {
          panel.removeAttribute("inert");
        } else {
          panel.setAttribute("inert", "");
        }

        videos.forEach(function (video) {
          if (expanded) {
            var source = video.getAttribute("data-src");
            if (source && video.getAttribute("src") !== source) {
              video.setAttribute("src", source);
            }
          } else {
            // Unloading the embed also stops playback when its panel is closed.
            video.removeAttribute("src");
          }
        });
      }

      function setExpanded(nextExpanded) {
        if (expanded === nextExpanded) {
          return;
        }

        expanded = nextExpanded;
        updateState();
        animatePanel();
      }

      function restoreToggleFocus() {
        toggle.focus({ preventScroll: true });
        var bounds = toggle.getBoundingClientRect();
        if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
          toggle.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "nearest",
            inline: "nearest"
          });
        }
      }

      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        setExpanded(!expanded);
      });

      article.querySelectorAll("[data-publication-close]").forEach(function (close) {
        close.addEventListener("click", function (event) {
          event.preventDefault();
          setExpanded(false);
          restoreToggleFocus();
        });
      });

      article.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !event.defaultPrevented && expanded) {
          event.preventDefault();
          event.stopPropagation();
          setExpanded(false);
          restoreToggleFocus();
        }
      });

      function updateAnimationHeight() {
        if (
          expanded && animation &&
          Math.abs(inner.getBoundingClientRect().height - targetHeight) >= 1
        ) {
          animatePanel();
        }
      }

      if (typeof window.ResizeObserver === "function") {
        var observer = new ResizeObserver(updateAnimationHeight);
        observer.observe(inner);
      } else {
        window.addEventListener("resize", updateAnimationHeight);
        inner.querySelectorAll("img").forEach(function (image) {
          image.addEventListener("load", updateAnimationHeight);
        });
      }

      function handleMotionPreference() {
        if (reducedMotion.matches && animation) {
          finishTransition();
        }
      }

      if (typeof reducedMotion.addEventListener === "function") {
        reducedMotion.addEventListener("change", handleMotionPreference);
      } else if (typeof reducedMotion.addListener === "function") {
        reducedMotion.addListener(handleMotionPreference);
      }

      updateState();
      panel.hidden = true;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePublicationDetails);
  } else {
    initializePublicationDetails();
  }
})();
