<template>
  <div class="todo-list">
    <div class="header">
      <h3>Quản lí công việc</h3>
    </div>
    <div class="banner">
      <input v-model="newJob" type="text" placeholder="Nhập tên công việc" />
      <p v-if="err" class="error">{{ err }}</p>
      <button @click="addJob">Thêm công việc</button>
    </div>
    <div class="filter-buttons">
      <button @click="filterJobs('all')">Tất cả</button>
      <button @click="filterJobs('completed')">Hoàn thành</button>
      <button @click="filterJobs('in-progress')">Đang thực hiện</button>
    </div>
    <div v-for="job in filteredJobs" :key="job.id" class="item">
      <div class="item1">
        <input
          type="checkbox"
          v-model="job.selected"
          @change="toggleComplete(job)"
        />
        <p :class="{ completed: job.selected }">
          {{ job.name }}
        </p>
      </div>
      <div class="btn">
        <button @click="editJob(job)">Sửa</button>
        <button @click="deleteJob(job)">Xóa</button>
      </div>
    </div>

    <div class="footer">
      <button @click="deleteSelectedJobs">Xóa công việc hoàn thành</button>
      <button @click="deleteAllSelectedJobs">Xóa tất cả công việc</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

const jobs = ref([]);
const newJob = ref("");
const err = ref("");
const filter = ref("all");

const getData = async () => {
  const res = await axios.get("http://localhost:3000/jobs");
  jobs.value = res.data.map((job) => ({
    ...job,
    selected: job.selected,
  }));
  console.log(jobs.value);
};

const deleteJob = async (job) => {
  const isConfirm = confirm(`Bạn có muốn xóa công việc ${job.name} không ?`);
  if (isConfirm) {
    await axios.delete(`http://localhost:3000/jobs/${job.id}`);
    getData();
  }
};

const addJob = async () => {
  if (!newJob.value.trim()) {
    err.value = "Vui lòng nhập tên công việc!";
    return;
  }
  err.value = "";

  const job = {
    name: newJob.value,
    selected: false,
  };

  await axios.post("http://localhost:3000/jobs", job);
  getData();
  newJob.value = "";
};

const toggleComplete = async (job) => {
  job.selected = job.selected;
  await axios.patch(`http://localhost:3000/jobs/${job.id}`, {
    selected: job.selected,
  });
};

const deleteSelectedJobs = async () => {
  const selectedJobs = jobs.value.filter((job) => job.selected);
  const isConfirm = confirm(
    `Bạn có muốn xóa ${selectedJobs.length} công việc hoàn thành không?`
  );

  if (isConfirm) {
    await Promise.all(
      selectedJobs.map((job) =>
        axios.delete(`http://localhost:3000/jobs/${job.id}`)
      )
    );
    getData();
  }
};

const deleteAllSelectedJobs = async () => {
  const isConfirm = confirm(
    `Bạn có chắc chắn muốn xóa tất cả công việc không?`
  );

  if (isConfirm) {
    await Promise.all(
      jobs.value
        .filter((job) => job.selected)
        .map((job) => axios.delete(`http://localhost:3000/jobs/${job.id}`))
    );
    getData();
  }
};

const filterJobs = (status) => {
  filter.value = status;
};

const filteredJobs = computed(() => {
  if (filter.value === "completed") {
    return jobs.value.filter((job) => job.selected);
  } else if (filter.value === "in-progress") {
    return jobs.value.filter((job) => !job.selected);
  }
  return jobs.value;
});

onMounted(() => {
  getData();
});
</script>

<style scoped>
.todo-list {
  background-color: white;
  width: 400px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.todo-list .header {
  text-align: center;
  margin-bottom: 20px;
}
.error {
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
}

.todo-list h3 {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.todo-list .banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.todo-list input[type="text"] {
  width: 100%;
  padding: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}

.todo-list button {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.todo-list button:hover {
  background-color: #0056b3;
}

.todo-list .filter-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-buttons button {
  width: 30%;
  background-color: #f2f2f2;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.filter-buttons button.active {
  background-color: #007bff;
  color: white;
  border: none;
}

.todo-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ddc5c5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.todo-list .item .item1 {
  display: flex;
  gap: 5px;
}
.todo-list .item .item1 p {
  margin-top: 9px;
}

.todo-list .item p {
  margin: 0;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.todo-list .item .completed {
  text-decoration: line-through;
  color: #888;
}

.todo-list .item .btn {
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  background-color: #f3e8e8;
}

.todo-list .item .btn button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.todo-list .item .btn button.edit {
  color: #ffc107;
}

.todo-list .item .btn button.delete {
  color: #dc3545;
}

.todo-list .footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
}

.todo-list .footer button {
  background-color: #dc3545;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.todo-list .footer button:hover {
  background-color: #c82333;
}
</style>
