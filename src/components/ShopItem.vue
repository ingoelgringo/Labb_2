<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";
import { useCounterStore } from "../store";

const store = useCounterStore();
const props = defineProps({
  id: { type: String },
  searchWord: { type: String },
});

console.log(props.searchWord);

const item = ref(null);

getItem();

async function getItem() {
  item.value = (item.value = await axios.get(
    `https://dummyjson.com/products/${props.id}`
  )).data;
}
</script>
<template>
  <template v-if="item !== null && !props.searchWord">
    <div class="flex-container">
      <section>
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
            <button @click="store.addToCart(props.id)">add to cart</button>
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
