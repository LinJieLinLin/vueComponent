import Vue from "vue";
import Router from "vue-router";
import Home from "./views/demo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import(/* webpackChunkName: "demo" */ "./views/demo.vue")
    }
  ]
});
