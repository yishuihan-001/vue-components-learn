<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 23:06:16
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->
<template>
  <div>
    <h1>Slient</h1>
    <p :class="['aa', 'bb', { 'cc': false, 'dd': true }]">yishuihan yishuihan yishuihan</p>
    <Child :person="person" :title="title"/>
    <h4>{{ fullName }}</h4>
    <button @click="changeFullname">changeFullname</button>
    <h5>{{ bookName() }}</h5>
  </div>
</template>

<script>
import Child from './child'

export default {
  components: { Child },
  data () {
    return {
      person: {
        name: 'yangshaoping',
        age: 24
      },
      title: '有志者',
      firstName: 'Yang',
      lastName: 'Shaoping'
    }
  },
  computed: {
    classArr () {
      return [
        'a',
        'b',
        {
          'c': false,
          'd': true,
          'e': false,
          'f': true
        }
      ]
    },
    // fullName () {
    //   return `${this.firstName} ${this.lastName}`
    // }
    fullName: {
      get () {
        return `${this.firstName} -- ${this.lastName}`
      },
      set (val) {
        console.log('===> set', val)
        const names = val.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    changeFullname () {
      this.fullName = 'YANGSHAO PING'
    },
    bookName () {
      return '平凡的世界'
    }
  }
}
</script>
