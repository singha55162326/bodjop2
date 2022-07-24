import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
          light: {
            primary: "#00E676",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
          },
        },
      },
});
