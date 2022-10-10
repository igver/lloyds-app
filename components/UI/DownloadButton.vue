<template>
  <div class="download-button">
    <slot></slot>
  </div>
</template>

<style scoped>
.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #027fc1;
  width: 216px;
  height: 57px;
  transition: 0.3s background-color;
}

.download-button:hover {
  background-color: #fff;
  border: 1px solid #027fc1;
}

.download-button a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-transform: uppercase;
}

.download-button:hover a {
  color: #027fc1;
  text-decoration: none;
}
</style>
