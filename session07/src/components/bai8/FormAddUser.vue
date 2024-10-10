<template>
  <div v-if="isVisible" class="form-container">
    <form @submit.prevent="submitForm">
      <h2>Add New User</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" />
      </div>

      <button type="submit">Add User</button>
      <button type="button" @click="closeForm">Close</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close"]);

const name = ref("");
const email = ref("");
const address = ref("");

const closeForm = () => {
  emit("close");
};

const submitForm = () => {
  console.log("User added:", {
    name: name.value,
    email: email.value,
    address: address.value,
  });
  closeForm();
};
</script>

<style scoped>
.form-container {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 10px;
  background-color: #f9f9f9;
}
.form-group {
  margin-bottom: 10px;
}
button {
  margin-right: 10px;
}
</style>
