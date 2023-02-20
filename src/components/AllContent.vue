<template>
  <div class="Main">
    <VisiterMember />
    <RunningScore />
    <RibbonSpace />
    <div class="Big-Info">
      <UmpireField />
      <FielderStats />
      <PositionField />
      <TodayResult />
    </div>
    <div class="Small-Info">
      <PitcherInfo />
      <CountField />
    </div>
    <HomeMember />
  </div>
  <div class="Control">
    <ControllerField />
  </div>
</template>
  
<script setup lang="ts">
import HomeMember from './HomeMember.vue';
import VisiterMember from './VisiterMember.vue';
import RunningScore from './RunningScore.vue'
import RibbonSpace from './RibbonSpace.vue';
import UmpireField from './UmpireField.vue';
import PitcherInfo from './PitcherInfo.vue';
import CountField from './CountField.vue';
import FielderStats from './FielderStats.vue';
import TodayResult from './TodayResult.vue';
import PositionField from './PositionField.vue';
import ControllerField from './ControllerField.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
  position: relative;
  margin: auto;
  overflow: hidden;
  width:1250px;
  height:560px;
  color: white;
  background-color:black;
}

.Big-Info{
  position: absolute;
  width: 460px;
  height: 340px;
  top: 200px;
  left: 270px;
  border: 5px solid #7F7F7F;
  box-sizing: border-box;
  overflow: hidden;
}

.Small-Info{
  position: absolute;
  width: 220px;
  height: 340px;
  top: 200px;
  right: 270px;
}

.Control{
  position: relative;
  display: flex;
  /* margin: auto; */
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 1250px;
  height: 270px;
  background-color: #dbdbdb;
  justify-content: space-between;
}

</style>
  