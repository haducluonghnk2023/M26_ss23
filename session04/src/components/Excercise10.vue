<template>
  <div>
    <button @click="showContent">Hiển thị</button>
    <button @click="hideContent">Ẩn</button>

    <p v-if="isVisible">Nội dung được hiển thị</p>
    <p v-else>Nội dung bị ẩn</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(false);

const showContent = () => {
  isVisible.value = true;
};

const hideContent = () => {
  isVisible.value = false;
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
