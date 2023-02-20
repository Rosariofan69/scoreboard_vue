<template>
  <div class="Ribbon">
    <!-- <div class="Ribbon-Content">他球場の経過： De 1 - 3 ヤ（4回裏） 神 4 - 0 巨（5回表） オ 1 - 6 楽（5回裏） ロ 0 - 3 ソ（5回表） 日 0 - 2 西（3回表）</div> -->
    <div class="Ribbon-Content">本日はYuチャンネルにご来場いただきましてありがとうございました。次回の配信をお楽しみに！</div>
  </div>
</template>
  
<script setup lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Ribbon{
    position: absolute;
    width: 710px;
    height: 46px;
    left: 50%;
    transform: translate(-50%, 144px);
    border: 2px solid #7F7F7F;
    box-sizing: border-box;
    background-color: #000000;
    overflow: hidden;
}

.Ribbon-Content{
    font-family: 'Noto Sans JP', sans-serif;
    display: inline-block;
    color: #fff;
    font-size: 30px;
    line-height: 38px;
    padding-left: 100%;
    white-space: nowrap;
    animation: animate-banner 25s linear infinite;
}

@keyframes animate-banner {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
}
</style>
  