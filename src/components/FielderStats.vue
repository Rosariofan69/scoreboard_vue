<template>
  <div class="Stats-Box">
    <div class="Stats-Name-Row">
      <div class="Stats-Num">31</div>
      <div class="Stats-Name">坂倉 将吾</div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Title">AVG</div>
      <div class="Stats-Avg">.310</div>
      <div class="Stats-Avg-Detail">(277-86)</div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div class="Stats-Title">HR</div>
        <div class="Stats-Content-Left">6</div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div class="Stats-Title">OBP</div>
        <div class="Stats-Content-Right">.368</div>
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div class="Stats-Title">RBI</div>
        <div class="Stats-Content-Left">37</div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div class="Stats-Title">SLG</div>
        <div class="Stats-Content-Right">.430</div>
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div class="Stats-Title">BB</div>
        <div class="Stats-Content-Left">22</div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div class="Stats-Title">OPS</div>
        <div class="Stats-Content-Right">.718</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Stats-Box{
    visibility: visible;
    position: absolute;
    top: 34px;
    width: 450px;
    height: 252px;
    background: linear-gradient(to bottom, #FF0000 0%, #FF0000 40%, #c00000 60%, #c00000 100%);
}

.Stats-Name-Row{
    display: flex;
    padding-left: 10px;
    width: 100%;
    height: 65px;
}

.Stats-Num{
    font-family: 'DIN-Regular';
    font-weight: bold;
    width: 90px;
    font-size: 45px;
    line-height: 75px;
    text-align: center;
}

.Stats-Name{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    padding-left: 10px;
    font-size: 50px;
    line-height: 55px;
}

.Stats-Content-Row{
    display: flex;
    width: 100%;
    height: 46px;
}

.Stats-Title{
    font-family: 'Bahnschrift';
    padding-right: 5px;
    width: 90px;
    font-size: 35px;
    line-height: 66px;
    text-align: right;
}

.Stats-Avg{
    font-family: 'DIN-Regular';
    font-weight: bold;
    padding-left: 8px;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 1px;
}

.Stats-Avg-Detail{
    font-family: 'DIN-Regular';
    font-weight: bold;
    padding-left: 15px;
    font-size: 35px;
    line-height: 50px;
}

.Stats-Content-Row-Left{
    display: flex;
    width: 220px;
    height: 46px;
}

.Stats-Content-Left{
    font-family: 'DIN-Regular';
    font-weight: bold;
    padding-right: 10px;
    width: 95px;
    font-size: 45px;
    line-height: 50px;
    text-align: right;
    letter-spacing: 1px;
}

.Stats-Content-Row-Right{
    display: flex;
    width: 230px;
    height: 46px;
}

.Stats-Content-Right{
    font-family: 'DIN-Regular';
    font-weight: bold;
    padding-right: 10px;
    width: 120px;
    font-size: 45px;
    line-height: 50px;
    text-align: right;
    letter-spacing: 1px;
}

</style>