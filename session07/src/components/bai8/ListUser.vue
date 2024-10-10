<template>
  <div>
    <h1>List of Users</h1>
    <button @click="toggleForm">Add user</button>

    <FormAddUser :isVisible="isFormVisible" @close="toggleForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormAddUser from "./FormAddUser.vue";

const isFormVisible = ref(false);

const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>
