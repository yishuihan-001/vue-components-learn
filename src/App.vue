<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-05 15:21:04
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->
<template>
  <div id="app">
    <img class="vue-logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-logo {
  width: 50px;
  height: auto;
}
</style>
