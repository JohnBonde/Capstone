import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Landing from "../views/Landing.vue";
// @ts-ignore
import Login from "../views/Login.vue";
// @ts-ignore
import Register from "../views/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
