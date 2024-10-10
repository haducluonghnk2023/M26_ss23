<template>
  <div>
    <!-- <h1>Vue API</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUser(user.id)">Xóa</button>
        <button @click="updateUser(user.id)">Cập nhật</button>
      </li>
    </ul>

    <button @click="addUser">Thêm dữ liệu vào json-server</button> -->
    <ListProduct />
    <ManagerProduct />
  </div>
</template>

<script setup>
import ListProduct from "./components/bai2/ListProduct.vue";
import ManagerProduct from "./components/bai7/ManagerProduct.vue";
// import { onMounted, ref } from "vue";

// // khai báo hàm lấy dữ liệu từ json-server
// const users = ref([]);
// const getData = async () => {
//   const response = await fetch("http://localhost:3000/users");
//   const data = await response.json();
//   console.log(data);
//   users.value = data;
// };
// onMounted(() => {
//   getData();
// });
// //khai báo hàm thêm user
// const addUser = async () => {
//   const newUser = {
//     name: "Thu Trang",
//   };
//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newUser),
//   });
// };
// // hàm xóa user
// const deleteUser = async (id) => {
//   await fetch(`http://localhost:3000/users/${id}`, {
//     method: "DELETE",
//   });
//   getData();
// };
// // hàm cập nhật user
// /*
//   PATCH cập nhật từng trường
//   PUT cập nhật toàn bộ dữ liệu

// */
// const updateUser = async (id) => {
//   const updatedUser = {
//     name: "Thảo Phương",
//   };
//   await fetch(`http://localhost:3000/users/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedUser),
//   });
//   getData();
// };
</script>

<style scoped></style>
