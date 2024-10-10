<template>
  <div>
    <h1>bai3</h1>
    <h1>Count: {{ count }}</h1>

    <CountChildren @increment="updateCount" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CountChildren from "./CountChildren.vue";

const count = ref(0);

const updateCount = () => {
  count.value += 1;
};
</script>

<style scoped></style>
