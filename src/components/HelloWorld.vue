<template>
  <h1>{{ msg.value }}</h1>
  <der-button type="success" size="mini" @click="oc">点我</der-button>
</template>

<script lang="ts">
export default defineComponent({
  name: "HelloWorld"
})
</script>

<script lang="ts" setup>
import { ref, defineProps, defineComponent } from 'vue'
import type { PropType } from 'vue'
type titleInfo = {
  value: string;
  color: string
}
const props = defineProps({
  msg: {
      type: Object as PropType<titleInfo>,
      required: true
    }
})
const color = props.msg.color
function oc(e: any) {
  console.log('oc', e);
}
</script>

<style scoped>
h1 {
  color: v-bind("props.msg.color");
}
</style>
