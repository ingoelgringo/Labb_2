<script setup>
import { useCounterStore } from "../store";
import { defineProps } from "vue";

const props = defineProps({
  id: { type: String },
});
// console.log(props.id);
const store = useCounterStore();
</script>
<template>
  <header>
    <div class="center">
      <RouterLink style="text-decoration: none; color: inherit" to="/">
        <h1>Shop-o-Holic</h1>
      </RouterLink>
    </div>
    <div class="flex-container">
      <span>
        <RouterLink to="/cart">
          <img src="/assets/cart.svg" alt="" />
          <div class="inCart" v-if="store.inCart">
            {{ store.inCart }}
          </div>
        </RouterLink>
      </span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #e8e3dd;
  padding: 0px 15px;
}
.center {
  text-align: center;
  grid-column: 2/3;
}
.flex-container {
  display: flex;
  justify-content: end;
  align-items: center;
}

button {
  padding: 5px;
}

span {
  position: relative;
}

img {
  padding: none;
  width: 30px;
  color: black;
  margin: none;
}

.inCart {
  background-color: red;
  color: aliceblue;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  top: -5px;
  text-align: center;
  line-height: 15px;
}
</style>
