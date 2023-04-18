<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComonent.vue';
</script>

<template>
  <div class="sticky-top"><navbar-component/></div>
  <RouterView />
</template>

<style scoped>

</style>
