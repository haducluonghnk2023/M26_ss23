<template>
  <div>
    <h1>header</h1>
    <p>Giá trị count:{{ store.state.count.count }}</p>
    <button @click="handleClick">Increase</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
console.log(store);
const handleClick = () => {
  store.commit("increase");
};
</script>

<style></style>
