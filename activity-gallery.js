(function () {
  function initializeActivities() {
    document.querySelectorAll("[data-activities]").forEach(function (section) {
      var buttons = Array.prototype.slice.call(section.querySelectorAll("[data-activity-select]"));
      var panels = Array.prototype.slice.call(section.querySelectorAll("[data-activity-panel]"));
      var status = section.querySelector("[data-activity-status]");
      var galleries = [];
      var activeId = buttons.length ? buttons[0].getAttribute("data-activity-select") : "";

      panels.forEach(function (panel) {
        var viewport = panel.querySelector("[data-activity-viewport]");
        var track = panel.querySelector("[data-activity-track]");
        var photos = Array.prototype.slice.call(panel.querySelectorAll("[data-activity-photo]"));
        var controls = panel.querySelector("[data-activity-controls]");
        var count = panel.querySelector("[data-activity-count]");
        var previous = panel.querySelector("[data-activity-prev]");
        var next = panel.querySelector("[data-activity-next]");
        var index = 0;
        var visible = 2;
        var touchStart = null;

        function draw() {
          if (panel.hidden) {
            return;
          }

          visible = parseInt(window.getComputedStyle(track).getPropertyValue("--activity-visible"), 10) || 2;
          index = Math.max(0, Math.min(index, Math.max(0, photos.length - visible)));
          controls.hidden = photos.length === 0;
          previous.disabled = index === 0;
          next.disabled = index + visible >= photos.length;

          if (!photos.length) {
            count.textContent = "";
            track.style.transform = "";
            return;
          }

          var gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
          var step = photos[0].getBoundingClientRect().width + gap;
          track.style.transform = "translateX(" + (-index * step) + "px)";
          var last = Math.min(index + visible, photos.length);
          count.textContent = (index + 1) + (last > index + 1 ? "–" + last : "") + " / " + photos.length;

          photos.forEach(function (photo, photoIndex) {
            var isVisible = photoIndex >= index && photoIndex < last;
            photo.setAttribute("aria-hidden", isVisible ? "false" : "true");
            photo.toggleAttribute("inert", !isVisible);
            // Also keep offscreen links out of the tab order in older browsers.
            var link = photo.querySelector("a");
            if (link) {
              link.tabIndex = isVisible ? 0 : -1;
            }
          });
        }

        function move(direction) {
          index += direction;
          draw();
        }

        previous.addEventListener("click", function () { move(-1); });
        next.addEventListener("click", function () { move(1); });

        viewport.addEventListener("touchstart", function (event) {
          touchStart = event.touches.length === 1 ? {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
          } : null;
        }, { passive: true });

        viewport.addEventListener("touchend", function (event) {
          if (!touchStart || !event.changedTouches.length || photos.length <= visible) {
            touchStart = null;
            return;
          }
          var dx = event.changedTouches[0].clientX - touchStart.x;
          var dy = event.changedTouches[0].clientY - touchStart.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            move(dx < 0 ? 1 : -1);
          }
          touchStart = null;
        }, { passive: true });

        viewport.addEventListener("touchcancel", function () { touchStart = null; }, { passive: true });

        if (typeof window.ResizeObserver === "function") {
          var observer = new ResizeObserver(draw);
          observer.observe(viewport);
        } else {
          window.addEventListener("resize", draw);
        }

        galleries.push({ panel: panel, draw: draw, reset: function () { index = 0; } });
      });

      function selectConference(id, announce) {
        activeId = id;
        buttons.forEach(function (button) {
          button.setAttribute("aria-pressed", button.getAttribute("data-activity-select") === id ? "true" : "false");
        });
        galleries.forEach(function (gallery) {
          var selected = gallery.panel.getAttribute("data-activity-panel") === id;
          gallery.panel.hidden = !selected;
          if (selected) {
            var badge = gallery.panel.querySelector("image[data-badge-src]");
            if (badge) {
              badge.setAttribute("href", badge.getAttribute("data-badge-src"));
              badge.removeAttribute("data-badge-src");
            }
            gallery.reset();
            gallery.draw();
            if (announce && status) {
              var photoCount = gallery.panel.querySelectorAll("[data-activity-photo]").length;
              status.textContent = gallery.panel.getAttribute("data-activity-label") + " selected." +
                (photoCount ? " " + photoCount + (photoCount === 1 ? " photo." : " photos.") : "");
            }
          }
        });
      }

      buttons.forEach(function (button, buttonIndex) {
        button.addEventListener("click", function () {
          var id = button.getAttribute("data-activity-select");
          if (id !== activeId) {
            selectConference(id, true);
          }
        });

        button.addEventListener("keydown", function (event) {
          if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
          }
          var nextIndex;
          if (event.key === "ArrowRight") {
            nextIndex = (buttonIndex + 1) % buttons.length;
          } else if (event.key === "ArrowLeft") {
            nextIndex = (buttonIndex - 1 + buttons.length) % buttons.length;
          } else if (event.key === "Home") {
            nextIndex = 0;
          } else if (event.key === "End") {
            nextIndex = buttons.length - 1;
          } else {
            return;
          }
          event.preventDefault();
          buttons[nextIndex].focus();
          selectConference(buttons[nextIndex].getAttribute("data-activity-select"), true);
        });
      });

      selectConference(activeId, false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeActivities);
  } else {
    initializeActivities();
  }
})();
