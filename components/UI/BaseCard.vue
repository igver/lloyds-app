<template>
  <div class="text-side">
    <slot></slot>
  </div>
</template>

<style scoped>
.cards .text-side {
  box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%);
  padding: 50px 20px;
  margin-bottom: 50px;
}

.cards .text-side h2 {
  font-size: 25px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  margin-bottom: 30px;
}

.service .text-side h2 {
  line-height: 32px;
}

.service ul {
  margin-bottom: 50px;
}

.service ul li {
  line-height: 1.5;
}

.cards .text-side p:last-child {
  margin-bottom: 0;
}

@media screen and (min-width: 701px) {
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

  .service .text-side h2 {
    line-height: 50px;
  }
}

@media screen and (min-width: 1011px) {
  .cards .text-side {
    width: 695px;
    height: 464px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    order: 2;
  }
}

@media screen and (min-width: 1680px) {
  .service .text-side ul {
    margin-bottom: 50px;
  }

  .service .text-side ul li {
    line-height: 1.5;
  }
}
</style>
