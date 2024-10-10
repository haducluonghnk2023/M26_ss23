<template>
  <div>
    <h1>B5</h1>
    <ul>
        <li>Ho va ten: {{user.name}}</li>
        <li>Gioi tinh: {{user.gender}}</li>
        <li>Ngay sinh: {{user.dateOfBirth}}</li>
        <li>Email: {{user.email}}</li>
        <li>Dia chi: {{user.address}}</li>
    </ul>
  </div>
</template>

<script setup>
    const user ={
        name:"Nguyen Van A",
        gender:"Nam",
        dateOfBirth:"06/03/2024",
        email:"nva@gmail.com",
        address:"Thanh Xuan, Ha Noi"
    }
</script>

<style>

</style>