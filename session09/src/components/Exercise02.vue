<template>
  <div>
    <input type="color" v-model="color" />
    <p>mã màu:{{ color }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref("#000000");
</script>

<style></style>
