import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter((value) => value != product);
    },
  },
  state: () => ({ cartItems: [] }),
});
