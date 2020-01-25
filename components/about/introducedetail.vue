<template>
  <section class="introduce-detail">
      <h3>{{title}}</h3>
      <p v-for="value in content" :key="value.id">{{value}}</p>
      <a v-for="(value,key) in link" :key="value.key" :href="value">{{key}}</a>
  </section>
</template>

<script>
export default {
    props:['title','content','link']
}
</script>

<style scoped>
    .introduce-detail{
        padding:3%;
        border-radius: 5px;
        background-color: #c9c5c5;
    }

    .three-equally{
        width:30%;
    }

    .two-equally{
        width:45%;
    }
</style>