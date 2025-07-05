<script setup>
import TheNavigation from "@/components/TheNavigation.vue"
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <TheNavigation />
  <div class="container">
    <transition>
      <router-view :key="route.path"></router-view>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
