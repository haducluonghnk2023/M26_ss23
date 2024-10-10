<template>
  <div>
    <!-- <h1>vue-router</h1> -->
    <!-- <router-link to="/">click home</router-link>|| -->
    <!-- <router-link active-class="home" to="/"> home</router-link>||
    <router-link active-class="product" to="/product"> product</router-link>||
    <router-link active-class="detail" to="/detail"> detail</router-link> -->
    <!-- <router-link to="/contact"> contact</router-link> -->
    <!-- 
    <button @click="redirectPage">redirect</button>
    <button @click="replace">replace</button> -->
    <!-- 
    <a href="/">click home</a>|| <a href="/about">click about</a>||
    <a href="/contact">click contact</a>  -->
    <router-view />
  </div>
</template>

<script setup>
//khai báo hàm điều hướng sang các trang
// import { useRouter } from "vue-router";
// const router = useRouter();
// const redirectPage = () => {
//   router.push("/about");
// };
// const replace = () => {
//   router.replace("/contact");
// };
</script>

<style scoped>
.home {
  color: red;
}
.product {
  color: red;
}
.detail {
  color: red;
}
</style>
