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

  window.addEventListener("load", function () {
    if (window.location.hash) {
      window.setTimeout(function () {
        scrollToHash(window.location.hash, "auto");
      }, 0);
    }
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
