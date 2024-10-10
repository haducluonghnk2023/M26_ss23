<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
      <!-- Named slot cho phần header -->
    </div>
    <div class="card-body">
      <slot name="body"></slot>
      <!-- Named slot cho phần body -->
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
      <!-- Named slot cho phần footer -->
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
}

.card-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-body {
  margin-bottom: 10px;
}

.card-footer {
  text-align: right;
}
</style>
