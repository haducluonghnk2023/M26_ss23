<template>
  <div>
    <h1>B6</h1>
    <b>Ho va ten: {{formatUser(user)}}</b>
  </div>
</template>

<script setup>
    const user={
        firstName:"Nguyen Van",
        lastName:"Nam"
    }
    function formatUser(person){
        return user.firstName + " " + user.lastName
    }
</script>

<style>
b{
    font-weight: bold;
}
</style>