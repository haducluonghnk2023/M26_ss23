<template>
  <div>
    <p>Giới tính hiện tại: {{ selectedGender }}</p>
    <button @click="randomizeGender">Random gender</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Mảng chứa 3 giới tính
const genders = ["Nam", "Nữ", "Khác"];

// Giới tính mặc định là 'Nam'
const selectedGender = ref("Nam");

// Hàm để random giới tính
const randomizeGender = () => {
  const randomIndex = Math.floor(Math.random() * genders.length);
  selectedGender.value = genders[randomIndex];
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
