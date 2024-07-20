import i18n, { reloadResources } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from '../public/locales/ua.json';
import ru from  '../public/locales/ru.json';

const  language = localStorage.getItem('i18nextLng') ||  "ua"
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'ua',
    lng:language,   
    debug: true,
    resources:{
        ua: {
            translation: ua
        },
        ru: {
            translation: ru
        }
    }
    
})
export default i18n;
