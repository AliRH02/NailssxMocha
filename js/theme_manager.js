/* =========================
   THEME MANAGER
========================= */
const ACTIVE_THEME = "default";
function applyTheme(theme) {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  );
  console.log("Active website theme:", theme);
}

applyTheme(ACTIVE_THEME);
