<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button @click="closeModal" class="close-btn">x</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button @click="closeModal" class="close-btn">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const isOpen = ref(true);

const closeModal = () => {
  isOpen.value = false;
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  cursor: pointer;
  background-color: #ccc;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
}

.close-btn:hover {
  background-color: #999;
}
</style>
