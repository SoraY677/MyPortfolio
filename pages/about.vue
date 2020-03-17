<template>
  <section id="about-page" class="inner">
    <pageTitle :title="'About'" />
    <div id="page-content-area">
      <section>
        <!-- 自己紹介セクション -->
        <pageItemTitle
          :title="aboutJson.introduce.title"
          :subtitle="aboutJson.introduce.subtitle"
          v-scroll
        />
        <introduceCard
          :name="aboutJson.introduce.name"
          :content="aboutJson.introduce.content"
          :link="aboutJson.introduce.link"
          v-scroll ="0.2"
        />
      </section>
      <!-- 趣味エリア -->
      <section>
        <pageItemTitle
          :title="aboutJson.hobby.title"
          :subtitle="aboutJson.hobby.subtitle"
          v-scroll ="0.2"
        />
        <div class="flex-box">
          <hobbyCard
            v-for="(value, index) in aboutJson.hobby.category"
            :key="value.id"
            :index="index"
            :name="value"
            v-scroll ="0.3*index"
          />
        </div>
      </section>

      <!-- 所属団体エリア -->
      <section>
        <pageItemTitle
          :title="aboutJson.affiliation.title"
          :subtitle="aboutJson.affiliation.subtitle"
        />
        <div class="flex-box">
          <introduceDetail
            class="three-equally"
            v-for="org in aboutJson.affiliation.orglist"
            :key="org.id"
            :title="org.name"
            :content="org.content"
            :link="org.link"
            v-scroll ="0.3"
          />
        </div>
      </section>

      <!-- 研究室 -->
      <section>
        <pageItemTitle
          :title="aboutJson.lab.title"
          :subtitle="aboutJson.lab.subtitle"
        />
        <labCard
          :labname="aboutJson.lab.labname"
          :teacher="aboutJson.lab.teacher"
          :labthema="aboutJson.lab.labthema"
          :mythema="aboutJson.lab.mythema"
          :content="aboutJson.lab.content"
          :link="aboutJson.lab.link"
          v-scroll
        />
      </section>

      <!--経歴 -->
      <section>
        <pageItemTitle
          :title="aboutJson.career.title"
          :subtitle="aboutJson.career.subtitle"
        />
        <careerCard :list="aboutJson.career.list" v-scroll />
      </section>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 5vh;
}
</style>

<script>
import pageTitle from "~/components/pagetitle";
import pageItemTitle from "~/components/pageitemtitle";
import introduceCard from "~/components/about/introducecard";
import introduceDetail from "~/components/about/introducedetail";
import hobbyCard from "~/components/about/hobbycard";
import labCard from "~/components/about/labcard";
import careerCard from "~/components/about/careercard";

export default {
  data() {
    return {
      aboutJson
    };
  },
  created() {
    this.aboutJson = require(`~/assets/json/about.json`);
  },
  components: {
    pageTitle,
    pageItemTitle,
    introduceCard,
    introduceDetail,
    hobbyCard,
    labCard,
    careerCard
  }
};
</script>
