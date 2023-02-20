<template>
  <div class="Running-Score-Full">
    <div class="Running-Score-Title-Full">
      <div class="Running-Score-Title">1</div>
      <div class="Running-Score-Title">2</div>
      <div class="Running-Score-Title">3</div>
      <div class="Running-Score-Title">4</div>
      <div class="Running-Score-Title">5</div>
      <div class="Running-Score-Title">6</div>
      <div class="Running-Score-Title">7</div>
      <div class="Running-Score-Title">8</div>
      <div class="Running-Score-Title">9</div>
      <div class="Running-Score-Title-Extension">
        <div class="Running-Score-Title">10</div>
        <div class="Running-Score-Title">11</div>
        <div class="Running-Score-Title">12</div>
      </div>
      <div class="Running-Score-Title-Run">R</div>
      <div class="Running-Score-Title">H</div>
      <div class="Running-Score-Title">E</div>
      <div class="Running-Score-Title-LOB">LOB</div>
    </div>
    <div class="Running-Score-Box">
      <div class="Score-Team">
        <img src="./image/広島.png">
      </div>
      <div class="Running-Score-Odd Now-Frame"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Box-Extension">
        <div class="Running-Score-Even"></div>
        <div class="Running-Score-Odd"></div>
        <div class="Running-Score-Even"></div>
      </div>
      <div class="Running-Score-Run">
        <div class="Score-Text-Run Score-Text">0</div>
      </div>
      <div class="Running-Score-Odd">
        <div class="Score-Text">2</div>
      </div>
      <div class="Running-Score-Even">
        <div class="Score-Text">0</div>
      </div>
      <div class="Running-Score-Odd">
        <div class="Score-Text">0</div>
      </div>
    </div>
    <div class="Running-Score-MidLine"></div>
    <div class="Running-Score-Box">
      <div class="Score-Team">
        <img src="./image/日本ハム.png">
      </div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Even"></div>
      <div class="Running-Score-Odd"></div>
      <div class="Running-Score-Box-Extension">
        <div class="Running-Score-Even"></div>
        <div class="Running-Score-Odd"></div>
        <div class="Running-Score-Even"></div>
      </div>
      <div class="Running-Score-Run">
        <div class="Score-Text-Run Score-Text">0</div>
      </div>
      <div class="Running-Score-Odd">
        <div class="Score-Text">0</div>
      </div>
      <div class="Running-Score-Even">
        <div class="Score-Text">0</div>
      </div>
      <div class="Running-Score-Odd">
        <div class="Score-Text">0</div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Running-Score-Full{
    position: absolute;
    width: 710px;
    /* width: 842px; */
    height: 112px;
    left: 50%;
    /* transform: translate(-50%, 15px) scaleX(0.85); */
    transform: translate(-50%, 15px);
    border: 4px solid #7F7F7F;
}

.Running-Score-Title-Full{
    padding-left: 138px;
    height: 22px;
    display: flex;
    background-color: #595959;
}

.Running-Score-Title{
    width: 44px;
    height: 22px;
    line-height: 26px;
    font-size: 22px;
    font-family: 'Bahnschrift';
    text-align: center;
}

.Running-Score-Title-Extension{
    height: 22px;
    /* display: flex; */
    display: none;
    background-color: #595959;
}

.Running-Score-Title-LOB{
    width: 44px;
    height: 22px;
    line-height: 26px;
    font-size: 22px;
    font-family: 'Bahnschrift';
    text-align: center;
    transform: scaleX(0.7);
    transform-origin: center;
}

.Running-Score-Title-Run{
    width: 44px;
    height: 22px;
    line-height: 26px;
    font-size: 22px;
    font-family: 'Bahnschrift';
    text-align: center;
    transform-origin: center;
    background-color: #ffffff;
    color: #000000;
}

.Running-Score-Box{
    height: 44px;
    display: flex;
}

.Running-Score-Box-Extension{
    height: 44px;
    /* display: flex; */
    display: none;
}

.Now-Frame{
    /* width: 44px;
    height: 44px;
    background-color: white; */
    outline: 3.5px solid #ff0000;
    outline-offset: -3.5px;
}

.Running-Score-Odd{
    width: 38px;
    height: 44px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: white;
}

.Running-Score-Even{
    width: 38px;
    height: 44px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: #e4e4e4;
}

.Running-Score-Run{
    width: 38px;
    height: 44px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: #000000;
}

.Running-Score-MidLine{
    width: 100%;
    height: 2px;
    background-color: #7F7F7F;
}

.Score-Team{
    position: relative;
    width: 138px;
    height: 44px;
    background-color: #404040;
    text-align: center;
}

.Score-Team img{
    /* height: 44px; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}

.Score-Text{
    /* width: 44px; */
    height: 44px;
    line-height: 40px;
    font-size: 48px;
    font-family: 'DIN';
    font-weight: 900;
    color: black;
    text-align: center;
}

.Score-Text-Run.Score-Text{
    color: yellow;
}

</style>
