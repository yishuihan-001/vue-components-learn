/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-08 10:44:47
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */

export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    renderRow: Function
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }

    return ctx.props.renderRow(h, params)
  }
}
