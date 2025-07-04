<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" alt="">
        <p>{{ destination.description }}</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import sourceData from "@/data.json"

const route = useRoute()
const destination = computed(() => {
  const id = parseInt(route.params.id)
  return sourceData.destinations.find(e => e.id === id)
})
</script>
<style scoped></style>
