import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  actions: {
    increment() {
      this.inCart++;
    },
  },
  state: () => ({ inCart: 0 }),
});
