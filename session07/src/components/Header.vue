<template>
  <div>
    <h1>K23</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
const data = "k23_PTIT";
const emit = defineEmits(["messageSent"]);
const handleClick = () => {
  emit("messageSent", data);
};
</script>

<style></style>
