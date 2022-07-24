import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import excel from 'vue-excel-export';
import 'vue2-filters';
import VueSweetalert2 from 'vue-sweetalert2';
import i18n from './i18n'
import VueExcelXlsx from "vue-excel-xlsx";
import VueRouterUserRoles from "vue-router-user-roles";
import { initializeApp } from 'firebase/app'
import 'firebase/compat/auth';
import 'sweetalert2/dist/sweetalert2.min.css';

import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
//import { createAuth0 } from '@auth0/auth0-vue';
//import { createApp } from "vue";

//const app = createApp(App); 

//app.use(
  //createAuth0({
    //domain: "singha.eu.auth0.com",
    //client_id: "TAhjFOjCzgak6sACBzDgeDtLIAxM0hvT",
   // redirect_uri: window.location.origin
  //})
//);



//app.mount('#app');

//const firebaseConfig = {
  //apiKey: "AIzaSyCqj_ZCKBJ2kT8qvHmdA2vWv6Pzt_vBViA",
  //authDomain: "backendbodjop.firebaseapp.com",
 // databaseURL: "https://backendbodjop-default-rtdb.firebaseio.com",
  //projectId: "backendbodjop",
  //storageBucket: "backendbodjop.appspot.com",
  //messagingSenderId: "717971907998",
  //appId: "1:717971907998:web:5dd985c1cec66004a4a28f",
  ///: "G-2B257JHJLM"
//};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
Vue.use(VueSweetalert2);
Vue.use(VueRouterUserRoles, { router });
let authenticate = Promise.resolve({ role: "guest" });
Vue.use(VueSweetalert2);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

authenticate.then(user => {
  Vue.prototype.$user.set(user);
})

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  vuetify,
  i18n,

  render: (h) => h(App)
}).$mount("#app");


//Vue.use(vue2Filters);
//Vue.filter("imageUrl", function (image) {
//return '${imageUrl}/${image}?timestamp=${Date.now()}';
//});
Vue.use(VueDatePicker);
Vue.use(VueExcelXlsx);

Vue.use(excel)