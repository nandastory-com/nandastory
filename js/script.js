/* ===== 난다스토리 웹 v_0001 — script ===== */
(function () {
  "use strict";

  // 스크롤 진입 시 섹션 페이드인
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // 네비 스크롤 시 blur 강화 (JD 골조)
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 60) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }, { passive: true });
  }

  // 모바일 네비 토글
  var toggle = document.getElementById("navToggle");
  var navEl = document.getElementById("nav");
  if (toggle && navEl) {
    toggle.addEventListener("click", function () { navEl.classList.toggle("open"); });
    navEl.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navEl.classList.remove("open"); });
    });
  }
})();
