// Merkt sich die Sprachwahl, wenn jemand im Sprachumschalter klickt
document.querySelectorAll(".lang a[hreflang]").forEach(function (a) {
  a.addEventListener("click", function () { try { localStorage.setItem("site_lang", a.getAttribute("hreflang")); } catch (e) {} });
});
