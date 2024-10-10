<template>
  <div>
    <h1>bai4</h1>
    <h1>-------- TodoApp Component --------</h1>
    <p>Id to delete: {{ idToDelete }}</p>

    <TodoItem @deleteTodo="handleDelete" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const idToDelete = ref(null);

const handleDelete = (id) => {
  idToDelete.value = id;
};
</script>

<style scoped></style>
