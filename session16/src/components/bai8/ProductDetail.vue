<template>
  <div>
    <h2>Trang chi tiết sản phẩm</h2>
    <div v-if="product">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p>Id: {{ product.id }}</p>
      <p>ProductName: {{ product.name }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Danh sách sản phẩm (có thể thay thế bằng API thực tế)
const products = [
  {
    id: 1,
    name: "Điện thoại Iphone 15 pro",
    price: "30.000.000 VND",
    image: "path_to_image_iphone15pro.png",
  },
  {
    id: 2,
    name: "Điện thoại Oppo Reno11 5G",
    price: "10.600.000 VND",
    image: "path_to_image_oppo.png",
  },
  {
    id: 3,
    name: "Điện thoại vivo Y17s",
    price: "3.300.000 VND",
    image: "path_to_image_vivo.png",
  },
  {
    id: 4,
    name: "Điện thoại Nokia 8210",
    price: "3.300.000 VND",
    image: "path_to_image_nokia.png",
  },
];

// Tìm sản phẩm theo ID từ URL
const product = computed(() => {
  return products.find((p) => p.id === parseInt(route.params.id));
});
</script>

<style scoped>
.product-image {
  width: 300px;
  height: auto;
}
</style>
