<template>
  <div>
    <h2>Square Calculator</h2>

    <input v-model.number="number" type="number" placeholder="Enter a number" />

    <p>Current Number: {{ number }}</p>
    <p>Square of Number: {{ square }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const number = ref(0);

const square = computed(() => number.value * number.value);

watch(number, (newValue, oldValue) => {
  console.log(`Number changed from ${oldValue} to ${newValue}`);
});
</script>

<style scoped>
input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  margin-bottom: 10px;
}
</style>
