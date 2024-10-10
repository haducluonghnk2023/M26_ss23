<template>
  <div class="container">
    <div class="todo">
      <h3 class="heading">Danh sach cong viec</h3>
      <form @submit.prevent="handlAddJob" class="header">
        <input v-model="inputValue" type="text" class="input" />
        <button type="submit" class="button button-add">
          {{ isEditing !== null ? "Save job" : "Add job" }}
        </button>
      </form>

      <ul v-for="item in listJob" class="list-item" :key="item.id">
        <li class="item">
          <div class="left">
            <input
              @change="handleUpdateStatus(item.id)"
              :checked="item.status"
              type="checkbox"
              :id="item.name"
            />
            <label
              :style="{ textDecoration: item.status ? 'line-through' : 'none' }"
              :for="item.name"
              >{{ item.name }}</label
            >
          </div>
          <div class="right">
            <button @click="handleEdit(item)" class="button button-update">
              Edit
            </button>
            <button @click="handleDelete(item)" class="button button-delete">
              Delete
            </button>
          </div>
        </li>
      </ul>

      <footer class="footer">
        <p>Cong viec hoan thanh:</p>
        <p>
          <b>{{ completeJobs }}</b
          >/ <b>{{ listJob.length }}</b>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue";

const inputValue = ref("");
const listJob = reactive(JSON.parse(localStorage.getItem("jobs") || "[]"));
const completeJobs = ref(0);
const isEditing = ref(null);

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const handlAddJob = () => {
  if (!inputValue.value) {
    alert("Vui long nhap ten cong viec");
    return;
  }

  if (isEditing.value !== null) {
    const index = listJob.findIndex((item) => item.id === isEditing.value);
    if (index !== -1) {
      listJob[index].name = inputValue.value;
      saveData("jobs", listJob);
    }
    isEditing.value = null;
    inputValue.value = "";
  } else {
    const findJobByName = listJob.find(
      (item) => item.name === inputValue.value
    );
    if (findJobByName) {
      alert(`Ten cong viec ${inputValue.value} da ton tai`);
      return;
    }
    listJob.push({
      id: Math.ceil(Math.random() * 10000000000000),
      name: inputValue.value,
      status: false,
    });
    inputValue.value = "";
    saveData("jobs", listJob);
  }
};

const handleUpdateStatus = (id) => {
  const findIndex = listJob.findIndex((item) => item.id === id);
  listJob[findIndex].status = !listJob[findIndex].status;
  saveData("jobs", listJob);
};

const handleDelete = (item) => {
  const isConfirmDelete = confirm(
    `Bạn có xác nhận muốn xóa công việc ${item.name} không ? `
  );
  if (isConfirmDelete) {
    const filterJobs = listJob.filter((jobItem) => jobItem.id !== item.id);
    listJob.length = 0;
    listJob.push(...filterJobs);
    saveData("jobs", listJob);
  }
};

const handleEdit = (item) => {
  isEditing.value = item.id;
  inputValue.value = item.name;
};

const updateStatusJob = () => {
  const filterJobCompletes = listJob.filter((item) => item.status);
  completeJobs.value = filterJobCompletes.length;
};

watchEffect(() => {
  updateStatusJob();
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo {
  width: 500px;
  background-color: #fff;
  border: 1px solid #dadada;
  padding: 20px 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: auto;
}

.heading {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-add {
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-add:hover {
  background-color: #45a049;
}

.list-item {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.left {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.label {
  font-size: 16px;
}

.button-delete {
  padding: 6px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.button-update {
  padding: 6px 10px;
  background-color: #16cf54;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-delete:hover {
  background-color: #810d0b;
}
.button-update:hover {
  background-color: #078e4f;
}

.footer {
  text-align: center;
  margin-top: 20px;
}
</style>
