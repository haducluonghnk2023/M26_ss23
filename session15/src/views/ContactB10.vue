<template>
  <div>
    <h3>Liên hệ</h3>
    <p>Thông tin liên hệ của nhân viên với Id: {{ employeeId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const employeeId = route.params.id;
</script>

<style></style>
