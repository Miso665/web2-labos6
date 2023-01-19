import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/NotFoundView.vue";
import ConverterView from "../views/ConverterView.vue";
import CarsView from "../views/CarsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "usedcars",
      component: CarsView,
    },
    {
      path: "/usedcars/:id?",
      name: "usedcars-id",
      component: CarsView,
    },
    {
      path: "/converter",
      name: "converter",
      component: ConverterView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
