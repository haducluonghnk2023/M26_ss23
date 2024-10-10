<template>
  <div v-if="isShowForm" class="modal">
    <div class="modal-content">
      <h2>{{ isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm" }}</h2>
      <form @submit.prevent="isEditing ? updateProduct() : addProduct()">
        <div class="form-group">
          <label for="name">Tên sản phẩm</label>
          <input
            type="text"
            v-model="product.name"
            id="name"
            placeholder="Nhập tên sản phẩm"
          />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="image">Hình ảnh (url)</label>
          <input
            type="text"
            v-model="product.image"
            id="image"
            placeholder="Nhập URL hình ảnh"
          />
          <span v-if="errors.image" class="error">{{ errors.image }}</span>
        </div>
        <div class="form-group">
          <label for="price">Giá</label>
          <input
            type="number"
            v-model="product.price"
            id="price"
            placeholder="Nhập giá sản phẩm"
          />
          <span v-if="errors.price" class="error">{{ errors.price }}</span>
        </div>
        <div class="form-group">
          <label for="quantity">Số lượng</label>
          <input
            type="number"
            v-model="product.quantity"
            id="quantity"
            placeholder="Nhập số lượng"
          />
          <span v-if="errors.quantity" class="error">{{
            errors.quantity
          }}</span>
        </div>
        <div class="buttons">
          <button type="button" @click="closeModal" class="btn-close">
            Đóng
          </button>
          <button type="submit" class="btn-save">
            {{ isEditing ? "Cập nhật" : "Thêm" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isEditing = ref(false);
const isShowForm = ref(false);
const product = ref({
  name: "",
  image: "",
  price: null,
  quantity: null,
});
const errors = ref({});

const openForm = (productData = null) => {
  if (productData) {
    isEditing.value = true;
    product.value = { ...productData };
  } else {
    isEditing.value = false;
    product.value = { name: "", image: "", price: null, quantity: null };
  }
  isShowForm.value = true;
};
const addProduct = async () => {
  errors.value = {};

  if (!product.value.name) {
    errors.value.name = "Tên sản phẩm không được để trống";
  }
  if (!product.value.image) {
    errors.value.image = "URL hình ảnh không được để trống";
  }
  if (!product.value.price || product.value.price <= 0) {
    errors.value.price = "Giá sản phẩm phải lớn hơn 0";
  }
  if (!product.value.quantity || product.value.quantity <= 0) {
    errors.value.quantity = "Số lượng sản phẩm phải lớn hơn 0";
  }

  if (Object.keys(errors.value).length > 0) {
    return;
  }

  const newProduct = {
    name: product.value.name,
    image: product.value.image,
    price: product.value.price,
    quantity: product.value.quantity,
  };

  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("Lỗi khi thêm sản phẩm");
    }

    // const data = await response.json();
    closeModal();
  } catch (error) {
    errors.value.api = "Đã xảy ra lỗi khi thêm sản phẩm. Vui lòng thử lại.";
  }
};

const updateProduct = async () => {
  errors.value = {};

  if (!product.value.name) {
    errors.value.name = "Tên sản phẩm không được để trống";
  }
  if (!product.value.image) {
    errors.value.image = "URL hình ảnh không được để trống";
  }
  if (!product.value.price || product.value.price <= 0) {
    errors.value.price = "Giá sản phẩm phải lớn hơn 0";
  }
  if (!product.value.quantity || product.value.quantity <= 0) {
    errors.value.quantity = "Số lượng sản phẩm phải lớn hơn 0";
  }

  if (Object.keys(errors.value).length > 0) {
    return;
  }

  const updatedProduct = { ...product.value };
  try {
    const response = await fetch(
      `http://localhost:3000/products/${updatedProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );
    if (!response.ok) {
      throw new Error("Lỗi khi cập nhật sản phẩm");
    }
    product.value = { name: "", image: "", price: null, quantity: null };
    closeModal();
  } catch (error) {
    errors.value.api = "Đã xảy ra lỗi khi cập nhật sản phẩm. Vui lòng thử lại.";
  }
};

const closeModal = () => {
  isShowForm.value = false;
  isEditing.value = false;
};

defineExpose({ openForm });
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-close {
  background: #888;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-save {
  background: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-close:hover {
  background: #666;
}

.btn-save:hover {
  background: #0056b3;
}
.error {
  color: red;
  font-size: 0.875em;
}
</style>
