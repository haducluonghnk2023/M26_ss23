<template>
  <div>
    <h1>bai 4</h1>
    <p>Count:{{ store.state.count }}</p>
    <button @click="increase">Increment</button>
    <button @click="decrease">Decrement</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const increase = () => {
  store.commit("increment");
};

const decrease = () => {
  store.commit("decrement");
};
</script>

<style></style>
