<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: #fff;
  width: 150px;
  height: 42px;
  border: 1px solid #d3d3d3;
  transition: 0.5s border-color;
  padding: 0;
}

button a {
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.5s color;
}

button:hover,
button:active {
  border: 1px solid #000;
}

button a img {
  margin-right: 10px;
}
</style>
