<template>
  <section class="inner">
    <pageTitle :title="'Product'" />
    <ul class="flex-box">
      <li v-for="productItem in productJson" :key="productItem.id">
        <productCard :name="productItem.name" :dev="productItem.dev" :skill="productItem.skill" :description="productItem.description" :link="productItem.link"/>  
      </li>
    </ul>
  </section>
</template>

<style scoped>
  li{
    width:45%;
  }
</style>

<script>
import pageTitle from "~/components/pagetitle";
import productCard from "~/components/productcard"
export default {
  asyncData({store}){
    return{
      productJson: store.getters['getProductJson']
    }
  },
  components: {
    pageTitle,
    productCard
  }
};
</script>