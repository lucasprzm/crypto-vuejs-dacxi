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
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
