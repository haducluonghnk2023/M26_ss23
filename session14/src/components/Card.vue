<template>
  <v-container>
    <v-card class="cart-card">
      <v-card-title>
        <h2>Item Cart</h2>
      </v-card-title>

      <v-card-subtitle>
        <h4>Product Summary</h4>
      </v-card-subtitle>

      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cute Soft Teddybear (size: 8 | Color: Dark Red)</td>
              <td>${{ price }}</td>
              <td class="quantity-cell">
                <v-btn small @click="decrementQuantity" icon>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span>{{ quantity }}</span>
                <v-btn small @click="incrementQuantity" icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </td>
              <td>${{ total }}</td>
            </tr>
          </tbody>
        </v-simple-table>

        <v-divider></v-divider>

        <div class="order-summary">
          <h4>Order Summary</h4>
          <p>Sub Total: ${{ total }}</p>
          <p>Discount 5%: -$ {{ discount }}</p>
          <p>Shipping Charges: -</p>
          <h3>Total: ${{ finalTotal }}</h3>
        </div>
      </v-card-text>

      <v-card-actions class="actions">
        <v-btn text @click="continueShopping">Continue Shopping</v-btn>
        <v-btn color="primary" @click="checkout">CheckOut</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const quantity = ref(1);
const price = 200;
const discount = 10;

const total = computed(() => price * quantity.value);
const finalTotal = computed(() => total.value - discount);

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const continueShopping = () => {};

const checkout = () => {};
</script>

<style scoped>
.cart-card {
  max-width: 900px;
  margin: 30px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: bold;
}

.v-card-subtitle {
  padding: 0 15px;
  color: #666;
}

.v-simple-table th {
  color: #555;
  font-weight: bold;
  text-align: left;
  padding: 10px 15px;
}

.v-simple-table td {
  padding: 10px 15px;
  vertical-align: middle;
}

.quantity-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-summary {
  margin-top: 20px;
  padding: 0 15px;
}

h2,
h4 {
  margin: 0;
  color: #444;
}

h3 {
  color: #d9534f;
  font-weight: bold;
}

p {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}

.v-btn {
  margin-top: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
</style>
