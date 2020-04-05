<template>
  <div ref="techCard" class="tech-card">
    <div v-if="techJson.imgpath != ''" class="img-container square">
      <div>
        <img :src="'/img/skill/' + techJson.imgpath" />
      </div>
    </div>
    <div class="description">
      <span class="title">{{ techJson.name }}</span>
      <div
        v-if="techJson != 0"
        class="level"
        :class="'levelcolor' + techJson.level"
      ></div>
      <span class="exp">{{ techJson.experience }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    techJson: {}, 
    animeregist:String
  },
  mounted(){
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "rotate-scaleup",
        duration: 0.1
      },
      dom: this.$refs.techCard,
    });
  }
};
</script>

<style>
.tech-card {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 5px 1px #2e2e2e;
  border-radius: 12px;
}

.tech-card > .img-container {
  width: 24%;
  margin: 5%;
  overflow: hidden;
  border-radius: 4px;
}

.tech-card > .img-container img {
  width: 100%;
  height: 100%;
}
.tech-card > .description {
  display: inline-block;
  padding:2%;
  width: 70%;
}

.tech-card > .description > .title {
  font-size: calc(10px + ((1em - 10px) * 0.7143));
}

.tech-card > .description > .level {
  width: 60%;
  height: 4px;
  border-radius: 2px;
}

.tech-card > .description > .exp{
  font-size: calc(8px + ((1em - 10px) * 0.7143));
}

.levelcolor1 {
  background-color: #0079c2;
}

.levelcolor2 {
  background-color: #019a66;
}

.levelcolor3 {
  background-color: #fc3;
}

.levelcolor4 {
  background-color: #f60;
}

.levelcolor5 {
  background-color: #f33;
}

@media screen and (max-width: 640px){
  .tech-card > .img-container {
  width: 20%;
  margin: 2%;
  overflow: hidden;
  border-radius: 4px;
  }

  .tech-card > .description {
  display: inline-block;
  padding:2%;
  width: 76%;
}
}

@media screen and (max-width: 480px){
.tech-card > .description > .title {
  font-size: 12px;
}

.tech-card > .description > .exp {
  font-size: 10px;
}
}
</style>
