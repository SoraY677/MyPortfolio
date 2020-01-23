<template>
  <div class="skill-card">
    <img :src="'/img/skill/' + name + '.svg'" />
    <div class="skill-detail">
      {{ name }}
      <span class="level-number" :class="colorLevel(level)">
      {{'Level.'+level}}
      </span>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  display: flex;
  width: 100%;
  margin-bottom: 20%;
  flex-wrap: wrap;
  justify-content: space-around;
}

img {
  width: 50%;
}

.skill-detail {
  text-align: center;
  width: 100%;
}
.level-number{
  display: block;
}
.skill-level1{
color:#0079c2
}
.skill-level2{
color:#019a66
}
.skill-level3{
 color:#ffcc33
}
.skill-level4{
  color:#ff6600
}
.skill-level5{
  color:#ff3333
}
.skill-level-undefined{
  display:none;
}


</style>

<script>
export default {
  props: ["name", "level"],
  methods: {
    //スキルレベルによって色を変える

    colorLevel: function(levelNum) {
      let ret = "skill-level";
      switch (levelNum) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          ret += levelNum;
          break;
        default:
          ret += "-undefined";
          break;
      }
      return ret
    }
  }
};
</script>
