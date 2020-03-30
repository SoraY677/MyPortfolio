<template>
  <section class="top">
    <!--TODO: 言語選択ボタン -->


    <!-- キービジュアル -->
    <div class="key-visual">
      <p class="title">My PortFolio</p>
      <p class="sub-title">Sora Yamaguchi</p>
    </div>
    <!-- リンク集 -->
    <exlink :linkImgName="'twitter'" :basecolor="'#00acee'" :linkName="'twitter'" :linkPath="'#'"/>

  </section>
</template>

<script>
import exlink from "~/components/exlink"
export default {
  components:{
    exlink
  }

}
</script>

<style>

</style>