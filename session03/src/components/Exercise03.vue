<template>
  <div>
    <input type="text" :disabled="isDisable" />
    <button @click="toggleDisable">
      {{ isDisable ? "Cho phép nhập" : "Chặn nhập" }}
    </button>
    <p>isDisable={{ isDisable }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDisable = ref(true);
const toggleDisable = () => {
  isDisable.value = !isDisable.value;
};
</script>

<style>
input {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
</style>
