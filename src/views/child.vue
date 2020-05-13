<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 23:34:16
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <div>
    <h2>{{ person.name }}</h2>
    <h2>{{ title }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeTitle">changeTitle</button>
  </div>
</template>

<script>

export default {
  components: { },
  props: {
    person: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    changeName () {
      this.person.name = 'shaoping'
    },
    changeTitle () {
      this.title = '事竟成'
    }
  }
}
</script>
