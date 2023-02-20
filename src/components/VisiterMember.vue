<template>
  <div class="Member">
    <div class="Team">
      CARP
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">8</div>
      <div class="Box-Name">
        <div class="Name-Text">秋山</div>
      </div>
    </div>

    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">7</div>
      <div class="Box-Name">
        <div class="Name-Text">西川</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">5</div>
      <div class="Box-Name">
        <div class="Name-Text-Six">デビッドソン</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">3</div>
      <div class="Box-Name">
        <div class="Name-Text-Six">マクブルーム</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">2</div>
      <div class="Box-Name">
        <div class="Name-Text">坂倉</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">9</div>
      <div class="Box-Name">
        <div class="Name-Text">大盛</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">6</div>
      <div class="Box-Name">
        <div class="Name-Text">小園</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">4</div>
      <div class="Box-Name">
        <div class="Name-Text">羽月</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text-DH">DH</div>
      <div class="Box-Name">
        <div class="Name-Text">田村</div>
      </div>
    </div>
    <div class="Box-Full-P">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">1</div>
      <div class="Box-Name">
        <div class="Name-Text">遠藤</div>
      </div>
    </div>
    <!-- <button v-on:click="clickButton()">ボタン</button> -->
  </div>
</template>

<script setup lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

.Member{
    position: absolute;
    vertical-align: middle;
    margin: 15px;
    text-align: center;
    line-height: 46px;
    overflow: hidden;
    width: 230px;
    height: 530px;
}

.Team{
    font-family: 'Bahnschrift';
    /* font-family: 'Noto Sans JP', sans-serif; */
    margin-bottom: 10px;
    margin-left: 20px;
    background: linear-gradient(to bottom, #FF0000 0%, #FF0000 40%, #c00000 60%, #c00000 100%);
    color: white;
    position: relative;
    font-size: 40px;
    line-height: 50px;
    overflow: hidden;
    width: 190px;
    height: 49px;
}

.Box-Full-P{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ff0000;
    animation: SlideInText 1s;
}

.Box-Full{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-bottom: 4px solid #ff0000;
    animation: SlideInText 1s;
}

.Box-Pos{
    position: absolute;
    margin: 0;
    /* position: relative; */
    width: 51px;
    height: 42px;
    background: linear-gradient(to bottom, #595959 0%, #595959 40%, #333333 60%, #333333 100%);
    transform: translateX(-5px) skewX(-10deg);
    border-right: 2px solid #7F7F7F;
    z-index: 1;
    box-shadow: 3px 0px 8px black;
}

.Pos-Text{
    font-family: 'Alte DIN 1451 Mittelschrift';
    /* font-weight: bold; */
    position: absolute;
    width: 45px;
    /* height: 42px; */
    font-size: 45px;
    line-height: 42px;
    text-align: center;
    z-index: 2;
    letter-spacing: -2px;
}

.Pos-Text-DH{
    font-family: 'DIN-Regular';
    font-weight: bold;
    position: absolute;
    width: 65px;
    height: 42px;
    font-size: 43px;
    line-height: 40px;
    text-align: center;
    z-index: 2;
    letter-spacing: -2px;
    transform: scaleX(0.7);
    transform-origin: left;
}

.Box-Name{
    overflow: visible;
    margin-left: 42px;
    position: absolute;
    justify-content: center;
    text-align: center;
    width: 120px;
    height: 42px;
    background-color: #404040;
    padding-left: 18px;
    padding-right: 10px;
    z-index: 0;
}

.Name-Text{
    overflow: visible;
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 38px;
    font-size: 36px;
    text-align-last: justify;
    /* width: 120px; */
    height: 42px;
    text-shadow: 3px 2px 1px black;
}

.Name-Text-Six{
    overflow: visible;
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 38px;
    font-size: 36px;
    text-align: justify;
    text-align-last: justify;
    /* width: 280px; */
    height: 42px;
    transform: scaleX(0.56);
    transform-origin: left;
    text-shadow: 3px 2px 1px black;
}

@keyframes SlideInText
{
    0%
    {
        transform: translateX(200px) scale(0.1);
    }
    70%
    {
        transform: translateX(0px) scale(0.75);
    }
    100%
    {
        transform: scale(1.0);
    }
}

</style>
