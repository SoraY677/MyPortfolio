<template>
  <section>
    <pageTitle :title="'Product'" />
    <ul class="flex-box">
      <li v-for="productItem in productList" :key="productItem.id">
        <productCard :name="productItem.name"/>  
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
  data(){
    return{
      productList:[
        {name:"hogehoge"} 
      ]

      
    }
  },
  components: {
    pageTitle,
    productCard
  }
};
</script>