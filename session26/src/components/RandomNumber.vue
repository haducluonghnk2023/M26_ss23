<template>
  <div>
    <h1>bai 5</h1>
    <h3>Random Numbers:[{{ randomNumbers.join(", ") }}]</h3>
    <button @click="generateRandomNumber">Generate Random Number</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const randomNumbers = computed(() => store.getters.getRandomNumbers);

const generateRandomNumber = () => {
  store.dispatch("generateRandomNumber");
};
</script>

<style scoped></style>
