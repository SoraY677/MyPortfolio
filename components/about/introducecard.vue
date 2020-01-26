<template>
  <section>
      <div class="introduce-picture">
        <img src="/img/about/icon.png">
      </div>
      <div class="introduce-detail">
      <h2>{{name}}</h2>
      <p v-for="el in content" :key="el.id">{{el}}</p>
      <alink v-for="(value,key) in link" :key="value.id" :linkname="key" :linkpath="value" />
      </div>
  </section>
</template>

<style scoped>
    .introduce-picture{
        width:20%;
        float:left;
        margin-left:10%;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border:1px solid #778899; 
        overflow: hidden;
    }

    .introduce-picture > img{
        width:100%

    }

    .introduce-detail{
        width:60%;
        margin-left:3%;
        float:left;
    }

    @media screen and (max-width:640px) {
        .introduce-picture{
            width:80%;

        }
        .introduce-detail{
            width:90%;
        }
    }

</style>

<script>
import alink from "~/components/link"
export default {
    props:['name','content','link'],
    components:{
        alink
    }
}
</script>