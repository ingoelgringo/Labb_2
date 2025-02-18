<script setup>
import { useCounterStore } from "../store";
import { computed } from "vue";
import axios from "axios";

const store = useCounterStore();
console.log(store.cartItems);

// const itemsArray = computed(async () => {
//   const arr = [];
//   for (const id of store.cartItems) {
//     const product = await axios.get(`https://dummyjson.com/products/${id}`);
//     arr.push(product);
//   }
//   return arr;
//   // if (store.cartItems.length < itemsArray) {
//   //   getCartItems(store.cartItems);
//   // } else {
//   //   return [];
//   // }
// });
// console.log(itemsArray);

// getCartItems(store.cartItems);

// get products by id in array from store
// function getCartItems(arr) {
//   for (const id of arr) {
//     getCartItem(id);
//   }
// }

// async function getCartItem(id) {
//   const product = await axios.get(`https://dummyjson.com/products/${id}`);
//   itemsArray.value.push(product);
// }
</script>
<template>
  <section :key="product.id" v-for="product in store.cartItems">
    <RouterLink :to="`/${product.id}`">
      <img :src="product.images[0]" alt="image" />
    </RouterLink>
    <div class="grid-info">
      <h3>{{ product.title }}</h3>
      <div class="flex-buy">
        <p>$ {{ product.price }}</p>
        <button @click="store.removeFromCart(product)">remove from cart</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  width: 600px;
  align-items: center;
}
img {
  background-color: #f0edec;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
}
</style>
