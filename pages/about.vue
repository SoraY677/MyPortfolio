<template>
  <section id="about-page">
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
      </section>
      
      <!--経歴 -->
      <section>
        <pageItemTitle :title="'経歴'" :subtitle="'carrer'" />
      </section>
    </div>
  </section>
</template>

<script>
import pageTitle from "~/components/pagetitle";
import pageItemTitle from "~/components/pageitemtitle";
import introduceCard from "~/components/about/introducecard";
import introduceDetail from "~/components/about/introducedetail";
import hobbyCard from "~/components/about/hobbycard";
export default {
  asyncData({ store }) {
    return {
      productJson: store.getters["getAboutJson"]
    };
  },
  components: {
    pageTitle,
    pageItemTitle,
    introduceCard,
    introduceDetail,
    hobbyCard
  }
};
</script>
