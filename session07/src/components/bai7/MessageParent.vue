<template>
  <div>
    <h1>Message Parent Component</h1>
    <MessageChildren @messageSent="handleMessage" />
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MessageChildren from "./MessageChildren.vue";

const message = ref("");

const handleMessage = (msg) => {
  message.value = msg;
  alert(message.value);
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  margin-top: 20px;
  color: #333;
  font-style: italic;
}
</style>
