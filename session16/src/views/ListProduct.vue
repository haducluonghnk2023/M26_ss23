<template>
  <div>
    <h1>List product</h1>
    <input type="text" v-model="keySearch" />
    <button @click="handleSearch">Tìm kiếm</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const keySearch = ref("");
const router = useRouter();
const route = useRoute();

//http://localhost:5173?q=value

const handleSearch = () => {
  router.push({
    query: { productName: keySearch.value },
  });
};

const valueSearch = computed(() => {
  return route.query.productName;
});
console.log(valueSearch);

// console.log(route.query.productName);
</script>

<style></style>
