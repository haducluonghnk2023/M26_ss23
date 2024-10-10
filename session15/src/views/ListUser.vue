<template>
  <div class="user-list">
    <div class="user-card" v-for="item in user" :key="item.id">
      <p>Id: {{ item.id }}</p>
      <p>UserName: {{ item.Username }}</p>
      <p>Email: {{ item.email }}</p>
      <p>Address: {{ item.address }}</p>
      <router-link :to="`/userDetail/${item.id}`" class="button-link"
        >Xem chi tiết</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

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
</script>

<style scoped>
.user-list {
  display: flex;
  gap: 20px;
}

.user-card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 200px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.user-card p {
  margin: 5px 0;
}

/* CSS for the button-like router-link */
.button-link {
  display: inline-block;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-top: 10px;
}

.button-link:hover {
  background-color: #e0e0e0;
}

button {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
