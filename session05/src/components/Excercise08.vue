<template>
  <div>
    <button @click="sortAsc">Tăng dần</button>
    <button @click="sortDesc">Giảm dần</button>

    <ul>
      <li v-for="(num, index) in numbers" :key="index">{{ num }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const numbers = ref([3, 5, 2, 8, 1, 9, 4]);

const sortAsc = () => {
  numbers.value.sort((a, b) => a - b);
};

const sortDesc = () => {
  numbers.value.sort((a, b) => b - a);
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #3498db;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

ul {
  margin-top: 10px;
}

li {
  list-style-type: none;
  margin: 5px 0;
}
</style>
