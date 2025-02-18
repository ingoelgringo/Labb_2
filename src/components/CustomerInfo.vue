<script setup>
const name = defineModel();
</script>
<template>
  <input v-model="name" />
  <div>{{ name }}</div>
</template>
<style></style>
