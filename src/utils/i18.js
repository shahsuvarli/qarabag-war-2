import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "../assets/langs/az.json";
import en from "../assets/langs/en.json";
import ru from "../assets/langs/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    gb: { translation: en },
    ru: { translation: ru },
  },
  lng: "az",
  fallbackLng: "az",
  interpolation: { escapeValue: false },
});
