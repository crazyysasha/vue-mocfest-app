import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import WithHeaderLayout from "@/layouts/WithHeaderLayout.vue";
import WithoutHeaderLayout from "@/layouts/WithoutHeaderLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // layout ni shetta bervorsa ham bo`ladi, berilmagan taqdirda [WithHeaderLayout]ni default kabi olib ketadi, [app.vue] da belgilangan
    meta: { layout: WithHeaderLayout },
  },
  {
    path: "/event/:slug",
    name: "event",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/EventView.vue"),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: '/events/:slug?',
    name: 'events',
    component: () => import(/* webpackChunkName: "event" */ '../views/EventsView.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "about" */ '../views/PartnersView.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      layout: WithoutHeaderLayout
    },
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
