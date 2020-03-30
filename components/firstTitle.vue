<template>
  <h1 class="first-title">
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
    title:"",
    subtitle:""
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

</style>