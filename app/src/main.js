import Vue from 'vue'
import App from './App'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store,
  components: { App }
})
