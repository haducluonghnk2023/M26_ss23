<template>
  <div>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["increment"]);

const handleClick = () => {
  emit("increment");
};
</script>

<style scoped></style>
