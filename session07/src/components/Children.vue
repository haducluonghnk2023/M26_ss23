<template>
  <div>
    <h1>Child</h1>
    <p>Giá trị nhận về từ component cha :{{ propName }}</p>
    <p>Tuổi :{{ props.age }}</p>
    <p>Tên đầy đủ :{{ fullName }}</p>
    <p>nơi hiển thị slot của học lập trình vue</p>
    <slot name="intro" />
    <p>nơi hiển thị slot của phần tìm hiểu slot</p>
    <slot name="slot-search" />
  </div>
</template>

<script setup>
const props = defineProps(["propName", "age", "fullName"]);
// const props = defineProps({propName:""});

const data = "k23_ptit";
console.log("giá trị của prosp", props);
</script>

<style></style>
