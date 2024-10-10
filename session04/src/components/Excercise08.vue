<template>
  <div>
    <h2>Shopping Cart</h2>

    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - Quantity: {{ product.quantity }}
        <button @click="increaseQuantity(index)">Add one</button>
      </li>
    </ul>

    <p>Total quantity in cart: {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  { name: "Product 1", quantity: 1 },
  { name: "Product 2", quantity: 2 },
  { name: "Product 3", quantity: 3 },
]);

const increaseQuantity = (index) => {
  products.value[index].quantity++;
};

const totalQuantity = computed(() => {
  return products.value.reduce((total, product) => total + product.quantity, 0);
});
</script>

<style scoped>
button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
