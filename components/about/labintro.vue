<template>
  <section class="lab-intro">
    <div class="visual">
      <div class="icon-container square">
        <div>
          <img :src="aboutJson.imgpath" />
        </div>
      </div>
      <div class="overview-container">
        <h3 class="lab-name">{{ aboutJson.name }}</h3>
        <h3 class="teacher-name">{{ aboutJson.teacher }}</h3>
        <h3 class="lab-thema">{{ aboutJson.thema }}</h3>
      </div>
    </div>
    <p>{{ aboutJson.content }}</p>
  </section>
</template>

<script>
export default {
  props: {
    aboutJson: {},
  },
};
</script>

<style>
section.lab-intro {
  width: 100%;
  padding: 2%;
  overflow: hidden;
  background-color: #f5f5f5;
}

section.lab-intro > .visual{
  padding:0 10%;
  overflow: hidden;
}

section.lab-intro > .visual > .icon-container {
  width: 30%;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #a1d8e2;
}

section.lab-intro > .visual > .icon-container img {
  width: 100%;
}

section.lab-intro > .visual > .overview-container {
  float: left;
  padding:1em 0;
  margin:  0.8rem;
}

section.lab-intro > .visual > .overview-container > h3.lab-name {
  font-size: 1.8rem;
}

section.lab-intro > .visual > .overview-container > h3.teacher-name {
  font-size: 1.2rem;
}

section.lab-intro > .visual > .overview-container > h3.lab-thema {
}

section.lab-intro > p {
  min-height: 100%;
  padding: 1em 1em 1em 1em;
  margin-top:0.3rem;
  clear: both;
  overflow: auto;
  border-top: 1px solid #2e2e2e;
}
</style>
