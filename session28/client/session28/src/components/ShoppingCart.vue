<template>
  <div class="shopping-cart">
    <h3>Shopping cart</h3>

    <div v-if="store.state.product.cart.length === 0">
      <p>Giỏ hàng trống</p>
    </div>

    <div
      class="cart-item"
      v-for="product in store.state.product.cart"
      :key="product.id"
    >
      <div class="image">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="details">
        <h5>{{ product.name }}</h5>
        <p>Quantity: {{ product.quantity }}</p>
        <input
          type="number"
          v-model.number="product.quantity"
          @change="updateQuantity(product.id, product.cartQuantity)"
          min="1"
        />
      </div>
      <div class="actions">
        <p>${{ product.price }}</p>
        <button @click="updateQuantity(product.id, product.cartQuantity)">
          Update
        </button>
        <button @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>

    <div class="subtotal" v-if="store.state.product.cart.length > 0">
      <h4>Subtotal</h4>
      <p>${{ subtotal }}</p>
    </div>

    <div class="message-update" v-if="updateSuccess">
      <p>Update product successfully</p>
    </div>
    <div class="message-delete" v-if="deleteSuccess">
      <p>Delete product successfully</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const updateSuccess = ref(false);
const deleteSuccess = ref(false);

const removeFromCart = (productId) => {
  deleteSuccess.value = true;
  setTimeout(() => {
    deleteSuccess.value = false;
  }, 2000);
};

const updateQuantity = (productId, quantity) => {
  updateSuccess.value = true;

  setTimeout(() => {
    updateSuccess.value = false;
  }, 2000);
};

onMounted(() => {
  store.dispatch("getAllProductInCart");
});

const subtotal = computed(() => {
  return store.state.product.cart.reduce((acc, product) => {
    return acc + product.price * product.cartQuantity;
  }, 0);
});
</script>

<style scoped>
.shopping-cart {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.shopping-cart h3 {
  text-align: left;
  margin-bottom: 20px;
  font-size: 24px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.image img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.details {
  flex: 1;
  margin-left: 20px;
}

.details h5 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.details p {
  margin: 5px 0;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.actions input {
  width: 50px;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.actions p {
  font-weight: bold;
  margin: 10px 0;
}

.actions button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
}

.actions button:hover {
  background-color: #0056b3;
}

.actions a {
  color: #6c63ff;
  cursor: pointer;
  text-decoration: none;
}

.actions a:hover {
  text-decoration: underline;
}

.subtotal {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.message-update {
  margin-top: 10px;
  padding: 10px;
  background-color: #e0ffd4;
  border-radius: 5px;
  text-align: center;
  color: #4caf50;
  font-weight: bold;
}
.message-delete {
  margin-top: 10px;
  padding: 10px;
  background-color: #e34d4d;
  border-radius: 5px;
  text-align: center;
  color: #e4ebeb;
  font-weight: bold;
}
</style>
