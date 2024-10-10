<template>
  <div>
    <router-link active-class="Dashboard" to="/navbar/Dashboard">
      Dashboard</router-link
    >||
    <router-link active-class="Account" to="/navbar/Account">
      Account</router-link
    >||
    <router-link active-class="Account" to="/navbar/Product">
      Product</router-link
    >
    <router-view />
  </div>
</template>

<script></script>

<style>
.Dashboard {
  background-color: blue;
  color: #fff;
}
.Account {
  background-color: blue;
  color: #fff;
}
.Account {
  background-color: blue;
  color: #fff;
}
</style>
