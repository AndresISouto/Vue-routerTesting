<template>
  <div class="home">
    <h1>All destinations</h1>
    <section class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id" :to="{
        name: 'destination.show', params: {
          id: destination.id
        }
      }">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" alt="imagen">
      </router-link>
    </section>
  </div>
</template>
<script setup>
import sourceData from "@/data.json"
import { ref } from "vue";

const destinations = ref(sourceData.destinations)
</script>
