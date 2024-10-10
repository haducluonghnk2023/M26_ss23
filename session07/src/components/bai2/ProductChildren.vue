<template>
  <div>
    <p>id:{{ id }}</p>
    <p>name:{{ name }}</p>
    <p>price:{{ price }}</p>
    <p>quantity:{{ quantity }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["id", "name", "price", "quantity"]);
</script>

<style></style>
