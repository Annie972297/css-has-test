<template>
  <div class="main-content">
    <h1>1. CSS :has() test</h1>
  </div>
  <div class="main-content">
    <div class="has-setting">
      <h1>2. CSS :has() test</h1>
    </div>
  </div>
</template>

<style scoped>
.main-content:has(.has-setting) {
  border: solid 3px green;
}
</style>
