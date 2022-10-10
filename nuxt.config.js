export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: "static",

  head: {
    title:
      "Vedras - Help us combat this pandemic and make everyone return to normal as soon as possible",
    htmlAttrs: {
      lang: "hr",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      },
      {
        name: "http-equiv",
        content: "X-UA-Compatible",
        name: "content",
        content: "IE=edge",
      },
      // { hid: "description", name: "description", content: "" },
      // { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  // bodyAttrs: {
  //   class: "hidden",
  // },

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/bootstrap-vue", "~/plugins/directives.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
