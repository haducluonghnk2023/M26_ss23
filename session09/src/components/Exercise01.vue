<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>giá trị:{{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref("");
</script>

<style></style>
