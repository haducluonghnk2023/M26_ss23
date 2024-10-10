<template>
  <div>
    <p>Trang thông tin chi tiết user</p>
    <div v-if="currentUser">
      <p>Id: {{ currentUser.id }}</p>
      <p>UserName: {{ currentUser.Username }}</p>
      <p>Email: {{ currentUser.email }}</p>
      <p>Address: {{ currentUser.address }}</p>
    </div>
    <div v-else>
      <p>Người dùng không tồn tại.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
const { id } = router.params;

let user = [
  {
    id: 1,
    Username: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    Username: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Hà Nam",
  },
  {
    id: 3,
    Username: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Ninh Bình",
  },
];

const currentUser = user.find((item) => item.id === parseInt(id));
</script>

<style></style>
