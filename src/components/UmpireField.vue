<template>
  <div class="Umpire-Box">
    <div class="Content-Field">
      <div class="Umpire-Title">PL</div>
      <div class="Umpire-Name">山路</div>
    </div>
    <div class="Content-Field">
      <div class="Umpire-Title">1B</div>
      <div class="Umpire-Name">川口</div>
    </div>
    <div class="Content-Field">
      <div class="Umpire-Title">2B</div>
      <div class="Umpire-Name">秋村</div>
    </div>
    <div class="Content-Field">
      <div class="Umpire-Title">3B</div>
      <div class="Umpire-Name">吉本</div>
    </div>
    <!-- <div class="Content-Field">
      <div class="Umpire-Title">LL</div>
      <div class="Umpire-Name">橋本</div>
    </div>
    <div class="Content-Field">
      <div class="Umpire-Title">RL</div>
      <div class="Umpire-Name">長井</div>
    </div> -->
  </div>
</template>
  
<script setup lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Umpire-Box{
    position: absolute;
    top: 0%;
    display: flex;
    width: 100%;
    height: 30px;
    border-bottom: 4px solid #7F7F7F;
}

.Content-Field{
    display: flex;
    flex: 1;
    overflow: hidden;
}

.Umpire-Title{
    font-family: 'Bahnschrift';
    width: 20px;
    height: 30px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -4px;
    text-align: center;
    color: black;
    background-color: white;
}

.Umpire-Name{
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    width: 100%;
    height: 30px;
    font-size: 26px;
    line-height: 27px;
    text-align: center;
    text-align-last: justify;
    color: white;
    background-color: #404040;
    text-shadow: 2px 2px 1px black;
    padding-left: 10px;
    padding-right: 10px;
}

</style>
