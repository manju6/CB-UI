import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import CreateBot from "./views/CreateBot.vue";
import ManageBot from "./views/ManageBot.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/createBot",
      component: CreateBot
    },
    {
      path: "/manageBot",
      component: ManageBot
    },
    {
      path: "/about",
      component: About
    }
  ]
});