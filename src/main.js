/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-05 15:21:04
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Alert from '@/components/Alert'

Vue.config.productionTip = false

Vue.prototype.$Alert = Alert

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
