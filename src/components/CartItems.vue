// visar upp produkterna som finns i kundkorgen

<script setup>
import { useCounterStore } from "../store";

const store = useCounterStore();
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
