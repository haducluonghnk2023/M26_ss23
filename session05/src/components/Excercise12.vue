<template>
  <div>
    <button @click="showNotification">Show notification</button>

    <div v-if="isVisible" class="notification">
      <span>Hiển thị thông báo ở đây</span>

      <button @click="closeNotification" class="close-btn">X</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

const showNotification = () => {
  isVisible.value = true;

  setTimeout(() => {
    isVisible.value = false;
  }, 5000);
};

const closeNotification = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  z-index: 1000;
}
</style>
