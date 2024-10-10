<template>
  <div>
    <!-- <nav>
      <router-link class-active="active" to="/">Home</router-link>
      <router-link class-active="active" to="/about">About</router-link>
      <router-link class-active="active" to="/contact">Contact</router-link>
    </nav> -->
    <router-view v-slot="{ Component }">
      <Supense>
        <!-- Thành phần các component sử dụng cơ chế lazy load -->
        <template #default>
          <div>
            <component :is="Component" />
          </div>
        </template>

        <!-- Hiệu ứng loading trước khi tải trang -->
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Supense>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: sticky;
  top: 0;
  background-color: #eefcfa;
}
.active {
  background-color: red;
}
</style>
