<template>
  <div>
    <input type="text" v-model="keySearch" />
    <button @click="handleSearch">Tìm kiếm</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const keySearch = ref("");
const router = useRouter();

const handleSearch = () => {
  router.push({
    query: { productName: keySearch.value },
  });
};
</script>

<style></style>
