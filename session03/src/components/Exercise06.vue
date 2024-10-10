<template>
  <div>
  
    <button @click="click(`Rikkei Academy`)">Get params</button>
  </div>
</template>

<script setup>
const click = (mess) => {
  console.log(mess);
};
</script>

<style></style>
