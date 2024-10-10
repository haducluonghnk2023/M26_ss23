<template>
  <div>
    <label for=""> Ngày sinh:{{ birthDate }} </label><br />
    <input type="date" v-model="birthDate" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const birthDate = ref(null);
</script>

<style></style>
