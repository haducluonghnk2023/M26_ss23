<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="Trang chủ">Trang chủ</v-tab>
      <v-tab value="Giới thiệu">Giới thiệu</v-tab>
      <v-tab value="Liên hệ">Liên hệ</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Trang chủ"> Trang chủ </v-tabs-window-item>

        <v-tabs-window-item value="Giới thiệu"> Giới thiệu </v-tabs-window-item>

        <v-tabs-window-item value="Liên hệ"> Liên hệ </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const tab = ref(null);
</script>

<style scoped></style>
