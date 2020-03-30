<template>
  <section>
    <firstTitle
      :title="'Welcome to My Portfolio!'"
      :subtitle="'ようこそ！ぜひ見ていってください！'"
    />
    <selfintro class="top-space" :imgpath="'/img/icon.png'" :name="'Sora YAMAGUCHI'" :nameSub="'山口 宙来'" :description="description"/>

    <!-- 所属団体 -->
    <section>
      <secondTitle :title="'Orgnization'" :subtitle="'私の所属する組織'" />
    </section>
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import secondTitle from "~/components/secondTitle";
import selfintro from "~/components/about/selfintro";

export default {
  components: {
    firstTitle,
    secondTitle,
    selfintro
  },
  data(){
    return{
      description:"現在大学4年生のエンジニア。Webアプリの開発(特にフロントエンド)ばかりやっています。最近はAIに興味があり、自分でちょっとずつ勉強してみています...。"
    }

  }
};
</script>

<style></style>
