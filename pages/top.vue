<template>
  <div class="top">
    <keyVisual />

    <!-- リンク集 -->
    <ul>
      <li>
        <!-- twitter -->
        <exlink
          :linkImgName="'twitter'"
          :basecolor="'#00acee'"
          :linkName="'twitter'"
          :linkPath="'https://twitter.com/TenYDGB'"
          animeregist="top"
        />
      </li>
      <li>
        <!-- github -->
        <exlink
          :linkImgName="'github'"
          :basecolor="'#000'"
          :linkName="'github'"
          :linkPath="'https://github.com/SoraY677'"
          animeregist="top"
        />
      </li>
      <li>
        <!-- qiita -->
        <exlink
          :linkImgName="''"
          :basecolor="'#55c500'"
          :linkName="'Qiita'"
          :linkPath="'https://qiita.com/SoraYamaguchi'"
          animeregist="top"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import keyVisual from "~/components/keyVisual";
import exlink from "~/components/exlink";
export default {
  components: {
    exlink,
    keyVisual
  }
};
</script>

<style>
/* リンク集 */
.top > ul {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.top > ul li {
  padding: 0 10px;
}

@media screen and (max-width: 540px) {
  .top > .key-visual {
    padding: 12% 18%;
  }
  .top > .key-visual > .title {
    font-size: 2rem;
  }

  .top > .key-visual > .sub-title {
    font-size: 1em;
  }
}
</style>
