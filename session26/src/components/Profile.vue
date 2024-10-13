<template>
  <div>
    <h1>bai 1</h1>
    <h2>Thông tin cá nhân</h2>
    <p>Id: {{ store.getters.getUser.id }}</p>
    <p>Họ và tên: {{ store.getters.getUser.userName }}</p>
    <p>Giới tính: {{ store.getters.getUser.gender }}</p>
    <p>Ngày sinh: {{ store.getters.getUser.dateOfBirth }}</p>
    <p>Địa chỉ: {{ store.getters.getUser.address }}</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
// console.log(store);
</script>

<style></style>
