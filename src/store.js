import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(product) {
      console.log("before remove: ", this.cartItems);

      this.cartItems = this.cartItems.filter((value) => value != product);
      console.log("after remove: ", this.cartItems);
    },
  },
  state: () => ({ cartItems: [] }),
});
