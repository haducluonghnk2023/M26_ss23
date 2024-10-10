<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-img
              src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
              height="200px"
            ></v-img>

            <v-card-title>Top 10 Australian beaches</v-card-title>

            <v-card-subtitle>Number 10</v-card-subtitle>

            <v-card-text>
              Whitehaven Beach<br />
              Whitsunday Island, Whitsunday Islands
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange darken-2">Share</v-btn>
              <v-btn text color="orange darken-2">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "CartComponent",
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
  margin: 20px auto;
}
</style>
