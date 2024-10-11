<template>
  <div>
    <h1>Header</h1>
    <p>Giá trị của count :{{ store.state.count }}</p>
    <button @click="increase">Increase</button>
    <button @click="handleClick">increase after 1s</button>
    <p>Count lấy theo getter :{{ store.getters.getCount }}</p>
    <ul>
      <li v-for="todo in store.state.todos" :key="todo.id">{{ todo.name }}</li>
    </ul>
    <button @click="getDoneTodo">Lấy ra các công việc đã hoàn thành</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
console.log(store);
const getDoneTodo = () => {
  console.log("các công việc đã hoàn thành", store.getters.doneTodos);
};

const increase = () => {
  store.commit("increment", {
    amount: 10,
  });
};
const handleClick = () => {
  store.dispatch("incrementAsync");
};
</script>

<style></style>
