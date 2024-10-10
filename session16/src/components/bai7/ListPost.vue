<template>
  <div>
    <h2>List of Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

const mockPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

onMounted(() => {
  posts.value = mockPosts;
});
</script>

<style scoped></style>
