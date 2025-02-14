<script setup>
import ShopoholicHeader from "./components/ShopoholicHeader.vue";
</script>

<template>
  <ShopoholicHeader :id="$route.params.id" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background-color: #f8f7f6;
  /* display: flex; */
}
</style>
