/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.socialLinkWhatsapp = process.env.VUE_APP_SOCIAL_WHATSAPP
Vue.prototype.socialLinkGithub = process.env.VUE_APP_SOCIAL_GITHUB
Vue.prototype.socialLinkInstagram = process.env.VUE_APP_SOCIAL_INSTAGRAM
Vue.prototype.socialLinkFacebook = process.env.VUE_APP_SOCIAL_FACEBOOK

/* Theme */
import Argon from './plugins/argon-kit'

Vue.use(Argon)

/* i18n */
let locale = localStorage.getItem('locale')
if (locale === null) {
  locale = navigator.language
  if (locale.includes('-')) {
    locale = locale.split('-')[0]
  }
}

import VueI18n from 'vue-i18n'

let configuredLanguages = ['sv', 'en']

configuredLanguages.push(...process.env.VUE_APP_ADDITIONAL_LANGUAGES.split(','))
configuredLanguages = uniq(configuredLanguages)

const messages = {}
const languages = []
for (let language of configuredLanguages) {
  try {
    messages[language] = require(`./assets/translations/${language}.json`)
    if (messages[language].app.language) {
      languages.push({
        id: language,
        label: messages[language].app.language,
      })
    }
  } catch (error) {
    console.error(`Could not load language '${language}': ${error}`)
  }
}

Vue.prototype.languages = languages

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'sv',
  messages,
})

/* Captcha */
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { uniq } from 'lodash'

Vue.use(VueReCaptcha, {
  siteKey: process.env.VUE_APP_RECAPTCHA_KEY,
})

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app')
