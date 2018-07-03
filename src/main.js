// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'

Vue.use(ElementUI)
Vue.use(VueClipboard)



router.beforeEach((to, from, next) => {
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App },

})
