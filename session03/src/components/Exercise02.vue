<template>
  <div id="app">
    <div v-bind:elementid="elementId" v-bind:elementclass="elementClass">
      Heading
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const elementId = "heading";
const elementClass = "heading";
</script>

<style></style>
