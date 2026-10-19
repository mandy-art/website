// Merkt sich die Sprachwahl, wenn jemand im Sprachumschalter klickt
document.querySelectorAll(".lang a[hreflang]").forEach(function (a) {
  a.addEventListener("click", function () { try { localStorage.setItem("site_lang", a.getAttribute("hreflang")); } catch (e) {} });
});

// Menü auf dem Handy öffnen und schließen
(function () {
  var header = document.querySelector(".site-header"), btn = document.querySelector(".menu-toggle");
  if (!header || !btn) return;
  function set(open) { header.classList.toggle("open", open); btn.setAttribute("aria-expanded", open ? "true" : "false"); }
  btn.addEventListener("click", function () { set(!header.classList.contains("open")); });
  document.querySelectorAll("#site-nav a").forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
})();
