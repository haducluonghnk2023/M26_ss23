<template>
  <div>
    <h1>bai 2</h1>
    <p>count:{{ count }}</p>
    <button @click="increment">Counter</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

onUpdated(() => {
  console.log("Dữ liệu đã thay đổi");
});
</script>

<style scoped></style>
