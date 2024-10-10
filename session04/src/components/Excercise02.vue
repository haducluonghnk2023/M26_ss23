<template>
  <div>
    <p>Company: {{ info.company }}</p>
    <p>Age: {{ info.age }}</p>
    <button @click="changeInfo">Change Info</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const info = reactive({
  company: "Rikkei Academy",
  age: 2,
});

const changeInfo = () => {
  info.company = "Rikkei Education";
  info.age = 1;
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
