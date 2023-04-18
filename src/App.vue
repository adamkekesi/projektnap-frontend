<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTanarStore } from './stores/store';
const {getAllCounties} = useTanarStore();

getAllCounties();
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
