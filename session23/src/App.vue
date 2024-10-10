<template>
  <div>
    <h1>Axios + API</h1>
    <!-- <table border="1" width="100%" height="300px" class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Sđt</th>
          <th>Ngày thêm</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td @click="getStudentById(user.id)">{{ user.student_name }}</td>
          <td>{{ user.student_email }}</td>
          <td>{{ user.student_address }}</td>
          <td>{{ user.student_phone }}</td>
          <td>{{ user.student_date_added }}</td>
          <td>
            <button @click="removeById(user.id)">Xóa</button>
            <button @click="updateById(user.id)">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="addUser">Them</button> -->
    <ListStudent />
    <!-- <Form /> -->
  </div>
</template>

<script setup>
import axios from "axios";
import ListStudent from "./components/bai7/ListStudent.vue";
// import Form from "./components/bai7/Form.vue";
// import { onMounted, ref } from "vue";
// const users = ref([]);
// // hàm lấy tất cả users
// const getAllUsers = async () => {
//   let res = await axios.get("http://localhost:3000/students");
//   users.value = res.data;
//   // console.log(res.data);
// };

// const addUser = async () => {
//   let newUser = {
//     student_name: "A",
//     student_email: "a@a.com",
//     student_address: "a",
//     student_phone: "123",
//     student_date_added: new Date(),
//   };
//   await axios.post("http://localhost:3000/students", newUser);
//   await getAllUsers();
// };

// const updateById = async (id) => {
//   let newUser = {
//     student_name: "B",
//     student_email: "b@b.com",
//     student_address: "b",
//     student_phone: "456",
//     student_date_added: new Date(),
//   };
//   await axios.put(`http://localhost:3000/students/${id}`, newUser);
//   await getAllUsers();
// };
// const getStudentById = async (id) => {
//   let res = await axios.get(`http://localhost:3000/students/${id}`);
//   console.log(res.data);
// };
// const removeById = async (id) => {
//   let res = await axios.get(`http://localhost:3000/students/${id}`);

//   const isConfirm = confirm(`Bạn có muốn xóa ${res.data.student_name} không?`);
//   if (isConfirm) {
//     await axios.delete(`http://localhost:3000/students/${id}`);
//     await getAllUsers();
//   }
// };
// onMounted(() => {
//   getAllUsers();
// });
</script>

<style scoped></style>
