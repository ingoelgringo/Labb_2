<script setup>
import { useCounterStore } from "../store";

const store = useCounterStore();
const itemsInfo = [];
getCartItems();
console.log(itemsInfo);

function getCartItems() {
  for (id in store.cartItems) {
    itemsInfo.push(getCartItem(id));
  }
}

async function getCartItem(id) {
  store.cartItems.push(
    (await axios.get(`https://dummyjson.com/products/${id}`)).data.products
  );
}
</script>
<template>
  <section :key="cartItems.id" v-for="cartItem in store.cartItems">
    <RouterLink :to="`/${decoration.id}`">
      <img :src="decoration.images[0]" alt="image" />
    </RouterLink>
    <div class="grid-info">
      <h3>{{ decoration.title }}</h3>
      <div class="flex-buy">
        <p>$ {{ decoration.price }}</p>
        <button @click="store.addToCart(decoration.id)">add to cart</button>
      </div>
    </div>
  </section>
</template>
<style></style>
