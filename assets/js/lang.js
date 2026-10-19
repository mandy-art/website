// Sprachen, deren Inhalte fertig sind. Neue Sprache hier ergänzen, sobald sie online geht.
var SITE_LANGS = ["de"];
// Reihenfolge, falls die Browsersprache nicht verfügbar ist
var SITE_FALLBACK = ["en", "de"];
function siteLang() {
  try { var s = localStorage.getItem("site_lang"); if (s && SITE_LANGS.indexOf(s) > -1) return s; } catch (e) {}
  var ls = navigator.languages || [navigator.language || ""];
  for (var i = 0; i < ls.length; i++) { var l = (ls[i] || "").slice(0, 2).toLowerCase(); if (SITE_LANGS.indexOf(l) > -1) return l; }
  for (var j = 0; j < SITE_FALLBACK.length; j++) if (SITE_LANGS.indexOf(SITE_FALLBACK[j]) > -1) return SITE_FALLBACK[j];
  return SITE_LANGS[0];
}
function siteRedirect(suffix) { location.replace("/" + siteLang() + "/" + (suffix || "")); }
