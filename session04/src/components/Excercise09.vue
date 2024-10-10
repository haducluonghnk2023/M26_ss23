<template>
  <div>
    <h2>Danh sách bài viết</h2>

    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <p>{{ product.content }}</p>
        <p><strong>Tác giả:</strong> {{ product.author }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    title: "Bài viết 1",
    content: "Nội dung của bài viết 1",
    author: "Tác giả A",
  },
  {
    id: 2,
    title: "Bài viết 2",
    content: "Nội dung của bài viết 2",
    author: "Tác giả B",
  },
  {
    id: 3,
    title: "Bài viết 3",
    content: "Nội dung của bài viết 3",
    author: "Tác giả C",
  },
]);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h3 {
  margin: 0;
}

p {
  margin: 5px 0;
}

hr {
  margin-top: 10px;
  border: 1px solid #ccc;
}
</style>
