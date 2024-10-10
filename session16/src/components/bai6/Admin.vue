<template>
  <div class="admin-layout">
    <nav>
      <ul>
        <li>
          <router-link to="/admin/manager-user">Manage Users</router-link>
        </li>
        <li>
          <router-link to="/admin/manager-product">Manage Products</router-link>
        </li>
        <li><router-link to="/admin/settings">Settings</router-link></li>
      </ul>
    </nav>
    <hr />
    <!-- Nơi hiển thị các route con -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped>
.admin-layout {
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav ul li {
  font-size: 1.2rem;
}
</style>
