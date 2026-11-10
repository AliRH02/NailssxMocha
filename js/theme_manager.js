
/* =========================
   THEME MANAGER
========================= */

// Change this to select your theme:
//
// "default"
// "christmas"

const ACTIVE_THEME = "christmas";

function applyTheme(theme) {

  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

  console.log("Active website theme:", theme);
}

// Apply selected theme
applyTheme(ACTIVE_THEME);
