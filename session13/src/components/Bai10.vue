<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          <span class="headline">Danh Sách Item</span>
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Items</v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const headers = [
  { text: "Name", value: "name" },
  { text: "Project Name", value: "project" },
  { text: "Post", value: "post" },
  { text: "Status", value: "status" },
  { text: "Budget", value: "budget" },
];

const items = ref([
  {
    name: "Sunil Joshi",
    project: "Elite Admin",
    post: "Web Designer",
    status: "Active",
    budget: "$39",
  },
  {
    name: "Andrew McDowland",
    project: "Real Homes WP Theme",
    post: "Project Manager",
    status: "Pending",
    budget: "$24k",
  },
  {
    name: "Christopher Jamil",
    project: "MedicalPro WP Theme",
    post: "Project Manager",
    status: "Completed",
    budget: "$12k",
  },
  {
    name: "Sunil Joshi",
    project: "Hosting Press HTML",
    post: "Frontend Engineer",
    status: "Pending",
    budget: "$30k",
  },
  {
    name: "Micheal Doe",
    project: "Helping Hands WP Theme",
    post: "Content Writer",
    status: "Cancel",
    budget: "$10k",
  },
]);

const page = ref(1);
</script>

<style>
.text-center {
  margin: 20px;
}
</style>
