<template>
  <div class="skill-level-detail">
    <span>Level:{{levelNum}}</span>
    <p>{{levelDetail[levelNum-1]}}</p>
  </div>
</template>

<script>
export default {
  props:{
    levelNum:0,
    levelDetail:Array
  }
}
</script>

<style>

.skill-level-detail{
  padding:1rem;
  color:#f5f5f5;
  background-color:rgba(0,0,0,0.6);
  text-align: center;
}

</style>