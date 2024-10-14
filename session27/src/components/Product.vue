<template>
  <div>
    <p>****************</p>
    <button @click="addProduct">Thêm sản phẩm</button>
    <h1>Danh sách sản phẩm !</h1>
    <ul>
      <li v-for="product in store.state.product.products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
// import { addProduct } from "@/api/productApi";

const store = useStore();
// muốn kích hoạt actions thì phải bắn dis patch

store.dispatch("getAllProduct");
const addProduct = () => {
  store.dispatch("addProduct", { data: { name: "Sản phẩm mới" } });
  //   store.dispatch("getAllProduct");
};

console.log("giá trị", store);
</script>

<style></style>
