<template>
  <div>
    <h1>DashBoard Page</h1>
    <nav>
      <router-link exact-active-class="active" to="/admin"
        >DashBoard</router-link
      >
      <router-link active-class="active" to="/admin/manager-user"
        >ManagerUser</router-link
      >
      <router-link active-class="active" to="/admin/manager-product"
        >ManagerProduct</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  background-color: red;
}
</style>
