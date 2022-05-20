import { createRouter, createWebHistory } from "vue-router";
import HomeCoins from "../views/HomeCoins.vue";
import CoinDetail from "../views/CoinDetail.vue";
const routes = [
  {
    path: "/",
    name: "HomeCoins",
    component: HomeCoins,
  },
  {
    path: "/:coin",
    name: "CoinDetail",
    component: CoinDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
