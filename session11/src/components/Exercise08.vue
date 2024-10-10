<template>
  <div>
    <p>Chiều rộng của cửa sổ: {{ windowWidth }} px</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style scoped></style>
