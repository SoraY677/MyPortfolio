<template>
  <div>
    <top />
    <myheader/>
    <ul>
    <li><about/></li>
    <li><skill/></li>
    <li><product /></li>
    </ul>
  </div>
</template>

<style scoped>

li{
  padding-top:10%;
}

li:nth-child(2n+1){
  background-color:#fff;
}

li:nth-child(2n){
  background-color:#eff3ff;
}
</style>

<script>

import myheader from "~/layouts/header"
import top from "~/pages/top";
import about from "~/pages/about";
import skill from "~/pages/skill";
import product from "~/pages/product";

export default {
  props:[""],
  data(){
    return{
      scrollY:0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  },
  components:{
    myheader,
    top,
    about,
    skill,
    product
  }
}
</script>
