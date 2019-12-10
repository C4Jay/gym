
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import VueYoutube from 'vue-youtube'
import '@fortawesome/fontawesome-free/css/all.min.css'
 
Vue.use(VueYoutube)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

