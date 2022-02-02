import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import {store} from "./store/store"


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
