<template>
  <v-app>
    <v-container>
      <v-btn @click="showDialog">Xác Nhận</v-btn>

      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Xác Nhận</v-card-title>
          <v-card-text>
            Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập
            nhật.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="confirm" color="green darken-1">Xác Nhận</v-btn>
            <v-btn @click="dialog = false" color="red darken-1">Hủy</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
const dialog = ref(false);
const showDialog = () => {
  dialog.value = true;
};
const confirm = () => {
  dialog.value = false;
};
</script>

<style></style>
