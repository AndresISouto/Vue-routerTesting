<template>
  <section>
    <h1>Welcome to{{ experience.name }} </h1>
    <img :src="`/images/${experience.image}`" alt="imagen">
    <p>{{ experience.description }}</p>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import sourceData from "@/data.json"
const props = defineProps({
  experienceSlug: { type: String, required: true },
  id: { type: Number, required: true }
})
const experience = computed(() => {
  const destination = sourceData.destinations.find(destination => destination.id === props.id)
  const experience = destination.experiences.find(e => e.slug === props.experienceSlug)
  return experience

})
</script>
