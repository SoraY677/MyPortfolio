<template>
  <section ref="orgIntro" class="org-intro-box">
    <div class="icon square">
      <div>
        <img :src="aboutJson.imgpath" />
      </div>
    </div>
    <div class="description-container">
      <h2>{{ aboutJson.name }}</h2>
      <!-- <ul>
      <li v-for="linkel in link" :key="linkel.id">
        <exlink
          :linkImgName="linkel.imgName"
          :basecolor="linkel.color"
          :linkName="linkel.name"
          :linkPath="linkel.path"
        />
      </li>
      </ul> -->
    </div>
  </section>
</template>

<script>
import exlink from "~/components/exlink";

export default {
  props: {
    aboutJson:Object,
    animeregist: String,
  },
  components: {
    exlink,
  },
  mounted() {
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "scaleup-fadein",
        duration: 0.3,
      },
      dom: this.$refs.orgIntro,
    });
  },
};
</script>

<style>
.org-intro-box {
  height: 100%;
  width: 100%;
  padding: 5%;
  background-color: #f5f5f5;
}
.org-intro-box > .icon {
  width: 60%;
  margin: 0 auto;
}

.org-intro-box > .icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #a1d8e2;
}
.org-intro-box > .description-container {
  width: 100%;
  padding: 0 10%;
}

.org-intro-box > .description-container h2 {
  font-size: 1.3vw;
  text-align: center;
}
@media screen and (max-width: 640px) {
  .org-intro-box > .description-container h2 {
    font-size: 3vw;
  }
}
</style>
