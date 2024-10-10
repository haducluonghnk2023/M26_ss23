<template>
  <div>
    <h2>Đăng ký tài khoản</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="studentName">Tên sinh viên:</label>
        <input
          type="text"
          id="studentName"
          v-model="user.studentName"
          ref="studentNameInput"
        />
        <span v-if="errors.studentName" class="error">{{
          errors.studentName
        }}</span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="user.password" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <div>
        <label for="address">Địa chỉ:</label>
        <input type="text" id="address" v-model="user.address" />
      </div>

      <button type="submit">Đăng ký</button>
    </form>

    <div v-if="successMessage" class="success">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const user = reactive({
  studentName: "",
  email: "",
  password: "",
  address: "",
});

const errors = reactive({
  studentName: "",
  email: "",
  password: "",
});

const successMessage = ref("");

const studentNameInput = ref(null);

const existingEmails = ref(
  JSON.parse(localStorage.getItem("registeredUsers") || "[]")
);

onMounted(() => {
  studentNameInput.value.focus();
});

const handleSubmit = () => {
  clearErrors();

  if (!user.studentName) {
    errors.studentName = "Tên sinh viên không được để trống";
  }
  if (!user.email) {
    errors.email = "Email không được để trống";
  } else if (isEmailDuplicate(user.email)) {
    errors.email = "Email đã tồn tại";
  }
  if (!user.password) {
    errors.password = "Mật khẩu không được để trống";
  }

  if (!errors.studentName && !errors.email && !errors.password) {
    registerUser();
  }
};

const isEmailDuplicate = (email) => {
  return existingEmails.value.some(
    (registeredUser) => registeredUser.email === email
  );
};

const registerUser = () => {
  existingEmails.value.push({ ...user });
  localStorage.setItem("registeredUsers", JSON.stringify(existingEmails.value));

  user.studentName = "";
  user.email = "";
  user.password = "";
  user.address = "";

  successMessage.value = "Đăng ký tài khoản thành công";

  studentNameInput.value.focus();
};

const clearErrors = () => {
  errors.studentName = "";
  errors.email = "";
  errors.password = "";
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}

.error {
  color: red;
  font-size: 14px;
}

.success {
  color: green;
  font-size: 16px;
  text-align: center;
}
</style>
