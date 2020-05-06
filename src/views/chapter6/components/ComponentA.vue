<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 09:07:02
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <div>
    <h2>组件 A</h2>
    <ComponentB parentName="yishuihan yishuihan yishuihan"/>
  </div>
</template>

<script>
import ComponentB from './ComponentB'

export default {
  name: 'componentA',
  components: { ComponentB },
  data () {
    return {
      name: 'AAA'
    }
  },
  methods: {
    sayHello () {
      console.log('Hello, AAA')
    }
  }
}
</script>
