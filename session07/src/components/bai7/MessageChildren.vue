<template>
  <div>
    <button @click="sendMessage">Send message</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["messageSent"]);
const sendMessage = () => {
  emit("messageSent", "This is a message from the child component!");
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>
