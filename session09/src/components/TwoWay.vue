<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>giá trị inputValue:{{ inputValue }}</p>
    <button @click="handleClick">click</button>

    <ul>
      <p>type=checkbox</p>
      my hobbies
      <li>
        <input type="checkbox" v-model="hobbies" value="đá bóng" />
        đá bóng
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="cầu lông" />
        cầu lông
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="code" />
        code
      </li>
    </ul>
    <p>Giá trị các sở thích được chọn:{{ hobbies }}</p>

    <ul>
      <p>type=radio</p>
      my hobbies
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
const inputValue = ref("rikkei");
const handleClick = () => {
  inputValue.value = "PTIT_K23";
};
const hobbies = ref([]);
const gender = ref("nam");
</script>

<style></style>
