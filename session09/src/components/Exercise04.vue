<template>
  <div>
    <p>Tiến độ hoàn thành:{{ inputValue }} %</p>
    <input type="range" v-model="inputValue" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref(50);
</script>

<style></style>
