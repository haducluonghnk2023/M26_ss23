<template>
  <div>
    <h1>lifecycle!</h1>
    <!--
      React :
      1. Khởi tạo create : khởi tạo state , props
      2. mount : gắn kết đưa vào dom
      3. update : quá trình cập nhật thay đổi state (re-render)
      4. unmount : loại bỏ khỏi dom
      Vuejs cũng tương tự gồm 4 giai đoạn
      khởi tạo - gắn kết - cập nhật - loại bỏ
     -->
    <!-- 
    <life-cycle
      @click="handleClick"
      :onToggle="handleToggle"
      v-if="isShow"
    ></life-cycle> -->
    <exercise-01></exercise-01>
    <exercise-02></exercise-02>
    <exercise-03></exercise-03>
    <h1>bai4</h1>
    <exercise-04-parent></exercise-04-parent>
    <h1>bai 5</h1>
    <exercise-05-parent></exercise-05-parent>
    <h1>bao 6</h1>
    <exercise-06></exercise-06>
    <h1>bai 7</h1>
    <exercise-07></exercise-07>
    <h1>bai 8</h1>
    <exercise-08></exercise-08>
    <h1>bai 9</h1>
    <exercise-09-counter></exercise-09-counter>
    <h1>bai 10</h1>
    <exercise-10-clock></exercise-10-clock>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import LifeCycle from "./components/LifeCycle.vue";
import Exercise01 from "./components/Exercise01.vue";
import Exercise02 from "./components/Exercise02.vue";
import Exercise03 from "./components/Exercise03.vue";
import Exercise04Parent from "./components/Exercise04Parent.vue";
import Exercise05Parent from "./components/Exercise05Parent.vue";
import Exercise06 from "./components/Exercise06.vue";
import Exercise07 from "./components/Exercise07.vue";
import Exercise08 from "./components/Exercise08.vue";
import Exercise09Counter from "./components/Exercise09Counter.vue";
import Exercise10Clock from "./components/Exercise10Clock.vue";

// const isShow = ref(true);
// const handleClick = () => {
//   isShow.value = false;
//   console.log("clicked!");
// };
</script>

<style></style>
