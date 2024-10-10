<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="productDetail(product.id)">View</button>
        <button @click="removeProductById(product.id)">Delete</button>
        <button @click="updateProductById(product.id)">Edit</button>
      </li>
      <button @click="createProduct">Thêm</button>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const products = ref([]);
const selectedProduct = ref(null);

const getData = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  products.value = data;
};

onMounted(() => {
  getData();
});

const productDetail = async (id) => {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  const data = await response.json();
  selectedProduct.value = data;
  console.log("Product Details:", selectedProduct.value);
};

const removeProductById = async (id) => {
  const res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    products.value = products.value.filter((product) => product.id !== id);
    console.log(`Sản phẩm có id ${id} đã bị xóa`);
  } else {
    console.error("Không xóa được sản phẩm");
  }
};

const createProduct = async () => {
  const newProduct = { name: "New Product", price: 99.99 };
  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  getData();
};

const updateProductById = async (id) => {
  const updatedProduct = { name: "Updated Product", price: 199.99 };
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });
  getData();
};
</script>

<style></style>
