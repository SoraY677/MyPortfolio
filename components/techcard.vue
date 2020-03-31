<template>
  <div class="tech-card">
    <div class="img-container square">
      <div>
        <img :src="'/img/skill/' + techJson.name + '.svg'" />
      </div>
    </div>
    <div class="description">
      <span class="title">{{ techJson.name }}</span>
      <div class="level" :class="'levelcolor' + techJson.level"></div>
      <span class="exp">{{ techJson.experience }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    techJson: {}
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

.img-container {
  width: 24%;
  margin: 5%;
  overflow: hidden;
  border-radius: 4px;
}

.img-container img {
  width: 100%;
  height: 100%;
}
.tech-card > .description {
  display: inline-block;
  width: 70%;
}

.tech-card > .description > .title {
  font-size: calc(8px + ((1em - 10px) * 0.7143));
}

.tech-card > .description > .level {
  width: 60%;
  height: 4px;
  border-radius:2px;
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
</style>
