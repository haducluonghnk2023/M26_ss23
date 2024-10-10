<template>
  <div>
    <p>watchers</p>
    <button @click="handleIncrease">increase</button>
    <h1>Bai 1</h1>
    <Excercise01 />
    <h1>Bai 2</h1>
    <Excercise02 />
    <h1>Bai 3</h1>
    <Excercise03 />
    <h1>Bai 4</h1>
    <Excercise04 />
    <h1>Bai 5</h1>
    <Excercise05 />
    <h1>Bai 6</h1>
    <Excercise06 />
    <h1>Bai 7</h1>
    <Excercise07 />
    <h1>Bai 8</h1>
    <Excercise08 />
    <h1>Bai 9</h1>
    <Excercise09 />
    <h1>Bai 10</h1>
    <Excercise10 />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Excercise01 from "./components/Excercise01.vue";
import Excercise02 from "./components/Excercise02.vue";
import Excercise03 from "./components/Excercise03.vue";
import Excercise04 from "./components/Excercise04.vue";
import Excercise05 from "./components/Excercise05.vue";
import Excercise06 from "./components/Excercise06.vue";
import Excercise07 from "./components/Excercise07.vue";
import Excercise08 from "./components/Excercise08.vue";
import Excercise09 from "./components/Excercise09.vue";
import Excercise10 from "./components/Excercise10.vue";

const number = ref(1);
watch(number, (newValue, OldValue) => {
  console.log("watch duoc goi");
  console.log("Gia tri truoc khi thay doi:", OldValue);
  console.log("Gia tri sau khi thay doi:", newValue);
});
const handleIncrease = () => {
  number.value++;
};
</script>

<style></style>
