<template>
  <div class="Pitch-Info-Box">
    <div class="Pitch-Info-Row">
      <div class="Pitch-Info-Num">
        <div class="Pitch-Info-Num-Text">14</div>
      </div>
      <div class="Pitch-Info-Name">
        <div class="Pitch-Info-Name-Text">加藤 貴之</div>
      </div>
    </div>
    <div class="Pitch-Info-Row">
      <div class="Pitch-Info-Title">投球数</div>
      <div class="Pitch-Info-Val">16</div>
      <div class="Pitch-Info-Ball">球</div>
    </div>
    <div class="Pitch-Info-Row">
      <div class="Pitch-Info-Title-Mini">この打席</div>
      <div class="Pitch-Info-Val">3</div>
      <div class="Pitch-Info-Ball">球</div>
    </div>
    <div class="Pitch-Info-Row">
      <div class="Pitch-Info-Title">奪三振</div>
      <div class="Pitch-Info-Val">0</div>
    </div>
    <div class="Pitch-Info-Row">
      <div class="Pitch-Info-Title">与四球</div>
      <div class="Pitch-Info-Val">0</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Pitch-Info-Box{
    width: 220px;
    height: 230px;
    background: linear-gradient(to bottom, #006298 0%, #006298 40%, #013754 60%, #013754 100%);
}

.Pitch-Info-Row{
    display: flex;
    padding-left: 10px;
}

.Pitch-Info-Num{
    width: 50px;
    height: 45px;
    text-align: center;
}

.Pitch-Info-Num-Text{
    font-family: 'DIN-Regular';
    font-weight: bold;
    font-size: 35px;
    line-height: 45px;
    text-align: center;
}

.Pitch-Info-Name{
    width: 150px;
    height: 45px;
    text-align: center;
}

.Pitch-Info-Name-Text{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    width: 150px;
    height: 45px;
    font-size: 33px;
    line-height: 43px;
    text-align: center;
}

.Pitch-Info-Title{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    width: 85px;
    height: 45px;
    font-size: 28px;
    line-height: 43px;
}

.Pitch-Info-Title-Mini{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    width: 85px;
    height: 45px;
    font-size: 28px;
    line-height: 43px;
    text-align: center;
    transform: scaleX(0.75);
    transform-origin: left;
}

.Pitch-Info-Val{
    font-family: 'DIN-Regular';
    font-weight: bold;
    width: 75px;
    height: 45px;
    font-size: 40px;
    font-weight: bold;
    line-height: 45px;
    text-align: right;
}

.Pitch-Info-Ball{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    width: 50px;
    height: 45px;
    font-size: 28px;
    line-height: 43px;
    text-align: center;
}

</style>