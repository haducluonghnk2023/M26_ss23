<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increaseCount">Click me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const increaseCount = () => {
  count.value += 1;
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
