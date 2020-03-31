<template>
  <section>
    <firstTitle title="My Tech" subtitle="身に着けた技術" />

    <section class="tech-list">
      <h3>言語系</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.Language" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

    <section class="tech-list">
      <h3>フレームワーク</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.Framework" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

    <section class="tech-list">
      <h3>ツール</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.Tool" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

    <section class="tech-list">
      <h3>OS</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.OS" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

    <section class="tech-list">
      <h3>その他</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.Other" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

    <section class="tech-list">
      <h3>資格</h3>
      <ul>
        <li class="teck-card-cotainer" v-for="skillel in skillJson.Qualification" :key="skillel.id">
          <techcard :techJson="skillel"/>
        </li>
      </ul>
    </section>

  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import techcard from "~/components/techcard";
export default {
  components: {
    firstTitle,
    techcard
  },
  data() {
    return {
      skillJson:{}
    };
  },
  created() {
    this.skillJson = require(`~/assets/json/skill.json`);
  }
};
</script>

<style>
.tech-list > ul{
  display: flex;
  flex-wrap: wrap;
}
.tech-list > ul > li{
  width:18%;
  min-width:165px;
  margin:2%;
}
</style>
