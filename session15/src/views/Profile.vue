<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <p>Id: {{ employeeId }}</p>
    <p>Tên: {{ employee.name }}</p>
    <p>Vị trí: {{ employee.position }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const employeeId = route.params.id;

const employees = [
  { id: 1, name: "Nguyễn Văn A", position: "Quản lý" },
  { id: 2, name: "Nguyễn Văn B", position: "Kỹ sư" },
  { id: 3, name: "Nguyễn Văn C", position: "Chuyên viên" },
];

const employee = employees.find((emp) => emp.id === parseInt(employeeId));
</script>

<style></style>
