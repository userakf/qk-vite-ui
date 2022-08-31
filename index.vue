<template>
    <div :ref="colRefs" v-for="item in arr">
        {{ item }}
    </div>
</template>

<script setup lang="ts">
import { reactive,VNodeRef } from 'vue'
const resList = reactive<Element[]>([])
const arr = reactive([])
const colRefs = (ref, refs: Record<string, any> = {}) => {
    resList.push(ref)
}
</script>
<style lang="scss" scoped>
</style>