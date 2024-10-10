<template>
  <v-form class="border rounded w-96 m-2 p-3">
    <h2 class="text-center p-4 text-3xl mb-3 font-bold">Đăng Nhập</h2>
    <v-text-field
      label="Email"
      placeholder="Nhập email vào đây"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      label="Mật khẩu"
      placeholder="Nhập mật khẩu vào đây"
      variant="outlined"
    ></v-text-field>

    <v-btn width="100%" color="blue">Đăng nhập</v-btn>
    <span class="p-4 flex gap-1 justify-center">
      <p class="font-thin">Chưa có tài khoản</p>
      <RouterLink to="/Register" class="cursor-pointer font-bold"
        >Đăng kí</RouterLink
      >
    </span>
  </v-form>
</template>

<script></script>

<style></style>
