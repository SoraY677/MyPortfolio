<template>
  <section>
    <firstTitle
      :title="'Welcome to My Portfolio!'"
      :subtitle="'ようこそ！ぜひ見ていってください！'"
      animeregist="self-intro"
    />
    <selfintro
      class="selfintro-frame top-middle-space"
      :imgpath="'/img/icon.png'"
      :name="'Sora YAMAGUCHI'"
      :nameSub="'山口 宙来'"
      :description="description"
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
            :name="'横浜分室'"
            :description="'hogeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'"
            :imgpath="'https://pbs.twimg.com/profile_images/1272197668/stoyc_400x400.jpg'"
            :link="link"
            animeregist="org_title"
          />
        </li>
        <!-- デジコン -->
        <li>
          <clubintro
            :name="'デジタルコンテンツ研究会'"
            :description="'hoge'"
            :imgpath="'https://pbs.twimg.com/profile_images/378800000068421807/cdc807adc80db6980632a40ab41090f2_400x400.png'"
            animeregist="org_title"
          />
        </li>
        <!-- 横浜分室 -->
        <li>
          <clubintro
            :name="'学科学生会'"
            :description="'hoge'"
            :imgpath="'https://pbs.twimg.com/profile_images/875409727118647296/OcDjNVIo_400x400.jpg'"
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
import clubintro from "~/components/about/clubintro";

export default {
  components: {
    firstTitle,
    secondTitle,
    selfintro,
    clubintro,
  },
  data() {
    return {
      description:
        "現在大学4年生のエンジニア。Webアプリの開発(特にフロントエンド)ばかりやっています。最近はAIに興味があり、自分でちょっとずつ勉強してみています...。",
      link: [
        {
          imgName: "twitter",
          color: "#00acee",
          name: "twitter",
          path: "https://twitter.com/TenYDGB",
        },
      ],
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
  justify-content: left;
  flex-wrap: wrap;
  align-items: baseline;
}

section.org-area > ul > li {
  width: 33%;
  padding: 1%;
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
