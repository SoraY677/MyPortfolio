<template>
  <section class="introduce-detail">
      <h3>{{title}}</h3>
      <p >{{content}}</p>
  </section>
</template>

<script>
export default {
    props:['title','content']
}
</script>

<style scoped>
    .introduce-detail{
        background-color: #888888;
    }

    .three-equally{
        width:30%;
    }

    .two-equally{
        width:45%;
    }
</style>