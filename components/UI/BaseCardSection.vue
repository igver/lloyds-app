<template>
  <section :class="subSection" class="cards">
    <slot></slot>
  </section>
</template>

<style scoped>
.cards {
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
}

.cards .image-side {
  background-image: url("~assets/img/robot.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
  height: 42.96vh;
  min-height: 300px;
}

.service .image-side {
  background-image: url("~assets/img/robot-in-use.jpg");
  height: 64.26vh;
  background-position: center 80%;
}

@media screen and (min-width: 701px) {
  .cards {
    padding: 160px 10vw;
  }

  .cards .text-side {
    padding: 50px 80px;
  }

  .service .text-side {
    padding: 50px 50px;
  }

  .cards .text-side h2 {
    font-size: 36px;
    line-height: 48px;
  }
}

@media screen and (min-width: 1011px) {
  .cards {
    flex-direction: row;
    column-gap: 20px;
  }

  .cards.service .text-side {
    width: 39vw;
    height: 64.26vh;
    padding: 0 50px;
  }

  .cards .text-side {
    width: 695px;
    height: 464px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    order: 2;
  }

  .cards .image-side {
    width: 695.13px;
    height: auto;
    order: 1;
  }
}

@media screen and (min-width: 1680px) {
  .cards {
    padding: 160px 13.125vw;
  }
}

/* SERVICE SECTION */

.service .text-side h2 {
  line-height: 32px;
}

.service .image-side {
  background-image: url("~assets/img/robot-in-use.jpg");
  height: 64.26vh;
  background-position: center 80%;
}

.service {
  padding: 40px 20px;
}

.service .text-side a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  display: inline;
}

@media screen and (min-width: 701px) {
  .service .text-side {
    padding: 50px 50px;
  }
  .service {
    padding: 120px 10vw;
    align-items: center;
  }

  .service .text-side h2 {
    font-size: 36px;
    line-height: 50px;
  }

  .service .image-side {
    width: 50%;
  }
}

@media screen and (min-width: 1011px) {
  .service {
    justify-content: space-between;
  }

  .service .text-side {
    order: 1;
    width: 39vw;
    height: 64.26vh;
    margin-right: 50px;
    padding: 0 50px;
  }

  .cards.service .image-side {
    order: 2;
    height: 64.26vh;
    width: 30.21vw;
  }
}

@media screen and (min-width: 1680px) {
  .service {
    padding: 120px 13.125vw;
  }

  .service {
    column-gap: 80px;
  }

  .service .text-side {
    margin-right: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    subSection: {
      section: String,
      required: false,
      default: "",
    },
  },
};
</script>
