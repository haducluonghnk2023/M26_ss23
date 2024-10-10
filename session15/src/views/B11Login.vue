<template>
  <div class="form-container">
    <v-form class="border rounded w-96 m-2 p-3" @submit.prevent="handleLogin">
      <h2 class="text-center p-4 text-3xl mb-3 font-bold">Đăng Nhập</h2>
      <v-text-field
        v-model="email"
        label="Email"
        placeholder="Nhập email vào đây"
        variant="outlined"
        :error-messages="emailError"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Mật khẩu"
        placeholder="Nhập mật khẩu vào đây"
        type="password"
        variant="outlined"
        :error-messages="passwordError"
      ></v-text-field>

      <v-btn width="100%" color="blue" @click="handleLogin">Đăng nhập</v-btn>
      <span class="p-4 flex gap-1 justify-center">
        <p class="font-thin">Chưa có tài khoản</p>
        <RouterLink to="/Register" class="cursor-pointer font-bold"
          >Đăng kí</RouterLink
        >
      </span>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const router = useRouter();

const handleLogin = () => {
  emailError.value = "";
  passwordError.value = "";

  if (!email.value) {
    emailError.value = "Email không được để trống";
  }

  if (!password.value) {
    passwordError.value = "Mật khẩu không được để trống";
  }

  if (!emailError.value && !passwordError.value) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (user) {
      localStorage.setItem("token", user.email);
      router.push("/home");
    } else {
      passwordError.value = "Email hoặc mật khẩu không chính xác";
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.v-form {
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  padding: 20px;
}

h2 {
  color: #333;
}

.v-text-field {
  margin-bottom: 15px;
}

.v-text-field input {
  padding: 8px;
}

.v-btn {
  margin-top: 10px;
  border-radius: 5px;
}

.p-4 {
  margin-top: 10px;
}

.font-thin {
  color: #666;
}

.font-bold {
  color: blue;
}

.cursor-pointer {
  cursor: pointer;
}

.flex {
  display: flex;
}

.gap-1 {
  gap: 5px;
}

.justify-center {
  justify-content: center;
}
</style>
