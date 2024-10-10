<template>
  <div class="text-center">
    <v-pagination
      v-model="pages.page"
      :length="pages.length"
      rounded="circle"
      @input="updatePage"
    ></v-pagination>

    <v-pagination
      v-model="pages.page"
      :length="pages.length"
      rounded="0"
      @input="updatePage"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pages = ref({
  page: 1,
  length: 4,
  currentPage: 1,
});

const updatePage = (value) => {
  pages.value.page = value;

  if (pages.value.page === 4) {
    pages.value.currentPage = 2;
  } else {
    pages.value.currentPage = pages.value.page;
  }
};
</script>

<style>
.text-center {
  margin: 20px;
}
</style>
