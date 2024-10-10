<template>
  <div >
    <h1>B4</h1>
    <ul class="a">
      <li>10 + 10 = {{ add(10, 10) }}</li>
      <li>10 - 10 = {{ decline(10, 10) }}</li>
      <li>10 x 10 = {{ multiply(10, 10) }}</li>
      <li>10 / 10 = {{ divide(10, 10) }}</li>
    </ul>
  </div>
</template>

<script setup>
function add(a, b) {
  return a + b;
}

function decline(a, b) {
  if (a < b) {
    alert("invalid number");
  }
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
</script>

<style>
ul{
  list-style-type: none;
  
}
</style>
