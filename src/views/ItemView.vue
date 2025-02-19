// enskilda produkt vyn

<script setup>
import { ref } from "vue";
import ShopItem from "../components/ShopItem.vue";
import SearchBar from "../components/SearchBar.vue";

const searchWord = ref("");

function changeWord(value) {
  searchWord.value = value;
}
</script>

<template>
  <div class="searchBar">
    <SearchBar @searchUpdate="changeWord" />
  </div>
  <ShopItem :id="$route.params.id" :searchWord="searchWord.value" />
</template>

<style>
.searchBar {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
