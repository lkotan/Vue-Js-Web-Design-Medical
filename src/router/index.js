import Vue from "vue"
import Router from "vue-router"

import Home from "../views/Home/index"
import About from "../views/About/index"

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/hakkimizda",
      name: "about",
      component: About
    },
  ],
  mode: "history"
})
