<template>
  <footer class="contact-box blue-background">
    <slot> </slot>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 20px;
}
footer p {
  font-size: 25px;
  line-height: 32px;
  color: #fff;
  margin-bottom: 0;
}

footer p a {
  font-weight: 700;
  display: block;
  color: #fff;
  padding: 0 2px;
}

@media screen and (min-width: 701px) {
  footer {
    padding: 120px 10vw;
  }

  footer p {
    font-size: 36px;
    line-height: 48px;
  }
}

@media screen and (min-width: 856px) {
  footer p a {
    display: inline;
  }
}
</style>
