<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 18:15:40
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

 <template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>

<script>
import TreeNode from './Node.vue'
import { deepCopy } from '@/utils/index.js'

export default {
  name: 'Tree',
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildData()
  },
  watch: {
    data () {
      this.rebuildData()
    }
  },
  methods: {
    rebuildData () {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  }
}
</script>
