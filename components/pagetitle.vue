<template>
  <div class="page-title flex-box">
    <h1 class="double-line-surround">{{title}}</h1>
  </div>
</template>

<style scoped>
  .page-title{
    margin-bottom:3%;
  }

  h1.double-line-surround::before,
  h1.double-line-surround::after{
    display: block;
    animation: surround_anim 0.3s ease-out 0s 1 alternate;
    width: 115%;
    height: 120%;
  }

</style>

<script>
export default {
    props:[
        'title'
    ]
}
</script>
