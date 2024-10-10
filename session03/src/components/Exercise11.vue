<template>
  <div>
    <ul>
      <li v-if="active == true" class="active"></li>
      <li v-else class="disActive"></li>
    </ul>
    <button @click="pop">click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const active = ref(true);

const pop = () => {
  active.value = !active.value;
  console.log(active.value); 
};
</script>

<style>
.active {
  background-color: rgb(17, 255, 0);
  padding: 10px;
  width: 200px;
  height: 100px;
  transition: background-color 0.3s ease;
}
.disActive {
  background-color: rgb(54, 147, 181);
  width: 200px;
  height: 100px;
  transition: background-color 0.3s ease;
}
</style>
