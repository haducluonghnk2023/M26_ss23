<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Nhập từ khóa tìm kiếm"
    />

    <button @click="searchUsers">Tìm kiếm</button>

    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const users = ref([
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Tran Thi B" },
  { id: 3, name: "Le Van C" },
  { id: 4, name: "Phan Thi D" },
]);

const searchTerm = ref("");

const filteredUsers = computed(() => {
  if (searchTerm.value) {
    return users.value.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }
  return users.value;
});
</script>

<style scoped>
input {
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

ul {
  margin-top: 20px;
  list-style: none;
  padding-left: 0;
}

li {
  padding: 5px;
  background-color: #f8f9fa;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style>
