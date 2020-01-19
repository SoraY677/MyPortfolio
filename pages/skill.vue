<template>
  <section>
    <pageTitle :title="'Skill'" />
    <section class="inner" v-for="item in skillJson" :key="item.id">
      <pageItemTitle :title="item.title" :subtitle="item.subtitle" />
      <ul class="flex-box">
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
    }
    li{
        height:100%;
        width:23%;
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
