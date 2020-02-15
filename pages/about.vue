<template>
  <section id="about-page" class="inner">
    <pageTitle :title="'About'" />
    <div id="page-content-area">
      <section>
        <!-- 自己紹介セクション -->
        <pageItemTitle
          :title="productJson.introduce.title"
          :subtitle="productJson.introduce.subtitle"
        />
        <introduceCard
          :name="productJson.introduce.name"
          :content="productJson.introduce.content"
          :link="productJson.introduce.link"
        />
      </section>
      <!-- 趣味エリア -->
      <section>
        <pageItemTitle
          :title="productJson.hobby.title"
          :subtitle="productJson.hobby.subtitle"
        />
        <div class="flex-box">
          <hobbyCard
            v-for="(value, index) in productJson.hobby.category"
            :key="value.id"
            :index="index"
            :name="value"
          />
        </div>
      </section>

      <!-- 所属団体エリア -->
      <section class="introduce">
        <pageItemTitle
          :title="productJson.affiliation.title"
          :subtitle="productJson.affiliation.subtitle"
        />
        <div class="flex-box">
          <introduceDetail
            class="three-equally"
            v-for="org in productJson.affiliation.orglist"
            :key="org.id"
            :title="org.name"
            :content="org.content"
            :link="org.link"
          />
        </div>
      </section>

      <!-- 研究室 -->
      <section>
        <pageItemTitle
          :title="productJson.lab.title"
          :subtitle="productJson.lab.subtitle"
        />
        <labCard
          :labname="productJson.lab.labname"
          :teacher="productJson.lab.teacher"
          :labthema="productJson.lab.labthema"
          :mythema="productJson.lab.mythema"
          :content="productJson.lab.content"
          :link="productJson.lab.link"

        />
      </section>

      <!--経歴 -->
      <section>
        <pageItemTitle :title="productJson.career.title" :subtitle="productJson.career.subtitle" />
        <careerCard :list="productJson.career.list"/>
      </section>
    </div>
  </section>
</template>

<style scoped>
  section{
    margin-bottom:5vh;
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
  asyncData({ store }) {
    return {
      productJson : require(`~/assets/json/about.json`)
    };
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
