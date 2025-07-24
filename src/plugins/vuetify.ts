/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "app",
    themes: {
      app: {
        dark: false,
        colors: {
          primary: "#0e1556",
          secondary: "#72d4beff",
          secondaryS: "#1d4de6",
          background: "#ffffff",
          text: "#0e1556",
        },
      },
    },
  },
});
