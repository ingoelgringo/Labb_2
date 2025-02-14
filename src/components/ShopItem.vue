<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";
import { useCounterStore } from "../store";

const store = useCounterStore();
const props = defineProps({
  id: { required: true, type: String },
});

const item = ref(null);

getItem();

async function getItem() {
  item.value = (item.value = await axios.get(
    `https://dummyjson.com/products/${props.id}`
  )).data;
}
</script>
<template>
  <template v-if="item !== null">
    <img class="item" :src="item.images[0]" alt="image" />
    <h3>{{ item.title }}</h3>
    <div>
      <p>$ {{ item.price }}</p>
      <button @click="store.increment()">add to cart</button>
    </div>
  </template>
</template>

<style scoped>
.item {
  background-color: #f0edec;

  width: 200px;
}
</style>
