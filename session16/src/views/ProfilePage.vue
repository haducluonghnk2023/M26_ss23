<template>
  <div>
    <h1>Profile page</h1>
    <input type="text" v-model="userName" />
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
const userName = ref("");

onBeforeRouteLeave((to, from, next) => {
  if (userName) {
    const isConfirm = window.confirm("Bạn có xác nhận rời trang không!");
    if (isConfirm) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>

<style></style>
