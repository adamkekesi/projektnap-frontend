<template>
  <div class="card" style="width: 50rem">
  <div class="card-header text-center">
    <h2>Foglalás</h2>
  </div>
    <div class="card-body">Teacher Information</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
    .card-body {
    background-color: rgba(0, 200, 0, 0.5);
    border-bottom-right-radius: 30px !important;
    border-bottom-left-radius: 30px !important;
  }
  
  .card-header {
    border-top-right-radius: 30px !important;
    border-top-left-radius: 30px !important;
    background-color: rgb(3, 187, 61);
  }
  .card {
    --bs-card-border-width: 0px !important;
  }
</style>
