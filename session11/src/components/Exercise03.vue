<template>
  <div>
    <h1>bai 3</h1>
    <p>{{ age }}</p>
    <p>{{ selectedCompany }}</p>
    <button @click="random">random</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const age = ref(1);
const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"];
const selectedCompany = ref(companies[0]);

const random = () => {
  age.value = Math.floor(Math.random() * 10) + 1;
};

watch(age, (newValue) => {
  const index = (newValue - 1) % companies.length;
  selectedCompany.value = companies[index];
});
</script>

<style></style>
