<template>
  <div>
    <ul>
      <li>
        <input type="radio" v-model="gender" value="nam" />
        nam
      </li>
      <li>
        <input type="radio" v-model="gender" value="nữ" />
        nữ
      </li>
      <li>
        <input type="radio" v-model="gender" value="khác" />
        khác
      </li>
    </ul>
    <p>Giá trị giới tính được chọn:{{ gender }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const gender = ref("nam");
</script>

<style></style>
