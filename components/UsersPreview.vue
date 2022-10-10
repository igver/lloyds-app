<template>
  <li>
    <nuxt-link :to="'/users/' + this.id">
      <user-box :class="userBoxClass">
        <div class="user-image">
          <img :src="picture" :alt="`${firstName} ${lastName}`" />
        </div>
        <div class="user-info">
          <h3>{{ firstName }} {{ lastName }}</h3>
        </div>
      </user-box>
    </nuxt-link>
  </li>
</template>

<script>
import UserBox from "@/components/UserBox.vue";

export default {
  components: {
    UserBox,
  },
  computed: {
    userBoxClass() {
      if (
        this.title === "ms" ||
        this.title === "mrs" ||
        this.title === "miss"
      ) {
        return "woman";
      } else {
        return "man";
      }
    },
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #5c5c5c;
  display: inline-block;
  width: 100%;
  height: 100%;
}

a:hover,
a:active {
  text-decoration: none;
  color: #5c5c5c;
}

a:hover .user-box.woman,
a:active li .user-box.woman {
  box-shadow: 0 0 5px 0 #ffbcbc;
  scale: 1.05;
}

a:hover .user-box.man,
a:active li .user-box.man {
  box-shadow: 0 0 5px 0 #6cacff;
  scale: 1.05;
}
/* 
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
}

.user-box .user-info h3 span {
  font-size: 14px;
  line-height: 18px;
} */
</style>
