<template>
  <section ref="tech">
    <firstTitle title="My Tech" subtitle="身に着けた技術" />

    <section class="tech-list top-middle-space">
      <secondTitle
        title="Language"
        subtitle="言語"
        animeregist="language-list"
      />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Language"
          :key="skillel.id"
        >
          <techcard
            :techJson="skillel"
            animeregist="language-list"
            @visibleLevelDetail="visibleLevelDetail"
          />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle
        title="Framework"
        subtitle="フレームワーク"
        animeregist="framework-list"
      />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Framework"
          :key="skillel.id"
        >
          <techcard
            :techJson="skillel"
            animeregist="framework-list"
            @visibleLevelDetail="visibleLevelDetail"
          />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="Tools" subtitle="ツール" animeregist="tool-list" />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Tool"
          :key="skillel.id"
        >
          <techcard
            :techJson="skillel"
            animeregist="tool-list"
            @visibleLevelDetail="visibleLevelDetail"
          />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="OS" subtitle="OS系統" animeregist="os-list" />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.OS"
          :key="skillel.id"
        >
          <techcard
            :techJson="skillel"
            animeregist="os-list"
            @visibleLevelDetail="visibleLevelDetail"
          />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="Others" subtitle="その他" animeregist="other-list" />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Other"
          :key="skillel.id"
        >
          <techcard
            :techJson="skillel"
            animeregist="other-list"
            @visibleLevelDetail="visibleLevelDetail"
          />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle
        title="qualification"
        subtitle="資格"
        animeregist="qual-list"
      />
      <ul class=" top-small-space">
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Qualification"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" animeregist="qual-list" />
        </li>
      </ul>
    </section>
    <div ref="levelDetailContainer" class="level-detail-container">
      <skillLevelDetail
        v-if="levelNum"
        :levelDetail="skillLevelJson"
        :levelNum="levelNum"
      />
    </div>
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import secondTitle from "~/components/secondTitle";
import techcard from "~/components/techcard";
import skillLevelDetail from "~/components/skillLevelDetail";

export default {
  data() {
    return {
      levelNum: 0,
      skillJson: this.$store.getters["jsonstore/skill"],
      skillLevelJson: this.$store.getters["jsonstore/skillLevel"]
    };
  },
  components: {
    firstTitle,
    secondTitle,
    techcard,
    skillLevelDetail
  },
  methods: {
    visibleLevelDetail(elit) {
      this.$refs.levelDetailContainer.style.top =
        elit.y -
        (this.$refs.tech.getBoundingClientRect().top + window.pageYOffset) +
        "px";
      this.$refs.levelDetailContainer.style.left = elit.x + "px";
      this.levelNum = elit.level;
    }
  }
};
</script>

<style>
.tech-list > ul {
  display: flex;
  flex-wrap: wrap;
}
.tech-list > ul > li {
  width: 25%;
  min-width: 200px;
  padding: 2%;
}

.level-detail-container {
  position: absolute;
}

@media screen and (max-width: 1020px) {
  .tech-list > ul > li {
    width: 33%;
  }
}

@media screen and (max-width: 780px) {
  .tech-list > ul > li {
    width: 50%;
    padding: 2%;
  }
}

@media screen and (max-width: 530px) {
  .tech-list > ul > li {
    min-width: 160px;
  }
}
</style>
