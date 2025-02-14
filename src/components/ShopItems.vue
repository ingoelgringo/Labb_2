<script setup>
import axios from "axios";
import { ref } from "vue";
import { useCounterStore } from "../store";

const store = useCounterStore();

const furnitures = ref(null);
const decorations = ref(null);
getFurnitures();
getHomeDecoration();

async function getFurnitures() {
  furnitures.value = (
    await axios.get("https://dummyjson.com/products/category/furniture")
  ).data.products;
}
async function getHomeDecoration() {
  decorations.value = (
    await axios.get("https://dummyjson.com/products/category/home-decoration")
  ).data.products;
}
</script>

<template>
  <div class="flex-container" v-if="furnitures !== null">
    <section :key="furniture.id" v-for="furniture in furnitures">
      <RouterLink :to="`/${furniture.id}`">
        <img :src="furniture.images[0]" alt="image" />
      </RouterLink>
      <div class="grid-info">
        <h3>{{ furniture.title }}</h3>
        <div class="flex-buy">
          <p>$ {{ furniture.price }}</p>
          <button @click="store.increment()">add to cart</button>
        </div>
      </div>
    </section>
    <section :key="decoration.id" v-for="decoration in decorations">
      <RouterLink :to="`/${decoration.id}`">
        <img :src="decoration.images[0]" alt="image" />
      </RouterLink>
      <div class="grid-info">
        <h3>{{ decoration.title }}</h3>
        <div class="flex-buy">
          <p>$ {{ decoration.price }}</p>
          <button @click="store.increment()">add to cart</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
}

img {
  background-color: #f0edec;

  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  min-width: 150px;
}
.flex-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, auto));
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
}
section {
  margin: 5px auto;
  padding: 10px;
  width: 200px;
  height: 350px;
  border: 5px solid #f8f7f6;
}
.flex-buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.grid-info {
  display: grid;
  grid-template-rows: 2fr 1fr;
}
button {
  padding: 5px;
}
</style>
