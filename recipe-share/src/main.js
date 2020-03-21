import './firebase';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
