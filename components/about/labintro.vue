<template>
  <section ref="labIntro" class="lab-intro">
    <div class="visual">
      <div class="icon-container square">
        <div>
          <img :src="aboutJson.imgpath" />
        </div>
      </div>
      <div class="overview-container">
        <h3 class="lab-name">{{ aboutJson.name }}</h3>
        <p class="teacher-name">{{ aboutJson.teacher }}</p>
        <p class="lab-thema">{{ aboutJson.thema }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    aboutJson: {},
    animeregist:String
  },
  mounted() {
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "scaleup-fadein",
        duration: 0.3
      },
      dom: this.$refs.labIntro
    });
  }
};
</script>

<style>
section.lab-intro {
  width: 100%;
  padding: 2%;
  overflow: hidden;
  background-color: #f5f5f5;
}

section.lab-intro > .visual {
  padding: 0 10%;
  overflow: hidden;
  text-align: center;
}

section.lab-intro > .visual > .icon-container {
  display: inline-block;
  width: 30%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #a1d8e2;
}

section.lab-intro > .visual > .icon-container img {
  width: 100%;
}

section.lab-intro > .visual > .overview-container {
  display: inline-block;
  width: 65%;
  padding: 2em 0;
  vertical-align: top;
}

section.lab-intro > .visual > .overview-container > h3.lab-name {
  font-size: 1.8rem;
}

section.lab-intro > .visual > .overview-container > h3.teacher-name {
  font-size: 1.2rem;
}

section.lab-intro > .visual > .overview-container > h3.lab-thema {
}

@media screen and (max-width: 640px) {
  section.lab-intro > .visual > .icon-container {
    width: 80%;
  }
}
</style>
