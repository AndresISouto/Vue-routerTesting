<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" alt="no encontrado">
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true
  }
})
console.log(props.experience.slug)
</script>
<style scoped></style>
