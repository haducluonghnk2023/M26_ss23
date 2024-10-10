<template>
  <div>
    <h2>Shopping Cart</h2>
    <input
      v-model.number="inputValue"
      type="number"
      placeholder="Enter price"
    />
    <button @click="addToCart">Add to cart</button>

    <p>Current Input Value: {{ inputValue }}</p>
    <p>Total Amount: {{ totalAmount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const inputValue = ref(0);
const totalAmount = ref(0);

const addToCart = () => {
  totalAmount.value += inputValue.value;
  inputValue.value = 0;
};

const totalAmountComputed = computed(() => totalAmount.value);
</script>

<style scoped>
input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}

h2 {
  margin-bottom: 20px;
}
</style>
