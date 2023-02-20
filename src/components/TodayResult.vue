<template>
  <div class="Today-Result">
    <div class="Today-Result-Box">
      <div class="Today-Result-Number">1.</div>
      <div class="Today-Result-Content Text-Green">本塁打</div>
      <div class="Today-Result-Number">2.</div>
      <div class="Today-Result-Content Text-Green">本塁打</div>
      <div class="Today-Result-Number">3.</div>
      <div class="Today-Result-Content Text-Green">本塁打</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Today-Result{
    position: absolute;
    bottom: 0%;
    width: 450px;
    height: 40px;
    border-top: 4px solid #7F7F7F;
    background: black;
}

.Today-Result-Box{
    display: flex;
    width: 500px;
}

.Today-Result-Number{
    font-family: 'DIN-Regular';
    font-weight: bold;
    margin-left: 7px;
    font-size: 39px;
    line-height: 39.5px;
}

.Today-Result-Content{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    padding-left: 5px;
    margin-right: 10px;
    font-size: 32px;
    line-height: 38px;

}

.Text-Green{
    color: #00FF00
}

</style>