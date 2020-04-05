<template>
  <h1 ref="firstTitle" class="first-title">
    <span class="title">
      {{title}}
    </span>
    <span class="sub-title">
    {{subtitle}}
    </span>
  </h1>
</template>

<script>
export default {
  props:{
    title:String,
    subtitle:String,
    animeregist:String
  },
  mounted(){
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "scaleup-fadein",
        duration: 0.3,
        distance:300
      },
      dom: this.$refs.firstTitle
    });
  }

}
</script>

<style>
h1.first-title > span{
  display: block;
  margin:0 auto;
  text-align: center;
}

.first-title > .title{
  width:fit-content;
  border-bottom:1px solid #2e2e2e;
  font-size:2.3rem;
}

.first-title > .sub-title{
  width:fit-content;
  font-size:1.4rem;
}

@media screen and (max-width: 640px){
  .first-title > .title{
    font-size:1.5rem;
  }

  .first-title > .sub-title{
    font-size:1.1rem;
  }
   
}
</style>