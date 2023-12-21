import { createRouter, createWebHistory } from "vue-router";
//import authGuard from "../services/AuthGuardService";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    // {
    //   path: "/admin",
    //   component: () => import("../views/Admin.vue"),

    // },
    {
      path: "/register",
      component: () => import("../views/register.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../views/signIn.vue"),
    },
    {
      path: "/feed",
      component: () => import("../views/feed.vue"),

    },
    // {
    //     path: "/:patchMatch(.*)",
    //     name: "NotFound",
    //     component: () => import("../views/NotFound.vue"),

    // }
  ],
});

export default router;