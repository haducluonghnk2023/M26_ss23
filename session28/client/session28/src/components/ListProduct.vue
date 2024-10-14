<template>
  <div class="list-product">
    <h3>List Product</h3>

    <div class="item" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="details">
        <h5>
          {{ product.name }}
        </h5>
        <p>{{ product.description }}</p>
        <p>
          <strong>Total: {{ product.quantity }}</strong>
        </p>
      </div>
      <div class="actions">
        <input
          type="number"
          :value="product.cartQuantity"
          @change="updateCart(product, $event)"
          min="0"
        />
        <p>Price: $ {{ product.price }}</p>

        <button
          :disabled="product.quantity === 0 || product.cartQuantity === 0"
          @click="addToCart(product)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getAllProduct");
});

const products = computed(() => store.state.product.products);
const addToCart = (product) => {
  const a = { ...product };
  // console.log(a);
  store.dispatch("addToCart", a);
};
const updateCart = (product, event) => {
  const newQuantity = parseInt(event.target.value);
  // const newProductCart = {};
  console.log("new quantity", newQuantity);

  console.log("product", product);

  let diffQuantity = product.quantity - newQuantity;
  diffQuantity = diffQuantity + newQuantity - 1;
  // console.log(diffQuantity);

  product.cartQuantity = newQuantity;
  store.dispatch("updateProductQuantity", {
    productId: product.id,
    diffQuantity,
  });
};
</script>

<style scoped>
.list-product {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list-product h3 {
  text-align: left;
  margin-bottom: 20px;
  font-size: 24px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
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

.actions button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.actions button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.actions p {
  margin: 0;
  font-weight: bold;
}
</style>
