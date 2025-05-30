import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      no_account: "Don't have an account?",
      already_account: "Already have an account?",
      login: "Login",
      register: "Register"
    }
  },
  fr: {
    translation: {
      no_account: "Pas encore de compte ?",
      already_account: "Vous avez déjà un compte ?",
      login: "Connexion",
      register: "S’inscrire"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;




