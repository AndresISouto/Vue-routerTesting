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
</script>

<style scoped>
.card img {
  width: 100%;
  height: 80%;
  object-fit: cover;
  /* ensures image fills the space without distortion */
}
</style>
