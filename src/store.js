import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  actions: {
    addToCart(id) {
      this.inCart++;
      this.cartItems.push(id);
    },
  },
  state: () => ({ inCart: 0, cartItems: [] }),
});
