<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 18:19:19
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <div>
    <tree :data="data" :showCheckbox="true"></tree>
  </div>
</template>

<script>
import Tree from '@/components/Tree/Tree'

export default {
  components: { Tree },
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>
