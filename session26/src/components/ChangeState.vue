<template>
  <div>
    <h1>bai 6</h1>
    <h3>{{ company }}</h3>
    <button @click="changeCompany">Change state</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const company = computed(() => store.getters.getCompany);

const changeCompany = () => {
  store.dispatch("changeCompany");
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
