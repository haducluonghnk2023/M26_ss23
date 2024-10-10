<template>
  <div>
    <input v-model="inputValue" placeholder="Enter something..." />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const inputValue = ref("");

watch(inputValue, (newValue, oldValue) => {
  console.log(`Giá trị đầu vào đã thay đổi từ "${oldValue}" den "${newValue}"`);
});
</script>

<style scoped>
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}
</style>
