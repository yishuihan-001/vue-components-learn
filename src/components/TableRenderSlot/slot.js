/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 15:21:53
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */

export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    column: Object,
    index: Number
  },
  render: (h, ctx) => {
    return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }))
  }
}
