// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/common.scss'
import './assets/style/main.scss'

Vue.config.productionTip = false

import api from './assets/js/interface'
// Vue.use(api);
import global from './assets/js/global'
Vue.use(global);
import utils from './assets/js/utils'
Vue.use(utils);

// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad,{
//     error:'./assets/images/default.png',
//     loading:'./assets/images/default.png'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
