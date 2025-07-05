<template>
  <span class="go-back">
    <button @click="goBack">go back</button>
  </span>
</template>
<script setup>
import { useRouter } from 'vue-router'
const route = useRouter()
function goBack() {
  route.go(-1)
}
</script>
