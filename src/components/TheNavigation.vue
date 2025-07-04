<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="destination in destinations" :key="destination.id" :to="{
      name: 'destination.show', params: {
        id: destination.id,
        slug: destination.slug
      }
    }">
      {{ destination.name }}
    </router-link>
  </nav>
</template>
<script setup>

import data from "@/data.json"
import { ref } from "vue";
const destinations = ref(data.destinations)
</script>

<style scoped>
#nav .activeLink {
  color: lightblue;
  border-bottom: 1px solid lightblue;
}
</style>
