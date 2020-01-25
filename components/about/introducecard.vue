<template>
  <section>
      <div class="introduce-picture">
        <img src="/img/about/icon.png">
      </div>
      <div class="introduce-detail">
      <h2>{{name}}</h2>
      <p v-for="el in content" :key="el.id">{{el}}</p>
      <a target="_blank" v-for="(value,key) in link" :key="key" :href="value">{{key}}</a>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .introduce-picture{
        width:40%;
        float:left;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border:2px solid #2e2e2e; 
        overflow: hidden;
    }

    .introduce-picture > img{
        width:100%;

    }

    .introduce-detail{
        width:60%;
        float:left;
    }


</style>

<script>
export default {
    props:['name','content','link']
}
</script>