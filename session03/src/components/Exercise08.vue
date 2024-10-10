<template>
  <div>
    <a href="http://www.google.com" @click="checkLink('http://www.google.com')"
      >Link 1: http://www.google.com</a
    ><br />

    <a
      href="https://www.google.com"
      @click="checkLink('https://www.google.com')"
      >Link 2: https://www.google.com</a
    ><br />
  </div>
</template>

<script setup>
const checkLink = (url) => {
  if (!url.startsWith("https://")) {
    event.preventDefault();
    alert("Invalid Url");
  }
};
</script>

<style scoped>
a {
  margin-bottom: 10px;
  display: inline-block;
}
</style>
