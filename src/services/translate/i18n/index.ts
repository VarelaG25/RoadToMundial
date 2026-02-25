import { createI18n, type I18n } from 'vue-i18n'
import es from './es.json'
import en from './en.json'

const i18n: I18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en,
  },
})

export default i18n
