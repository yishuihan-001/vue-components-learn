<!--
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-05-06 16:26:13
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->

<template>
  <label>
    <span>
      <input
             v-if="group"
             type="checkbox"
             :disabled="disabled"
             :value="label"
             v-model="model"
             @change="change">
      <input
             v-else
             type="checkbox"
             :disabled="disabled"
             :checked="currentValue"
             @change="change">
    </span>
    <slot></slot>
  </label>
</template>
<script>
import Emitter from '@/mixins/emitter.js'
import { findComponentUpward } from '@/utils/find-components.js'

export default {
  name: 'iCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data () {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw new Error('Value should be trueValue or falseValue.')
      }
    }
  },
  mixins: [ Emitter ],
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
