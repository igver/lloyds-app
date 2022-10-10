<template>
  <div :class="page" class="user-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    page: {
      type: String,
      required: false,
      default: "users",
    },
  },
};
</script>

<style scoped>
.detail {
  padding: 25px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.26);
}

.user-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  min-height: 200px;
  transition: 0.5s box-shadow, 0.5s scale;
  background-color: #fff;
}
.user-box .user-image {
  border-radius: 50%;
  overflow: hidden;
  max-width: 80px;
  max-height: 80px;
  margin: 0 auto;
  margin-bottom: 15px;
}

.user-box .user-image img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
  object-position: center;
}

.user-box .user-info {
  text-align: center;
}
.user-box .user-info h3 {
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
</style>
