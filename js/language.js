let translations = {};
let currentLang = "en";

fetch("translations.json")
  .then(res => res.json())
  .then(data => {
    translations = data;
    const userLang = navigator.language || navigator.userLanguage;
    currentLang = userLang.startsWith('es') ? 'es' : 'en';
    setLanguage(currentLang);
  });

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
