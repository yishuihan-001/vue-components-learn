/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 19:28:35
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */

import Notification from './notification.js'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice ({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()

  instance.add({
    content: content,
    duration: duration
  })
}

export default {
  info (options) {
    return notice(options)
  }
}
