<template>
  <h2>Hello World</h2>
  <router-link to="/main">主要</router-link>
  <router-link to="/login">登录</router-link>
  <router-view></router-view>
</template>

<script setup lang="ts">
interface Ikun {
  name: string
}

const ikun: Ikun = { name: 'zld' }

console.log(ikun)
</script>

<style scoped></style>
