<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
import zldRequest from '@/service'

zldRequest
  .get({
    url: 'test'
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="less" scoped></style>
