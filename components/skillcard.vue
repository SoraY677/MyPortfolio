<template>
  <section class="skill-card">
    <div class="skill-icon" v-if="category!='資格'">
      <img :src="'/img/skill/' + name + '.svg'" />
    </div>
    <div class="skill-detail flex-center">
      <h3>{{ name }}</h3>
      <span class="level-number" :class="colorLevel(level)">
        {{ "Level." + level }}
      </span>
      <span>{{experience+" ~"}}</span>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  display: flex;
  width: 95%;
  margin: 0 auto 20%;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color:#fdfdfd;
  border-radius: 10px;
  box-shadow: 3px 3px 1px 3px #2e2e2e; 
}

.skill-icon {
  display: flex;
  width:6vh;
  height:6vh;
  justify-content: center;
  align-items: center;
}
.skill-icon img {
  width: 80%;
  height: 80%;
}

.skill-detail {
  float:left;
  text-align: center;
  
}

.skill-detail > *{
  width:100%;
}

.skill-detail h3{
  font-size:1.5em;
} 
.level-number {
  display: block;
  font-weight: bolder;
}
.skill-level1 {
  color: #0079c2;
}
.skill-level2 {
  color: #019a66;
}
.skill-level3 {
  color: #ffcc33;
}
.skill-level4 {
  color: #ff6600;
}
.skill-level5 {
  color: #ff3333;
}
.skill-level-undefined {
  display: none;
}

</style>

<script>
export default {
  props: ["category","name", "level","experience"],
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
      return ret;
    }
  }
};
</script>
