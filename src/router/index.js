import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import {
  ls
} from "../helpers";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "auth-layout",
    meta: {
      layout: "auth"
    },
    component: Auth
  },
  {
    path: "/analitics",
    name: "analitics-layout",
    meta: {
      layout: "analitics",
      requiresKey: true
    },
    component: () =>
      import("../views/Analitics.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentKey = ls("leadhit-site-id", "get");

  if (to.matched.some(r => r.meta.requiresKey) && currentKey === null) {
    console.error("Redirect to \"/\", Invalid leadhit-site-id key.");
    next("/");
  } else {
    next();
  }
});

export default router;