<template>
  <div>
    <p>Các sỗ chẵn trong mảng:{{ evenNumbers }}</p>
  </div>
</template>

<script setup>
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr.filter((num) => num % 2 === 0);
</script>

<style></style>
