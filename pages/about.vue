<template>
  <section>
    <firstTitle
      :title="'Welcome to My Portfolio!'"
      :subtitle="'ようこそ！ぜひ見ていってください！'"
      animeregist="self-intro"
    />
    <selfintro
      class="selfintro-frame top-middle-space"
      :name="aboutJson.selfintro.name"
      :nameSub="'山口 宙来'"
      :description="aboutJson.selfintro.description"
      :imgpath="'/img/icon.png'"
      animeregist="self-intro"
    />

    <!-- 所属団体 -->
    <section class="org-area top-middle-space">
      <secondTitle
        :title="'Orgnization'"
        :subtitle="'私の所属する組織'"
        animeregist="org_title"
      />
      <ul class="top-small-space">
        <!-- 横浜分室 -->
        <li>
          <clubintro
            :aboutJson="aboutJson.affiliation[0]"
            animeregist="org_title"
          />
        </li>
        <!-- デジコン -->
        <li>
          <clubintro
            :aboutJson="aboutJson.affiliation[1]"
            animeregist="org_title"
          />
        </li>
        <!-- 学科学生会 -->
        <li>
          <clubintro
            :aboutJson="aboutJson.affiliation[2]"
            animeregist="org_title"
          />
        </li>
      </ul>
      <div class="labintro-container top-small-space"><labintro :aboutJson="aboutJson.lab"/></div>
    </section>
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import secondTitle from "~/components/secondTitle";
import selfintro from "~/components/about/selfintro";
import clubintro from "~/components/about/clubintro";
import labintro from "~/components/about/labintro";

export default {
  components: {
    firstTitle,
    secondTitle,
    selfintro,
    clubintro,
    labintro
  },
  data() {
    return {
      aboutJson: this.$store.getters["jsonstore/about"],
    };
  },
};
</script>

<style>
.selfintro-frame {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}

section.org-area > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
}

section.org-area > ul > li {
  width: 33%;
}

.labintro-container{
  width:100%;
}
@media screen and (max-width: 640px) {
  section.org-area > ul > li {
    width: 100%;
    padding: 1% 20%;
  }

  .selfintro-frame {
    padding: 0 10%;
    width: 100%;
  }
}
</style>
