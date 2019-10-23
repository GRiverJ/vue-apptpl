import Vue from "vue";
import VueRouter from "vue-router";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(VueRouter).use(Vant);

import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Circle from "./components/Circle.vue";
import Level from "./components/Level.vue";
import Cart from "./components/Cart.vue";
import User from "./components/User.vue";
import Detail from "./components/Detail.vue";

import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";

import Main from "./components/Main.vue";

const routes = [
  {
    path: "/helloworld",
    component: HelloWorld,
    children: [
      { path: "/home", component: Home },
      { path: "/circle", component: Circle },
      { path: "/level", component: Level },
      { path: "/cart", component: Cart },
      { path: "/user", component: User }
    ]
  },
  { path: "/detail/:id", component: Detail, props: true },

  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
  { path: "/page3", component: Page3 },

  { path: "/main", component: Main },
];

const router = new VueRouter({
  routes: routes,
});

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");

if(window.location.hash == '#/'){
  router.push({ path: '/home'})
}

