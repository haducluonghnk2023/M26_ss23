<template>
  <div>
    <button @click="block">Hiện</button>
    <button @click="none">Ẩn</button>
    <div v-show="showBlock">
      <p>Nội dung hiển thị</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showBlock = ref(false);

const block = () => {
  showBlock.value = true;
};

const none = () => {
  showBlock.value = false;
};
</script>

<style></style>
