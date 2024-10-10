<template>
  <div>
    <button @click="addNewProduct">Thêm mới sản phẩm</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["showForm"]);

const addNewProduct = () => {
  emit("showForm", false);
};
</script>

<style scoped></style>
