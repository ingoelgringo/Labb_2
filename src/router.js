import { createRouter, createWebHashHistory } from "vue-router";

import ShopView from "./views/ShopView.vue";
import CartView from "./views/CartView.vue";
import ItemView from "./views/ItemView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ItemView,
      path: "/:id",
    },
    {
      component: ShopView,
      path: "/",
    },
    {
      component: CartView,
      path: "/cart",
    },
  ],
});
