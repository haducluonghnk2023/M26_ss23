<template>
  <div>
    <p>Nhập tên:</p>
    <input type="text" v-model="name" placeholder="Nhập tên của bạn" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";

const name = ref("");

onMounted(() => {
  document.title = "Nhập tên:";
});

onUpdated(() => {
  document.title = name.value ? name.value : "Nhập tên:";
});
</script>

<style scoped></style>
