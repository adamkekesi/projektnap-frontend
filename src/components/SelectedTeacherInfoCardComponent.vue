<template>
  <div class="card">
    <div class="card-body">
        <h4>Óra foglalás</h4>
        <div class="tableContainer">
          <table>
            <tr>
              <td class="dayName">Hétfő</td>
              <td class="dayName">Kedd</td>
              <td class="dayName">Szerda</td>
              <td class="dayName">Csütörtök</td>
              <td class="dayName">Péntek</td>
              <td class="dayName">Szombat</td>
              <td class="dayName">Vasárnap</td>
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
    width: 800px;
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
    margin-bottom: 30px;
  }

  table, td, tr{
    border: 1px solid black;
  }

  table{
    width: 50vw;
    height: calc(80vh - 130px);
    background-color: white;
    width: 100%;
  }

  td{
    color: black;
    text-align: center;
    height: 50px;
    width: 80px;
  }

  .dayName{
    font-weight: bold;
  }
</style>
