import './firebase';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from "./routes";
import { firestorePlugin } from 'vuefire';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Notifications from 'vue-notification'

Vue.use(Notifications);
Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
