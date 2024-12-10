<script setup>
import cssHasPseudo from 'css-has-pseudo/browser'
cssHasPseudo(document)
</script>

<template>
  <div class="body-wrap">
    <div class="main-content">
      <h1>1. CSS :has() test</h1>
    </div>
    <div class="main-content">
      <div class="has-setting">
        <h1>2. CSS :has() test</h1>
      </div>
    </div>
    <div>(The second title is using :has() to add a border.)</div>
  </div>
</template>

<style scoped>
.main-content:has(.has-setting) {
  border: solid 3px green;
}
</style>
