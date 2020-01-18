<template>
  <section>
    <pageTitle :title="'Skill'" />
    <section class="inner" v-for="item in items" :key="item.id">
      <pageItemTitle :title="item.title" :subtitle="item.subtitle" />
      <ul class="flex-box">
          <li v-for="skillcard in item.cardlist" :key="skillcard.id">
            <skillCard :category="item.subtitle" :name="skillcard.name" />
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
  data() {
    return {
      items: {
        language: {
          title: "言語系",
          subtitle: "language",
          cardlist: [{ name: "html5" }, { name: "css3" },{name:"php"},{name:"nodejs"}]
        }
      }
    };
  }
};
</script>
