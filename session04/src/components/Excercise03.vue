<template>
  <div>
    <p>Width: {{ width }}</p>
    <p>Height: {{ height }}</p>
    <p>Area: {{ area }}</p>
    <button @click="increaseWidth">Increase width</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const width = ref(10);
const height = ref(20);

const area = computed(() => {
  return width.value * height.value;
});

const increaseWidth = () => {
  width.value += 10;
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
