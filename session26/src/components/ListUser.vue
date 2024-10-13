<template>
  <div>
    <h1>bai 2</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ten</th>
          <th>Gioi tinh</th>
          <th>Ngay sinh</th>
          <th>Dia chi</th>
          <th>Chuc nang</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.getters.getUsers" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.dateOfBirth }}</td>
          <td>{{ item.address }}</td>
          <td>
            <button @click="editEmployee(item)">Sửa</button>
            <button @click="deleteEmployee(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
console.log(store);
</script>

<style></style>
