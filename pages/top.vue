<template>
  <section class="top">
    <!--TODO: 言語選択ボタン -->

    <!-- キービジュアル -->
    <div class="key-visual">
      <p class="title">My PortFolio</p>
      <p class="sub-title">Sora Yamaguchi</p>
    </div>

    <!-- リンク集 -->
    <ul>
      <li>
        <!-- twitter -->
        <exlink
          :linkImgName="'twitter'"
          :basecolor="'#00acee'"
          :linkName="'twitter'"
          :linkPath="'https://twitter.com/TenYDGB'"
        />
      </li>
      <li>
        <!-- github -->
        <exlink
          :linkImgName="'github'"
          :basecolor="'#000'"
          :linkName="'github'"
          :linkPath="'https://github.com/SoraY677'"
        />
      </li>
      <li>
        <!-- qiita -->
        <exlink
          :linkImgName="''"
          :basecolor="'#55c500'"
          :linkName="'Qiita'"
          :linkPath="'https://qiita.com/SoraYamaguchi'"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import exlink from "~/components/exlink";
export default {
  components: {
    exlink
  }
};
</script>

<style>
/* キービジュアル */
section.top > .key-visual {
  width: fit-content;
  margin: 50px auto 0 auto;
  padding: 14% 20%;
  border: 4px solid #00608d;
  border-radius: 30px;
  text-align: center;
}

section.top > .key-visual > .title {
  font-size: 3em;
}

section.top > .key-visual > .sub-title {
  font-size: 1.4em;
}

/* リンク集 */
section.top > ul {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

section.top > ul li {
  padding: 0 10px;
}

@media screen and (max-width: 540px){
  section.top > .key-visual{
    padding: 12% 18%;
  }
  section.top > .key-visual > .title {
  font-size: 2.0rem;
}

section.top > .key-visual > .sub-title {
  font-size: 1.0em;
}
}
</style>
