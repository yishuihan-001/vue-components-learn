/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-05 15:21:04
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
// chapter6: findComponents 系列方法
import chapter6 from '@/views/chapter6'
import chapter10 from '@/views/chapter10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/chapter6',
      name: 'chapter6',
      component: chapter6
    },
    {
      path: '/chapter10',
      name: 'chapter10',
      component: chapter10
    }
  ]
})
