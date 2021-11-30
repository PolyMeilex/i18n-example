import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../../locales/en.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en, // set default locale messages
  },
});

export async function loadLanguageAsync(lang) {
  // If the language hasn't been loaded yet, download it
  if (!checkIfLoaded(lang)) {
    await loadLanguage(lang);
  }

  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
}

// Check if langs was downloaded in the past,
// quick and easy way to avoid downloading the same lang twice
function checkIfLoaded(lang) {
  return Object.keys(i18n.messages).includes(lang);
}

async function loadLanguage(lang) {
  const res = await fetch(`http://localhost:3000/lang?id=${lang}`);
  const json = await res.json();

  // Add downaloaded lang to the i18n object
  i18n.setLocaleMessage(lang, json);

  return json;
}
