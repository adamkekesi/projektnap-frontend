<template>
  <div class="card">
    <div class="card-body">
        <h4>Óra foglalás</h4>
        <div class="tableContainer">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
    .card-body {
    background-color: #00813B;
    border-bottom-right-radius: 1em !important;
    border-bottom-left-radius: 1em !important;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .card-header {
    border-top-right-radius: 1em !important;
    border-top-left-radius: 1em !important;
    background-color: #00813B;

  }
  .card {
    --bs-card-border-width: 0px !important;
    height: 80vh;
    width: 60vw;
    background-color: #00813B;
    border-radius: 20px;
  }

  h4{
    color: white;
  }

  table, td, tr{
    border: 1px solid white;
  }

  table{
    width: 50vw;
    height: calc(80vh - 130px);
  }
</style>
