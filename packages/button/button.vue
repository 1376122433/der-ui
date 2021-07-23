<template>
  <button
    :class="[
      'der-button',
      type ? 'der-button--' + type : '',
      size ? 'der-button--' + size : ''
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed, createApp } from 'vue'
type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type ComponentSize = PropType<'large' | 'medium' | 'small' | 'mini'>

export default defineComponent({
  name: 'DerButton',
  props: {
    type: String as IButtonType,
    size: String as ComponentSize,
    icon: String,
    nativeType: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  setup: (props) => {
    return {

    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
