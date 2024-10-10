<template>
  <div>
    <p>Home</p>
    <div v-if="currentUser">
      <p>Email: {{ currentUser.email }}</p>
    </div>
    <div v-else>
      <p>User not found.</p>
    </div>
  </div>
</template>

<script setup>
const token = localStorage.getItem("token");
const data = localStorage.getItem("users");
const users = JSON.parse(data) || [];

const currentUser = users.find((user) => user.email === token);

console.log(currentUser);
</script>

<style></style>
