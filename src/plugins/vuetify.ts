import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/src/locale/de";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  lang: {
    locales: { de },
    current: "de"
  },
  theme: {
    themes: {
      light: {
        primary: "#003b7e",
        secondary: "#f9ae00",
        accent: "#f9ae00",
        grey: "#666666",
        success: "#90c360",
        info: "#2196f3",
        warning: "#fb8c00",
        error: "#e52c12"
      }
    }
  }
});
