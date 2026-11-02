// Shared dark/light theme. Reads the choice saved by the main site
// (or the device setting) and follows changes live.
(function () {
  var KEY = "odc.theme";
  function pick() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function apply() { document.documentElement.setAttribute("data-theme", pick()); }
  apply();
  window.addEventListener("storage", function (e) { if (e.key === KEY) apply(); });
  if (window.matchMedia) matchMedia("(prefers-color-scheme: light)").addEventListener("change", apply);
})();
