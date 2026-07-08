let translations = {};
let currentLang = "en";

fetch("translations.json")
  .then(res => res.json())
  .then(data => {
    translations = data;

    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      currentLang = savedLanguage;
    } else {
      const userLang = navigator.language || navigator.userLanguage;
      currentLang = userLang.startsWith("es") ? "es" : "en";
    }

    setLanguage(currentLang);
  });

function setLanguage(lang) {
  currentLang = lang;

  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

const langEN = document.getElementById("lang-en");
const langES = document.getElementById("lang-es");

if (langEN) {
  langEN.addEventListener("click", () => setLanguage("en"));
}

if (langES) {
  langES.addEventListener("click", () => setLanguage("es"));
}
