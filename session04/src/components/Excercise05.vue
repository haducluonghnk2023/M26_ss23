<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - Quantity: {{ product.quantity }}
        <button @click="increaseQuantity(index)">Add 1</button>
      </li>
    </ul>
    <p>Total Quantity: {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  { name: "Product 1", quantity: 2 },
  { name: "Product 2", quantity: 1 },
  { name: "Product 3", quantity: 5 },
]);

const increaseQuantity = (index) => {
  products.value[index].quantity += 1;
};

const totalQuantity = computed(() => {
  return products.value.reduce((sum, product) => sum + product.quantity, 0);
});
</script>

<style scoped>
button {
  margin-left: 10px;
  padding: 5px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
