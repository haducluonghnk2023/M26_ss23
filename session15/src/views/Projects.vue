<template>
  <div>
    <h3>Dự án</h3>
    <p>Danh sách dự án của nhân viên với Id: {{ employeeId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const employeeId = route.params.id;
</script>

<style></style>
