<template>
  <div class="ap">
    <ListProduct />
    <ShoppingCart />
  </div>
</template>

<script setup>
import ListProduct from "./components/ListProduct.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<style scoped>
.ap {
  display: flex;
}
</style>
