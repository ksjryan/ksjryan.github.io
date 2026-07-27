(function () {
  function getAnchorTarget(hash) {
    if (!hash || hash === "#") {
      return null;
    }

    return document.getElementById(decodeURIComponent(hash.slice(1)));
  }

  function scrollToHash(hash, behavior) {
    var target = getAnchorTarget(hash);

    if (!target) {
      return false;
    }

    target.scrollIntoView({ behavior: behavior || "smooth", block: "start" });
    return true;
  }

  function scrollToCurrentHash(behavior) {
    if (window.location.hash) {
      scrollToHash(window.location.hash, behavior);
    }
  }

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  window.addEventListener("load", function () {
    scrollToCurrentHash("auto");

    [120, 500].forEach(function (delay) {
      window.setTimeout(function () {
        scrollToCurrentHash("auto");
      }, delay);
    });
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href*="#"]');

    if (!link) {
      return;
    }

    var url = new URL(link.href, window.location.href);
    var samePage =
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname;

    if (!samePage || !scrollToHash(url.hash, "smooth")) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", url.hash);
  });
})();
