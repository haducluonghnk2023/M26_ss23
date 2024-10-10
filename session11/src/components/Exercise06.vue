<template>
  <div>
    <p>{{ count }}</p>
    <button @click="handleChange">Increment</button>
  </div>
</template>

<script setup>
import { ref, onUpdated } from "vue";
const count = ref(0);
const handleChange = () => {
  count.value++;
};
onUpdated(() => {
  document.title = count.value;
});
</script>

<style></style>
