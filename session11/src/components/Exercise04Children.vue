<template>
  <div>
    <h2>Children Component</h2>
    <p>Received age: {{ age }}</p>
  </div>
</template>

<script setup>
import { watch, onUpdated, defineProps } from "vue";

const props = defineProps({
  age: {
    type: Number,
    required: true,
  },
});

onUpdated(() => {
  alert(`gia tri cua age da duoc thay doi :${props.age}`);
});
</script>

<style scoped></style>
