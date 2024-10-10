<template>
  <div>
    <h1>-------- TodoItem Component --------</h1>
    <button @click="handleDelete">Delete</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["deleteTodo"]);

const handleDelete = () => {
  emit("deleteTodo", 1);
};
</script>

<style scoped></style>
