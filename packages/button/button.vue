<template>
  <button
    :class="[
      'der-button',
      type ? 'der-button--' + type : '',
      size ? 'der-button--' + size : '',
      {
        'is-disabled': buttonDisabled,
        // 'is-loading': loading,
        // 'is-plain': plain,
        // 'is-round': round,
        // 'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled"
    @click = "handelClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, computed, createApp } from 'vue'
import { PropType } from 'vue'
type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type ComponentSize = PropType<'large' | 'medium' | 'small' | 'mini'>

interface IButtonProps {
  type: IButtonType
  size: PropType<ComponentSize>
  icon: string
  nativeType: string
  loading: boolean
  disabled: boolean
  plain: boolean
  autofocus: boolean
  round: boolean
  circle: boolean
}
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
  setup: (props, {emit}) => {
    const buttonDisabled = computed(() => {
      return props.disabled
    })
    function handelClick() {
      console.log('emit', emit);
    }
    return {
      buttonDisabled,
      handelClick
    }
  }
})
</script>

<style scoped lang="scss">

</style>
