<template>
  <div>
    <form @submit.prevent="addProduct">
      <div>
        <label for="productId">Mã sản phẩm:</label>
        <input v-model="product.productId" type="text" id="productId" />
      </div>

      <div>
        <label for="productName">Tên sản phẩm:</label>
        <input v-model="product.productName" type="text" id="productName" />
      </div>

      <div>
        <label for="price">Giá sản phẩm:</label>
        <input v-model="product.price" type="number" id="price" />
      </div>

      <div>
        <label for="quantity">Số lượng:</label>
        <input v-model="product.quantity" type="number" id="quantity" />
      </div>

      <button type="submit">Thêm mới</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const product = reactive({
  productId: "",
  productName: "",
  price: 0,
  quantity: 0,
});

const addProduct = () => {
  console.log("Dữ liệu sản phẩm:", product);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

form div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
