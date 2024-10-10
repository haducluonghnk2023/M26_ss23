<template>
  <div>
    <h2>Post Detail</h2>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref(null);

const mockPosts = [
  { id: 1, title: "Post 1", content: "Content of Post 1" },
  { id: 2, title: "Post 2", content: "Content of Post 2" },
  { id: 3, title: "Post 3", content: "Content of Post 3" },
];

onMounted(() => {
  const postId = parseInt(route.params.id);
  const foundPost = mockPosts.find((p) => p.id === postId);
  post.value = foundPost || null;
});
</script>

<style scoped></style>
