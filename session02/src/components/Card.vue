<template>
  <div>
    <h1>Bai 3</h1>
    <div class="image">
        <p>Image</p>
    </div>
    <div >
        <div class="title">
          <h1>Title</h1><br>
        <button>Add to card</button>
        </div>
    </div>
  </div>
</template>

<script setup>
    
</script>

<style scoped>
.image{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: slategray;
    width: 200px;
    height: 90px;
}
button {
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
}

button:hover {
  background-color: #f2f2f2;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   width: 200px;
}
</style>