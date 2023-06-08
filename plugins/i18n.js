import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locales: ['en', 'vi', 'ja'],
    fallbackLocale: 'vi',
    silentTranslationWarn: true,
    messages: {
      'vi': require('~/locales/vi.json'),
      'ja': require('~/locales/ja.json'),
      'en': require('~/locales/en.json')
    }
  })
}
