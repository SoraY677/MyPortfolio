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
          <orgintro
            :aboutJson="aboutJson.orglist.bunsitu"
            animeregist="org_title"
          />
        </li>
        <!-- デジコン -->
        <li>
          <orgintro :aboutJson="aboutJson.orglist.dc" animeregist="org_title" />
        </li>
        <!-- 学科学生会 -->
        <li>
          <orgintro
            :aboutJson="aboutJson.orglist.student"
            animeregist="org_title"
          />
        </li>
        <li>
          <orgintro
            :aboutJson="aboutJson.orglist.lab"
            animeregist="org_title"
          />
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import secondTitle from "~/components/secondTitle";
import selfintro from "~/components/about/selfintro";
import orgintro from "~/components/about/orgintro";
import labintro from "~/components/about/labintro";

export default {
  components: {
    firstTitle,
    secondTitle,
    selfintro,
    orgintro,
    labintro
  },
  data() {
    return {
      aboutJson: this.$store.getters["jsonstore/about"]
    };
  }
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
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
}

section.org-area > ul > li {
  width: 50%;
  padding: 1%;
}

.labintro-container {
  width: 100%;
}
@media screen and (max-width: 640px) {
  section.org-area > ul {
    width: 95%;
  }

  section.org-area > ul > li,
  .labintro-container {
    width: 100%;
    padding: 1% 12%;
  }

  .selfintro-frame {
    padding: 0 10%;
    width: 100%;
  }
}
</style>
