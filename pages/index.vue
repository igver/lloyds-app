<template>
  <div class="wrapper">
    <header class="hero">
      <div class="contact-info">
        <p>{{ $t("Contact us") }}</p>
        <a class="mail" href="mailto:info@vedras.hr">info@vedras.hr</a>
        <a class="phone" href="tel:+385989608920">+385 98 9608 920</a>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="lang"
          >{{ locale.name }}</nuxt-link
        >
      </div>

      <div class="logo">
        <img
          src="~assets/img/vedras-logo.svg"
          alt="Verdas logo"
          width="249"
          height="64"
        />
      </div>
      <hr class="logo-under" />

      <h1 v-in-viewport.once class="fade-up">On hold</h1>

      <div class="socials">
        <a href="#" target="_blank"
          ><img
            src="~assets/img/instagram-icon.svg"
            width="12"
            height="12"
            alt="Instagram icon"
          />
        </a>
        <a href="#" target="_blank"
          ><img
            src="~assets/img/facebook-icon.svg"
            width="12"
            height="12"
            alt="Faceboook icon"
          />
        </a>
        <a href="#" target="_blank"
          ><img
            src="~assets/img/linkedin-icon.svg"
            width="12"
            height="12"
            alt="Linkedin icon"
          />
        </a>
      </div>
    </header>

    <section class="promo">
      <div v-in-viewport.once class="left-side fade-up">
        <p>
          {{ $t("In the midst") }}
        </p>
        <img
          src="~assets/img/uvd-robots-logo.jpg"
          alt="UVD Robots logo"
          width="303"
          height="161"
        />
        <img
          src="~assets/img/boston-medical-logo.jpg"
          alt="Boston medical logo"
          width="367"
          height="64"
        />
        <p class="info">
          {{ $t("We want to") }}
        </p>
      </div>
      <div class="right-side">
        <img
          v-in-viewport.once
          class="right-side fade-in-static"
          src="~assets/img/dez-robot.png"
          alt="UV-dezinfekcijskog robot"
          width="599"
          height="534"
        />

        <div v-in-viewport.once class="blue-text fade-in-static delay-100">
          <p>{{ $t("kills 99") }}</p>
        </div>
      </div>
    </section>

    <section class="new-offer blue-background">
      <div class="text-side">
        <h2>{{ $t("New in our offer!") }}</h2>
        <p class="before-list">
          {{
            $t(
              "Secure robot disinfection and sterilization with applications in:"
            )
          }}
        </p>
        <ul>
          <li>
            {{
              $t(
                "Tourism (hotels, apartments, holiday homes, mobile homes ...)"
              )
            }}
          </li>
          <li>{{ $t("Industry (factories, warehouses, plants ...)") }}</li>
          <li>
            {{
              $t(
                "Public places (health centers, kindergartens, schools, colleges, offices, airports, stations, fitness gyms, shopping centers ...)"
              )
            }}
          </li>
        </ul>
        <p>
          {{
            $t(
              "Robots designed to clean operating rooms and laboratories are now disinfecting your business and private spaces."
            )
          }}
        </p>
        <a href="https://uvd.blue-ocean-robotics.com/" target="_blank">{{
          $t("More details about UVD Robots")
        }}</a>
      </div>
      <div v-in-viewport.once class="image-side fade-in-static delay-50"></div>
    </section>

    <base-card-section>
      <base-card v-in-viewport.once class="fade-up delay-50">
        <h2>#covidfree</h2>
        <p>
          {{
            $t(
              "By applying ultraviolet light (UV, UV-c), the UVD robot destroys the structure of DNA in all microorganisms."
            )
          }}
        </p>
        <p>
          {{
            $t(
              "With help of robots, we provide a service for cleaning large and small spaces, which in the shortest possible time and autonomously disinfect indoors where safety and “sense of cleanliness” must come first."
            )
          }}
        </p>
      </base-card>
      <div v-in-viewport.once class="image-side fade-in-static"></div>
    </base-card-section>

    <section class="clean blue-background">
      <div class="text-side">
        <h2>
          {{
            $t(
              "You want to provide a secure place to stay or work for your costumers or employees. Search no more and contact us now. Let your spaces be #covidfree"
            )
          }}
        </h2>
      </div>
      <div class="image-side"></div>
    </section>

    <base-card-section class="service">
      <base-card v-in-viewport.once class="fade-in-static delay-50">
        <h2>
          {{
            $t(
              "Our staff is ready to provide a service as soon as possible which includes:"
            )
          }}
        </h2>
        <ul>
          <li>{{ $t("delivery of UV disinfection robot") }}</li>
          <li>{{ $t("mapping of the rooms intended for disinfection") }}</li>
          <li>{{ $t("control of operation during disinfection") }}</li>
          <li>{{ $t("collection of the UV disinfection robot") }}</li>
        </ul>
        <download-button>
          <a href="/vedras_dezinfekcija_uvd_robotima.pdf">{{
            $t("Download brochure")
          }}</a>
        </download-button>
      </base-card>
      <div v-in-viewport.once class="image-side fade-up delay-25"></div>
    </base-card-section>

    <page-footer>
      <p>{{ $t("Contact us for more:") }}</p>
      <p v-in-viewport.once class="fade-up">
        <a href="mailto:info@vedras.hr">info@vedras.hr</a>
        {{ $t("or call us") }}
        <a href="tel:+385989608920">+385 98 9608 920</a>
      </p>
    </page-footer>
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import BaseCardSection from "@/components/UI/BaseCardSection.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import DownloadButton from "@/components/UI/DownloadButton.vue";

