<template>
  <v-form class="border rounded w-96 m-2 p-3" @submit.prevent="handleRegister">
    <h2 class="text-center p-4 text-3xl mb-3 font-bold">Đăng ký</h2>
    <v-text-field
      v-model="email"
      label="Email"
      placeholder="Nhập email vào đây"
      variant="outlined"
      :error-messages="emailError"
    ></v-text-field>
    <v-text-field
         label="Mật khẩu"
      placeholder="Nhập mật khẩu vào đây"
      type="password"
      variant="outlined"
      :error-messages="passwordError"
    ></v-text-field>
    <v-text-field
      v-model="confirmPassword"
      label="Nhập lại mật khẩu"
      placeholder="Nhập lại mật khẩu vào đây"
      type="password"
      variant="outlined"
      :error-messages="confirmPasswordError"
    ></v-text-field>
    <v-btn width="100%" color="blue" @click="handleRegister">Đăng kí</v-btn>
    <span class="p-4 flex gap-1 justify-center">
      <p class="font-thin">Đã có tài khoản</p>
      <RouterLink to="/login" class="cursor-pointer font-bold"
        >Đăng nhập</RouterLink
      >
    </span>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emailError = ref("");
const passwordError = ref("");
const confirmPasswordError = ref("");
const router = useRouter();

const handleRegister = () => {
  emailError.value = "";
  passwordError.value = "";
  confirmPasswordError.value = "";

  if (!email.value) {
    emailError.value = "Email không được để trống";
  } else if (!isValidEmail(email.value)) {
    emailError.value = "Email không hợp lệ";
  } else if (isEmailTaken(email.value)) {
    emailError.value = "Email đã được đăng ký";
  }

  if (!password.value) {
    passwordError.value = "Mật khẩu không được để trống";
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = "Mật khẩu không khớp";
  }

  if (
    !emailError.value &&
    !passwordError.value &&
    !confirmPasswordError.value
  ) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email: email.value, password: password.value });
    localStorage.setItem("users", JSON.stringify(users));

    router.push("/b11login");
  }
};

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(email);
};

const isEmailTaken = (email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some((user) => user.email === email);
};
</script>

<style scoped>
.v-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.v-btn {
  width: 100%;
  margin-top: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.v-text-field {
  margin-bottom: 15px;
}

span {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

p {
  margin: 0;
}

.RouterLink {
  color: #1976d2;
  cursor: pointer;
}
</style>
