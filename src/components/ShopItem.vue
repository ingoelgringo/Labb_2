// visar extra info om produkterna samt söker efter produkter

<script setup>
import axios from "axios";
import { ref, defineProps, computed, watch } from "vue";
import { useCounterStore } from "../store";

const store = useCounterStore();
const props = defineProps({
  id: { type: String },
  searchWord: { type: String },
});

const item = ref(null);
const allProducts = ref([]);
const searchItems = ref([]);
const filter = computed(() => props.searchWord);

watch(filter, () => {
  searchSuggestions(filter.value);
});

getItem();
getAllProducts();

async function getItem() {
  item.value = (item.value = await axios.get(
    `https://dummyjson.com/products/${props.id}`
  )).data;
}

async function getAllProducts() {
  const homeDeco = (
    await axios.get("https://dummyjson.com/products/category/home-decoration")
  ).data.products;

  const furniture = (
    await axios.get("https://dummyjson.com/products/category/furniture")
  ).data.products;

  for (const product of homeDeco) {
    allProducts.value.push(product);
  }
  for (const product of furniture) {
    allProducts.value.push(product);
  }
}

function searchSuggestions(word) {
  word = word.toUpperCase();
  searchItems.value = [];

  for (const product of allProducts.value) {
    if (product.title.toUpperCase().includes(word)) {
      searchItems.value.push(product);
    }
  }
}
</script>

<template>
  <template v-if="item !== null && !props.searchWord">
    <div class="flex-container">
      <section :key="id">
        <img class="item" :src="item.images[0]" alt="image" />
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p>
            Dimensions: {{ item.dimensions.width }} *
            {{ item.dimensions.height }} *
            {{ item.dimensions.depth }}
          </p>
          <div>
            <p>$ {{ item.price }}</p>
            <button @click="store.addToCart(item)">add to cart</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  <template v-if="props.searchWord">
    <div class="flex-container" v-for="product in searchItems">
      <section :key="id">
        <img class="item" :src="product.images[0]" alt="image" />
        <div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p>
            Dimensions: {{ product.dimensions.width }} *
            {{ product.dimensions.height }} *
            {{ product.dimensions.depth }}
          </p>
          <div>
            <p>$ {{ product.price }}</p>
            <button @click="store.addToCart(product)">add to cart</button>
          </div>
        </div>
      </section>
    </div>
  </template>
</template>

<style scoped>
.item {
  background-color: #f0edec;

  width: 100%;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

section {
  display: flex;
  width: 600px;
}

img {
  width: auto;
}

p,
h3 {
  text-align: center;
}
</style>
