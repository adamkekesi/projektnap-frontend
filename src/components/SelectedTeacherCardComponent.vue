<template>
  <div class="card" style="width: 32rem">
    <div class="card-header text-center">
      <h1>Name</h1>
    </div>
      <div class="card-body">
        <img class="card-img-top" src="..." alt="Tanár profilkép">
        
        <h5 class="card-title">Elérhtőségek</h5>
        <p class="card-text">
          tanár adatai
        </p>
      </div>
    </div>
</template>

<script setup>
  import {storeToRefs} from 'pinia'
  import {useTanarStore} from '../stores/store'

  const {selectedTeacher} = storeToRefs(useTanarStore());
</script>

<style lang="scss" scoped>
  .card-body {
    background-color: rgba(0, 200, 0, 0.5);
    border-bottom-right-radius: 1em !important;
    border-bottom-left-radius: 1em !important;
  }
  
  .card-header {
    border-top-right-radius: 1em !important;
    border-top-left-radius: 1em !important;
    background-color: rgb(3, 187, 61);
  }

  .card {
    --bs-card-border-width: 0px !important;
    height: 50rem;
  }
</style>
