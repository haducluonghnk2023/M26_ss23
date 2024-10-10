<template>
  <div>
    <br />
      <h1>B2</h1>
    <div class="box">
      <div class="square">Box</div>
      <div class="square1">Box</div>
      <div class="square2">Box</div>
    </div>
    <br />
  </div>
</template>

<script setup></script>

<style>
.box{
  display: flex;
}
.title {
  font-weight: bold;
}
.square {
  width: 200px;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.square1 {
  width: 200px;
  height: 200px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.square2 {
  width: 200px;
  height: 200px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
