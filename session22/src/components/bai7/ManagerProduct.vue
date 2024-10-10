<template>
  <div>
    <Header @showForm="openForm" />
    <Main @showFormEdit="openEditForm" @productUpdated="fetchProducts" />
    <Form ref="formComponent" @productUpdated="fetchProducts" />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Main from "./Main.vue";
import Form from "./Form.vue";
import { onMounted, ref } from "vue";

const formComponent = ref(null);

const openForm = (value) => {
  console.log(value);

  if (formComponent.value) {
    formComponent.value.openForm(value);
  }
};
const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  console.log(data);
};

const openEditForm = (product) => {
  if (formComponent.value) {
    formComponent.value.openForm(product);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style></style>
