<template>
    <div :ref="colRefs" v-for="item in arr">
        {{ item }}
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const resList = reactive([])
const arr = reactive([])
const colRefs = (ref: Element, refs: Record<string, any> = {}) => {
    resList.push(ref)
}
</script>
<style lang="scss" scoped>
</style>