<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTanarStore } from './stores/store';
import NavbarComponent from './components/NavbarComonent.vue';
const {getAllCounties} = useTanarStore();

getAllCounties();
</script>

<template>
  <div class="sticky-top"><navbar-component/></div>
  <RouterView />
</template>

<style scoped>

</style>
