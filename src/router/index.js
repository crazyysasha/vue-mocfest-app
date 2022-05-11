import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import WithHeaderLayout from "@/layouts/WithHeaderLayout.vue";
import WithoutHeaderLayout from "@/layouts/WithoutHeaderLayout.vue";

const routes = [
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/TestView.vue"),
    // layout ni shetta bervorsa ham bo`ladi, berilmagan taqdirda [WithHeaderLayout]ni default kabi olib ketadi, [app.vue] da belgilangan
    meta: { layout: WithHeaderLayout },
  },
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
    path: '/download',
    name: 'download',
    component: () => import(/* webpackChunkName: "event" */ '../views/OrderDownloadPdf.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "event" */ '../views/GalleryView.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: "/about",
    name: "about",

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
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FaqView.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import(/* webpackChunkName: "terms" */ '../views/TermsView.vue'),
    meta: { layout: WithHeaderLayout },
  },
  {
    path: '/orders/:id/status',
    name: 'order',
    meta: {
      layout: WithoutHeaderLayout
    },
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderStatusView.vue')
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
