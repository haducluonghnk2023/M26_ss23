<template>
  <div>
    <h2>List product</h2>
    <div class="search">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        v-model="searchQuery"
      />
      <button @click="searchProduct">Tìm kiếm</button>
    </div>
    <div class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-item"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <button @click="viewDetail(product.id)">Xem chi tiết</button>
      </div>
    </div>
    <p>Trang danh sách sản phẩm</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router"; // Thêm useRouter và useRoute

const router = useRouter();
const route = useRoute(); // Lấy route hiện tại để lấy giá trị query

// Lấy từ khóa tìm kiếm từ URL nếu có
const searchQuery = ref(route.query.name || "");

// Danh sách sản phẩm
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

// Hàm lọc sản phẩm dựa trên từ khóa tìm kiếm

// Hàm xử lý tìm kiếm
const filteredProducts = computed(() =>
  products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
const searchProduct = () => {
  router.push({ query: { name: searchQuery.value } });
};

const viewDetail = (productId) => {
  router.push({ name: "ProductDetail", params: { id: productId } });
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.search input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.search button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.product-list {
  display: flex;
  justify-content: space-between;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  width: 22%;
  text-align: center;
}

.product-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

h2,
p {
  text-align: center;
}
</style>
