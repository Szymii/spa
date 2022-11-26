import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/Sale.vue";
import SaleView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "book",
      component: BookView,
    },
    {
      path: "/sale",
      name: "sale",
      component: SaleView,
    },
  ],
});

export default router;
