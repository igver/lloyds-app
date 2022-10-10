<template>
  <div class="users-page">
    <div class="items">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 50px;
  font-weight: 600;
}

.items {
  padding: 0 25px;
}

.users-page {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 0;
}
</style>