export default {
  name: "IndexPage",
  components: {
    PageFooter,
    BaseCardSection,
    BaseCard,
    DownloadButton,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  letter-spacing: -0.64px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #d8d2d2;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("~assets/img/hero-background.webp");
  background-size: cover;
  background-position: center;
  height: 347px;
  color: #fff;
  padding: 30px 20px;
}

.hero .contact-info {
  text-align: right;
  /*margin-bottom: 30px;*/
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
/*
.hero .contact-info a {
  color: #fff;
}

.hero .contact-info a:hover {
  text-decoration: underline;
  color: #d8d2d2;
}
*/
.hero .contact-info a.mail {
  padding: 0 10px;
}

.hero .contact-info a.phone {
  margin-right: 30px;
}

.hero .contact-info a.lang {
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
}

.hero .contact-info p {
  margin-bottom: 0;
}

.hero .logo img {
  margin-bottom: 0;
}

.hero .logo-under {
  margin: 30px 0 30px 0;
  width: 90%;
  border: unset;
  background-color: #fff;
  height: 2px;
}

.hero .socials {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hero .socials a {
  background-color: #fff;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  transition: 0.3s background-color;
}

.hero .socials a:nth-child(2) {
  margin: 0 15px;
}

.hero .socials a:hover {
  background-color: #d8d2d2;
}

.hero .socials a img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 400px) {
  .hero .contact-info a {
    font-size: 13px;
    line-height: 32px;
    letter-spacing: -0.29px;
  }
}

@media screen and (max-width: 600px) {
  .hero .contact-info p {
    display: none;
  }
}

@media screen and (min-width: 601px) {
  .hero .contact-info a.phone {
    margin-right: 50px;
  }

  .hero .contact-info p {
    font-weight: 700;
  }
}

@media screen and (min-width: 701px) {
  .hero {
    position: relative;
    padding-left: 10vw;
    padding-right: 10vw;
    justify-content: center;
  }

  .hero .contact-info {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 10vw;
    padding: 30px 0;
  }

  .hero .logo {
    margin-top: -5px;
  }

  .hero .logo-under {
    width: 437px;
  }
}

@media screen and (min-width: 1680px) {
  .hero {
    /* padding: 30px 13.125vw; */
    padding: 30px 13.125vw;
  }

  .hero .contact-info {
    margin-right: 13.125vw;
  }
}

/* PROMO SECTION */

.promo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.promo .left-side img {
  margin-bottom: 30px;
  max-width: 100%;
  height: auto;
}

.promo .right-side {
  display: flex;
  flex-direction: column;
}

.promo .right-side img {
  width: 100%;
  height: auto;
  margin-bottom: -70px;
  z-index: 10;
}

.promo .right-side .blue-text {
  background-color: #027fc1;
  width: 336px;
  padding: 52px 30px;
}

.promo .right-side .blue-text p {
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.43px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 0;
}

@media screen and (min-width: 801px) {
  .promo {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .promo .left-side {
    width: 50%;
  }

  .promo .left-side .info {
    width: 342px;
    margin-bottom: 0;
  }

  .promo .right-side .blue-text {
    margin-left: 30px;
    margin-top: -100px;
  }

  .promo .right-side img {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    margin-top: -50px;
  }
}

@media screen and (min-width: 1161px) {
  .promo .right-side .blue-text {
    margin-top: -130px;
  }

  .promo .right-side img {
    margin-top: -50px;
  }
}

@media screen and (min-width: 1301px) {
  .promo .right-side .blue-text {
    margin-top: -150px;
  }

  .promo .right-side img {
    margin-top: -50px;
  }
}

@media screen and (min-width: 1680px) {
  .promo {
    padding: 80px 13.125vw;
  }

  .promo .left-side {
    display: flex;
    flex-direction: column;
  }
}

/* NEW OFFER */

.new-offer {
  display: flex;
  flex-direction: column;
}
.new-offer .text-side {
  color: #fff;
  margin-bottom: 50px;
}
.new-offer .text-side h2 {
  font-size: 25px;
  line-height: 48px;
  font-weight: 700;
  letter-spacing: -0.64px;
  margin-bottom: 30px;
}

.new-offer .text-side p {
  line-height: 25px;
}

.new-offer .text-side p.before-list {
  margin-bottom: 0;
}
.new-offer .text-side ul {
  margin-bottom: 30px;
}
.new-offer .text-side ul li {
  line-height: 25px;
  font-weight: 700;
}
.new-offer .text-side a {
  color: #fff;
  font-weight: 700;
  line-height: 25px;
  display: block;
}

.new-offer .text-side a:hover {
  text-decoration: underline;
  color: #d8d2d2;
}

.new-offer .image-side {
  background-image: url("~assets/img/offer.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: auto;
  height: 36.2vh;
  min-height: 300px;
}

@media screen and (min-width: 701px) {
  .new-offer .text-side h2 {
    font-size: 36px;
  }

  .new-offer .text-side p {
    line-height: 32px;
  }

  .new-offer .text-side ul li {
    line-height: 32px;
  }

  .new-offer .text-side a {
    line-height: 32px;
  }
}

@media screen and (min-width: 1066px) {
  .new-offer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 0;
  }

  .new-offer .text-side {
    width: 40%;
    padding-right: 80px;
    margin-bottom: 0;
  }

  .new-offer .image-side {
    height: 574px;
    width: 42.96vw;
    margin-right: 80px;
  }
}

@media screen and (min-width: 1680px) {
  .new-offer {
    padding-left: 13.125vw;
  }
}

/* CARDS SECTION */

/* CLEAN SECTION */
.clean {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.clean .text-side {
  padding: 50px;
}

.clean .text-side h2 {
  font-size: 25px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  color: #fff;
  margin-bottom: 0;
}

.clean .image-side {
  background-image: url("~assets/img/robot-hospital.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  height: 55vh;
  min-height: 300px;
}

@media screen and (min-width: 701px) {
  .clean .text-side h2 {
    font-size: 36px;
    line-height: 55px;
    padding: 0 50px;
  }
}

@media screen and (min-width: 1011px) {
  .clean {
    flex-direction: row;
    align-items: center;
  }

  .clean .text-side {
    width: 50%;
    order: 2;
  }

  .clean .image-side {
    width: 50%;
    order: 1;
    height: 631px;
  }
}

@media screen and (min-width: 1541px) {
  .clean .image-side {
    background-position: left center;
  }
}
</style>
