<template>
  <section class="introduce-detail">
      <h3>{{title}}</h3>
      <p v-for="value in content" :key="value.id">{{value}}</p>
      <alink v-for="(value,key) in link" :key="value.id" :linkname="key" :linkpath="value" />
  </section>
</template>

<script>
import alink from "~/components/link"
export default {
    props:['title','content','link'],
    components:{
        alink
    }
}
</script>

<style scoped>
    .introduce-detail{
        padding:3%;
        border-radius: 5px;
        border:1px solid #778899;
    }

    .introduce-detail > h3{
        text-align: center;
        margin-bottom:.5em;
    }

    a{
        bottom:5%;
    }
</style>