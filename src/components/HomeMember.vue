<template>
  <div class="Member">
    <div class="Team">
      FIGHTERS
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">8</div>
      <div class="Box-Name">
        <div class="Name-Text">五十幡</div>
      </div>
    </div>

    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text-DH">DH</div>
      <div class="Box-Name">
        <div class="Name-Text">矢澤</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">7</div>
      <div class="Box-Name">
        <div class="Name-Text">松本剛</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">5</div>
      <div class="Box-Name">
        <div class="Name-Text">野村</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">3</div>
      <div class="Box-Name">
        <div class="Name-Text">万波</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">6</div>
      <div class="Box-Name">
        <div class="Name-Text">上川畑</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">4</div>
      <div class="Box-Name">
        <div class="Name-Text">石井</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">2</div>
      <div class="Box-Name">
        <div class="Name-Text">宇佐見</div>
      </div>
    </div>
    <div class="Box-Full">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">9</div>
      <div class="Box-Name">
        <div class="Name-Text">江越</div>
      </div>
    </div>
    <div class="Box-Full-P">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">1</div>
      <div class="Box-Name">
        <div class="Name-Text">田中正</div>
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
    right: 0px;
}

.Team{
    font-family: 'Bahnschrift';
    /* font-family: 'Noto Sans JP', sans-serif; */
    margin-bottom: 10px;
    margin-left: 20px;
    background: linear-gradient(to bottom, #006298 0%, #006298 40%, #004468 60%, #004468 100%);
    color: white;
    position: relative;
    font-size: 40px;
    line-height: 50px;
    overflow: hidden;
    width: 190px;
    height: 49px;
}

.Box-Full{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-bottom: 4px solid #B4A169;
    animation: SlideInText 1s;
}

.Box-Full-P{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #B4A169;
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
    /* width: 140px; */
    height: 42px;
    background-color: #404040;
    /* border-left: 18px solid transparent;
    border-right: 10px solid transparent; */
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
    text-align: justify;
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
