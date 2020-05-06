<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 09:07:12
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <div>
    <h3>组件 B</h3>
    <p>{{ parentName }}</p>
  </div>
</template>
<script>
export default {
  name: 'componentB',
  data () {
    return {
      name: 'BBB'
    }
  },
  props: {
    parentName: {
      type: String,
      default: 'no no no'
    }
  },
  methods: {
    sayHello () {
      console.log('Hello, BBB')
    },
    sayParentName () {
      console.log('hello parent name: ' + this.parentName)
    }
  }
}
</script>
