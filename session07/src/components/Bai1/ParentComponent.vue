<template>
  <div>
    <h1>bai 1</h1>
    <children-component :propName="ParentCompany"></children-component>
  </div>
</template>

<script setup>
import ChildrenComponent from "./ChildrenComponent.vue";
import { ref } from "vue";
let ParentCompany = ref("Rikkei Academy");
</script>

<style></style>
