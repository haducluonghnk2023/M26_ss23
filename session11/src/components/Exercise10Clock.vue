<template>
  <div>
    <p>Đồng hồ hiện tại: {{ formattedTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const currentTime = ref(new Date());
let intervalId = null;

const updateTime = () => {
  currentTime.value = new Date();
};

const formattedTime = computed(() => {
  const hours = String(currentTime.value.getHours()).padStart(2, "0");
  const minutes = String(currentTime.value.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.value.getSeconds()).padStart(2, "0");
  return `${hours} : ${minutes} : ${seconds}`;
});

onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin: 20px 0;
}
</style>
