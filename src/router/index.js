import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import SaleView from "../views/SaleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sale",
      name: "sale",
      component: SaleView,
    },
    {
      path: "/:id",
      name: "book",
      component: BookView,
    },
  ],
});

export default router;
