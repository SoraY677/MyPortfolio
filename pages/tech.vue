<template>
  <section>
    <firstTitle title="My Tech" subtitle="身に着けた技術" />

    <section class="tech-list top-middle-space">
     <secondTitle title="Language" subtitle="言語"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Language"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="Framework" subtitle="フレームワーク"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Framework"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="Tools" subtitle="ツール"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Tool"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="OS" subtitle="OS系統"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.OS"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="Others" subtitle="その他"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Other"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>

    <section class="tech-list top-middle-space">
      <secondTitle title="qualification" subtitle="資格"/>
      <ul>
        <li
          class="teck-card-cotainer"
          v-for="skillel in skillJson.Qualification"
          :key="skillel.id"
        >
          <techcard :techJson="skillel" />
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import secondTitle from "~/components/secondTitle";
import techcard from "~/components/techcard";

export default {
  components: {
    firstTitle,
    secondTitle,
    techcard
  },
  data() {
    return {
      skillJson: {}
    };
  },
  created() {
    this.skillJson = require(`~/assets/json/skill.json`);
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

@media screen and (max-width: 530px){
  .tech-list > ul > li {
    min-width:160px;
  }
}
</style>
