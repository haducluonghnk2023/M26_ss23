<template>
  <div>
    <h1>Session09 : Data binding !</h1>
    <!-- <p>1. One-way Data binding</p>
    <p>hiển thị giá trị count :{{ count }}</p>
    <button @click="handleClick">Click</button>
    <p>*******************</p>
    <one-way></one-way>
    <p>*******************</p>
    <two-way></two-way> -->
    <h1>bai1</h1>
    <exercise01></exercise01>
    <h1>bai2</h1>
    <exercise02></exercise02>
    <h1>bai3</h1>
    <exercise03></exercise03>
    <h1>bai4</h1>
    <exercise04></exercise04>
    <h1>bai5</h1>
    <exercise05></exercise05>
    <h1>bai6</h1>
    <exercise06></exercise06>
    <h1>bai7</h1>
    <exercise07></exercise07>
    <h1>bai8</h1>
    <exercise08></exercise08>
    <h1>bai9</h1>
    <exercise09></exercise09>
    <h1>bai10</h1>
    <exercise10></exercise10>
    <h1>bai11_12</h1>
    <exercise11_12></exercise11_12>
  </div>
</template>

<script setup>
// import OneWay from "./components/OneWay.vue";
// import TwoWay from "./components/TwoWay.vue";
import Exercise01 from "./components/Exercise01.vue";
import Exercise02 from "./components/Exercise02.vue";
import Exercise03 from "./components/Exercise03.vue";
import Exercise04 from "./components/Exercise04.vue";
import Exercise05 from "./components/Exercise05.vue";
import Exercise06 from "./components/Exercise06.vue";
import Exercise07 from "./components/Exercise07.vue";
import Exercise08 from "./components/Exercise08.vue";
import Exercise09 from "./components/Exercise09.vue";
import Exercise10 from "./components/Exercise10.vue";
import Exercise11_12 from "./components/Exercise11_12.vue";
import { ref } from "vue";
const count = ref(0);
const handleClick = () => {
  count.value++;
};
// sự khác nhau lớn nhất với react là k re-render
</script>

<style></style>
