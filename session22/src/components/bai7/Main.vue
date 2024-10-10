<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>
            <img :src="product.image" alt="Product Image" width="70" />
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>

          <td class="action">
            <button class="edit" @click="openEditForm(product)">Sửa</button>
            <button class="delete" @click="deleteProduct(product.id)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";

const products = ref([]);
const emit = defineEmits(["showForm"]);

const getData = async () => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  products.value = data;
};
onMounted(() => {
  getData();
});

const deleteProduct = async (id) => {
  const isConfirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");

  if (isConfirmed) {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getData();
  } else {
    console.log("Xóa sản phẩm đã bị hủy");
  }
};

const openEditForm = (product) => {
  emit("showFormEdit", product);
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: center;
  vertical-align: middle;
  padding: 10px;
}

td img {
  display: block;
  margin: 0 auto;
}

td button {
  margin: 24px auto;
  display: block;
}

table {
  margin: 0 auto;
}

thead {
  background-color: #f2f2f2;
}
.action {
  display: flex;
}

.edit {
  background-color: #4caf50;
  color: white;
}

.delete {
  background-color: #f44336;
  color: white;
}
</style>
