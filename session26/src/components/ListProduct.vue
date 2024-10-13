<template>
  <div>
    <h1>bai 3</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>   
          <th>Ten san pham</th>
          <th>Gia</th>
          <th>So luong(kg)</th>
          <th>Chuc nang</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.getters.getProducts" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>

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
</script>

<style></style>
