<template>
  <div>
    <h1>Parent Component</h1>
    <button @click="toggleComponent">Toggle</button>
    <Exercise05Children v-if="isVisible" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Exercise05Children from "./Exercise05Children.vue";

const isVisible = ref(true);

const toggleComponent = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped></style>
