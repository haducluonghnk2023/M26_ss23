<template>
  <div>
    <h1>Parent Component</h1>
    <h2>Age: {{ age }}</h2>
    <button @click="increaseAge">Increase age</button>
    <Exercise03Children :age="age" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Exercise03Children from "./Exercise04Children.vue";

const age = ref(0);

const increaseAge = () => {
  age.value++;
};
</script>

<style scoped></style>
