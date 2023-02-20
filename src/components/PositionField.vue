<template>
  <div class="Position-Box">
    <img src="./image/position.png">
    <div class="Position-Name Position-P">
      <div class="Position-Name-Text">田中正</div>
    </div>
    <div class="Position-Name Position-C">
      <div class="Position-Name-Text">宇佐見</div>
    </div>
    <div class="Position-Name Position-1B">
      <div class="Position-Name-Text">万波</div>
    </div>
    <div class="Position-Name Position-2B">
      <div class="Position-Name-Text">石井</div>
    </div>
    <div class="Position-Name Position-3B">
      <div class="Position-Name-Text">野村</div>
    </div>
    <div class="Position-Name Position-SS">
      <div class="Position-Name-Text">上川畑</div>
    </div>
    <div class="Position-Name Position-LF">
      <div class="Position-Name-Text">松本剛</div>
    </div>
    <div class="Position-Name Position-CF">
      <div class="Position-Name-Text">五十幡</div>
    </div>
    <div class="Position-Name Position-RF">
      <div class="Position-Name-Text">江越</div>
    </div>
    <div class="Position-Runner-Name Position-Runner-1B">
      <div class="Position-Name-Text Text-Green">西川</div>
    </div>
    <!-- <div class="Position-Runner-Name Position-Runner-2B">
      <div class="Position-Name-Text Text-Green">西川</div>
    </div> -->
    <div class="Position-Runner-Name Position-Runner-3B">
      <div class="Position-Name-Text Text-Green">秋山</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Position-Box{
    visibility: visible;
    position: absolute;
    top: 34px;
    width: 450px;
    height: 252px;
}

.Position-Box img{
    width: 100%;
    position:absolute;
}

.Position-Name{
    position: absolute;
    width: 75px;
    height: 30px;
    padding-left: 1.5px;
    padding-right: 1.5px;
    text-align: center;
    background: linear-gradient(to bottom, #006298 0%, #006298 40%, #013754 60%, #013754 100%);
    box-shadow: 3px 0px 8px black;
}

.Position-Runner-Name{
    position: absolute;
    width: 75px;
    height: 30px;
    padding-left: 1.5px;
    padding-right: 1.5px;
    text-align: center;
    background-color: #2d2d2d;
    box-shadow: 3px 0px 8px black;
}

.Position-Name-Text{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    text-align: justify;
    text-align-last: justify;
    font-size: 25px;
    line-height: 27.5px;
    text-shadow: 2px 2px 1px black;
}

.Position-Name-Text-Four{
    transform: scaleX(0.75);
    transform-origin: left;
}

.Position-Name-Text-Six{
    transform: scaleX(0.5);
    transform-origin: left;
}

.Position-P{
    left: 50%;
    transform: translate(-50%, 160px);
}

.Position-C{
    left: 50%;
    transform: translate(-50%, 215px);
}

.Position-1B{
    top: 122px;
    left: 320px;
}

.Position-2B{
    top: 75px;
    left: 245px;
}

.Position-3B{
    top: 122px;
    right: 320px;
}

.Position-SS{
    top: 75px;
    right: 245px;
}

.Position-LF{
    top: 30px;
    left: 55px;
}

.Position-CF{
    top: 10px;
    left: 186px;
}

.Position-RF{
    top: 30px;
    right: 55px;
}

.Position-Runner-1B{
    top: 160px;
    left: 275px;
}

.Position-Runner-2B{
    left: 50%;
    transform: translate(-50%, 113px);
}

.Position-Runner-3B{
    top: 160px;
    right: 275px;
}

</style>