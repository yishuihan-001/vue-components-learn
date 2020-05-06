<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 19:31:51
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <div>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示信息 1'
      })
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      })
    }
  }
}
</script>
