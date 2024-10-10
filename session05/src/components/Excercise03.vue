<template>
  <div>
    <p v-if="userRole === 'admin'" @click="handleChange">admin</p>
    <p v-else-if="userRole === 'user'">user</p>
    <p v-else>Guest</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const handleChange = () => {
  isShow.value = isShow.value === "admin" ? "user" : "admin";
};
const userRole = ref("admin");
</script>

<style></style>
