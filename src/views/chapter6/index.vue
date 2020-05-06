<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 08:53:39
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->
<template>
  <div>
    <h1>Slient</h1>
    <ComponentA/>
    <ComponentB parentName="slient slient slient"/>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import { findComponentDownward } from '@/utils/find-components.js'

export default {
  components: { ComponentA, ComponentB },
  data () {
    return {}
  },
  mounted () {
    const comB = findComponentDownward(this, 'componentB')
    if (comB) {
      console.log(comB.$options.name) // componentB
      console.log(comB.name) // BBB
      comB.sayParentName() // hello parent name: slient slient slient
    }
  },
  methods: {}
}
</script>
