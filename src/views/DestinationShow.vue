<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" alt="">
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link v-for="experience in destination.experiences" :key="experience.slug"
          :to="{ name: 'Experience.show', params: { experienceSlug: experience.slug, } }">
          <ExperienceCard :experience="experience"> </ExperienceCard>
        </router-link>
      </div>
      <router-view></router-view>
    </section>
    <GoBack></GoBack>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { watch, computed, onMounted, ref } from 'vue';
import sourceData from "@/data.json"
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
// const destination = ref(null)
const route = useRoute()
const destination = computed(() => {
  // const id = parseInt(route.params.id)
  return sourceData.destinations.find(e => e.id === props.id)
})
//esto es para simular una query
// async function fetchDestination() {
//   const response = await fetch(`/api/${route.params.slug}.json`)
//   if (!response.ok) throw new Error("response not ok")
//   destination.value = await response.json()
// }

// onMounted(() => {
//   fetchDestination()
//   // esto esta guay si hay problemas de rendimiento o si se tarda en cambiar entre paginas, pero se puede usar la key en el route-view
//   // watch(
//   //   () => route.params.id || route.params.slug,
//   //   () => {
//   //     destination.value = null // Optional: Clear previous data while loading
//   //     fetchDestination()
//   //   },
//   //   // { immediate: false } // Already fetched on mount
//   // )
//
// })
</script>
<style scoped>
h1 {
  padding: 2rem;
}
</style>
