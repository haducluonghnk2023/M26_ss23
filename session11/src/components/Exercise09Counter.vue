<template>
  <div>
    <p>Counter: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const count = ref(0);
let intervalId = null;

const incrementCount = () => {
  count.value += 1;
};

onMounted(() => {
  intervalId = setInterval(incrementCount, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
