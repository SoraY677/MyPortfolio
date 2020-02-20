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

  @media screen and (max-width: 480px){
    li{
      width:100%;
    }
  }
</style>

<script>
import pageTitle from "~/components/pagetitle";
import productCard from "~/components/productcard"
export default {
  data(){
    return{
      productJson
    }
  },
  created(){
    this.productJson = require(`~/assets/json/product.json`)
  },
  components: {
    pageTitle,
    productCard
  }
};
</script>