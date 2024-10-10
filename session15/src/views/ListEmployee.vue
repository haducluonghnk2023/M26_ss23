<template>
  <div>
    <h2>Danh sách Nhân viên</h2>
    <div class="employee-list">
      <div
        class="employee-card"
        v-for="employee in employees"
        :key="employee.id"
      >
        <p>Id: {{ employee.id }}</p>
        <p>Tên: {{ employee.name }}</p>
        <p>Vị trí: {{ employee.position }}</p>
        <router-link :to="`/employees/${employee.id}`"
          >Xem chi tiết</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
let employees = [
  { id: 1, name: "Nguyễn Văn A", position: "Quản lý" },
  { id: 2, name: "Nguyễn Văn B", position: "Kỹ sư" },
  { id: 3, name: "Nguyễn Văn C", position: "Chuyên viên" },
];
</script>

<style scoped>
.employee-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.employee-card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 200px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
