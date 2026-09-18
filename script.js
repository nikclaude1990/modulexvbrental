/* ModuleX VB Rental - mobile navigation + language links.
   Page copy is static per language (/ for Serbian, /en/ for English), so no
   runtime text swapping happens here. */

(function () {
  "use strict";

  // Keep the reader's section when switching language: /#equipment -> /en/#equipment
  var langSwitch = document.querySelector(".lang-switch");

  if (langSwitch) {
    langSwitch.addEventListener("click", function (e) {
      var link = e.target.closest(".lang-btn");
      if (!link || link.hasAttribute("aria-current")) return;
      if (window.location.hash) link.href = link.getAttribute("href") + window.location.hash;
    });
  }

  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  if (!navToggle || !mainNav) return;

  var navLinks = mainNav.querySelectorAll("a");
  // Nav is permanently visible on desktop; only manage tab order while the
  // mobile layout can actually collapse it.
  var mobileQuery = window.matchMedia("(max-width: 760px)");

  function syncTabbability() {
    var hidden = mobileQuery.matches && !mainNav.classList.contains("open");
    navLinks.forEach(function (link) { link.tabIndex = hidden ? -1 : 0; });
  }

  function openNav() {
    mainNav.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    syncTabbability();
  }

  function closeNav(returnFocus) {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    syncTabbability();
    if (returnFocus) navToggle.focus();
  }

  function isOpen() {
    return mainNav.classList.contains("open");
  }

  navToggle.addEventListener("click", function () {
    if (isOpen()) closeNav();
    else openNav();
  });

  mainNav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) closeNav(true);
  });

  document.addEventListener("click", function (e) {
    if (!isOpen()) return;
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) closeNav();
  });

  mobileQuery.addEventListener("change", function () { closeNav(); });

  syncTabbability();
})();
