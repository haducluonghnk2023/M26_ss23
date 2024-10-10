<template>
  <div>
    <ul>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const hobbies = ref([]);
</script>

<style></style>
