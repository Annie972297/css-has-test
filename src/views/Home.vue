<template>
  Home
  <div class="body-wrap">
    <Title></Title>
    <div>(The second title is using :has() to add a border.)</div>
    <br>
    <button @click="showAsyncComp">Click here to see an async component</button>
    <div v-if="show">
      <Paragraph></Paragraph>
    </div>
  </div>
</template>

<script setup>
import Title from '@/components/Title.vue'
import { ref, defineAsyncComponent } from 'vue'

const Paragraph = defineAsyncComponent(() => import('@/components/Paragraph.vue'))

const show = ref(false)
function showAsyncComp() {
  show.value = !show.value
}
</script>
