<template>
  <div>
    <button @click="addRandomNumber">Random number</button>

    <p>{{ numbers }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const numbers = ref([]);

const addRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  numbers.value.push(randomNum);
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 10px 0;
  background-color: white;
  color: black;
  border: 1px solid black;
  cursor: pointer;
}

button:hover {
  background-color: #eee;
}

p {
  font-size: 20px;
  font-weight: bold;
}
</style>
