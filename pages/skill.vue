<template>
  <section class="inner">
    <pageTitle :title="'Skill'" />
    <section class="skill-category" v-for="item in skillJson" :key="item.id">
      <pageItemTitle :title="item.title" :subtitle="item.subtitle" />
      <ul>
        <li v-for="skillcard in item.cardList" :key="skillcard.id" v-scroll="0.3">
          <skillCard
            :category="item.title"
            :name="skillcard.name"
            :level="skillcard.level"
            :experience="skillcard.experience"
          />
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
ul {
  height: 20%;
  display: flex;
  flex-wrap: wrap;
}
li {
  height: 100%;
  width: 25%;
  float: left;
}

.skill-category {
  margin-bottom: 2%;
}

@media screen and (max-width: 640px) {
  li {
    width: 33%;
  }
}

@media screen and (max-width: 490px) {
  li {
    width: 50%;
  }
}

@media screen and (max-width: 280px) {
  li {
    width: 100%;
  }
}
</style>
<script>
import pageTitle from "~/components/pagetitle";
import pageItemTitle from "~/components/pageitemtitle";
import skillCard from "~/components/skillcard";
export default {
  components: {
    pageTitle,
    pageItemTitle,
    skillCard
  },
  data() {
    return { skillJson };
  },
  created: function() {
    this.skillJson = require(`~/assets/json/skill.json`);
  }
};
</script>
