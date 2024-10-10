<template>
  <div>
    <button v-if="isShow" @click="handleChange">Hiện</button>
    <button v-else>Ẩn</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const handleChange = () => {
  isShow.value = !isShow.value;
};
const isShow = ref(true);
</script>

<style></style>
