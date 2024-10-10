<template>
  <div>
    <button
      v-for="(btn, index) in buttons"
      :key="index"
      :class="{ active: activeIndex === index + 1 }"
      @click="handleChange(index + 1)"
    >
      Button {{ index + 1 }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(1);
const buttons = [1, 2, 3];

const handleChange = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;
}

button.active {
  background-color: red;
  color: #fff;
}
</style>
