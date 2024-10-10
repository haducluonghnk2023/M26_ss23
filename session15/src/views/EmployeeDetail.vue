<template>
  <div>
    <h2>Chi tiết Nhân viên</h2>
    <nav>
      <router-link :to="`/employees/${employeeId}/profile`"
        >Thông tin cá nhân</router-link
      >
      <router-link :to="`/employees/${employeeId}/projects`">Dự án</router-link>
      <router-link :to="`/employees/${employeeId}/contact`"
        >Liên hệ</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const employeeId = route.params.id;
</script>

<style></style>
