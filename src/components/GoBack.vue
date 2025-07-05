<template>
  <span class="go-back">
    <button @click="route.back()">go back</button>
  </span>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
