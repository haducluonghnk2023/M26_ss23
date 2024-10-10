<template>
  <div>
    <h2>Đăng nhập tài khoản</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginData.email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="loginData.password" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <button type="submit">Đăng nhập</button>
    </form>

    <div v-if="loginMessage" class="message">
      {{ loginMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const loginData = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

const loginMessage = ref("");

const handleLogin = () => {
  clearErrors();

  if (!loginData.email) {
    errors.email = "Email không được để trống";
  }
  if (!loginData.password) {
    errors.password = "Mật khẩu không được để trống";
  }

  if (!errors.email && !errors.password) {
    checkCredentials();
  }
};

const checkCredentials = () => {
  const registeredUsers = JSON.parse(
    localStorage.getItem("registeredUsers") || "[]"
  );
  const user = registeredUsers.find(
    (registeredUser) =>
      registeredUser.email === loginData.email &&
      registeredUser.password === loginData.password
  );

  if (user) {
    loginMessage.value = "Đăng nhập thành công";
    resetForm();
  } else {
    loginMessage.value = "Đăng nhập thất bại";
  }
};
const resetForm = () => {
  loginData.email = "";
  loginData.password = "";
};

const clearErrors = () => {
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

.message {
  color: green;
  font-size: 16px;
  text-align: center;
}

.message.fail {
  color: red;
}
</style>
