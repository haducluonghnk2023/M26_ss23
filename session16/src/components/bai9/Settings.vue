<template>
  <div>
    <h2>Chỉnh sửa thông tin</h2>
    <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="name">Tên:</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      <div class="form-group">
        <label for="phone">Số điện thoại:</label>
        <input type="text" id="phone" v-model="formData.phone" />
      </div>
      <router-link to="/">home</router-link>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
});

const isSaved = ref(true);

const saveChanges = () => {
  console.log("Thông tin đã được lưu:", formData);

  isSaved.value = true;
};

const originalData = JSON.stringify({ ...formData });

const updateIsSaved = () => {
  isSaved.value = originalData === JSON.stringify(formData);
};

watch(formData, updateIsSaved, { deep: true });

onBeforeRouteLeave((to, from, next) => {
  if (!isSaved.value) {
    const confirmLeave = window.confirm(
      "Bạn có chắc muốn rời khỏi trang này? Mọi thay đổi chưa được lưu sẽ bị mất."
    );
    if (confirmLeave) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>

<style scoped>
.form-group {
  margin-bottom: 1em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
}

.form-group input {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
}

button {
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
