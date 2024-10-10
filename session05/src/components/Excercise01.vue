<template>
  <div>
    <button @click="handleChange">Hiện</button>
    <p v-if="isShow">Rikkei education</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const handleChange = () => {
  isShow.value = !isShow.value;
};
const isShow = ref(false);
</script>

<style></style>
