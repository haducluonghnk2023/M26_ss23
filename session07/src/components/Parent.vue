<template>
  <div>
    <h1>Parent</h1>
    <template>
      <Child :propName="message" :age="age" :fullName="fullName">
        <template #intro><h2>Học lập trình vuejs</h2></template>
        <template #slot-search><h3>Tìm hiểu về slot trong vuejs</h3></template>
        <p>giá trị nhận về từ component con {{ item }}</p>
      </Child>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Children.vue";
let message = ref("hello!");
let age = ref(20);
let fullName = ref("ming thu");
</script>

<style></style>
