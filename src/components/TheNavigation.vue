<template>
  <nav id="nav">
    <router-link to="/">Home </router-link>
    <router-link to="brazil">Brazil </router-link>
    <router-link to="hawaii">Hawaii </router-link>
    <router-link to="jamaica">Jamaica </router-link>
    <router-link to="panama">Panama </router-link>
  </nav>
</template>
<style scoped>
#nav .activeLink {
  color: lightblue;
  border-bottom: 1px solid lightblue;
}
</style>
