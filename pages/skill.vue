<template>
  <section class="inner">
    <pageTitle :title="'Skill'" />
    <section v-for="item in skillJson" :key="item.id">
      <pageItemTitle :title="item.title" :subtitle="item.subtitle" />
      <ul>
          <li v-for="skillcard in item.cardList" :key="skillcard.id">
            <skillCard :category="skillcard" :name="skillcard.name" />
          </li>
      </ul>
    </section>
  </section>
</template>


<style scoped>

    ul{
        height:20%;  
        display: flex;
        flex-wrap: wrap;
    }
    li{
        height:100%;
        width:23%;
        float:left;
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
  asyncData({store}){
    return{
      skillJson: store.getters['getSkillJson']
    }
  }
};
</script>
