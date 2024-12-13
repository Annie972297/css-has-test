<template>
  <div class="main-para">
    <p>1. CSS :has() test</p>
  </div>
  <div class="main-para">
    <div class="has-setting">
      <p>2. CSS :has() test</p>
    </div>
  </div>
  <div>(The second paragraph is using :has() to add a border.)</div>
</template>

<style scoped>
.main-para:has(.has-setting) {
  border: solid 3px green;
}
</style>
