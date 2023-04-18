<template>
    <div class="nbar">
    <div class="mx-4">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search mx-5" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style="color:white" aria-current="page" href="/">Főoldal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color:white" aria-current="page" href="/search">Keresés</a>
        </li>
       
      </ul>
      <div class="nav-item" id="tanarvagy">  
        <router-link to="/teacher"  class=" nav-link">Tanár vagy?</router-link>
         </div>
    </div>
  </div>

</nav>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.nbar{
    background-color: rgb(3, 187, 61);
    width: 100%;
    color: white;
}

#tanarvagy{
  align-items: flex-end;
  margin-right: 5em;
}



</style>