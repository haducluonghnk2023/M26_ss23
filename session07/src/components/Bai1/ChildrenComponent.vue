<template>
  <div>
    <p>childrenCompany :{{ propName }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["propName"]);
console.log(props);
</script>

<style></style>
