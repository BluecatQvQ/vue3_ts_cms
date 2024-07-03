<template>
  <h2>Hello World</h2>
  <router-link to="/main">主要</router-link>
  <router-link to="/login">登录</router-link>
  <router-view></router-view>

  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2" />
  </div>
</template>

<script setup lang="ts">
interface Ikun {
  name: string
}

const ikun: Ikun = { name: 'zld' }

console.log(ikun)
</script>

<style scoped></style>
