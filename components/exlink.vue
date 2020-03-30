<template>
  <a class="ex-link">
    <div class="icon-container">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </div>
    <p>
      {{linkName}}
    </p>
  </a>
</template>

<script>
export default {
  props:{
    linkImgName:"",
    linkName:""
  }
}
</script>

<style>
a.ex-link{
  
}

a.ex-link .icon-container{
  width:25%;
  padding-bottom:100%;
}

a.ex-link .icon-container > img.icon{
  display:block;
  width: 100%;
  height:100%;
}

a.ex-link .icon-container > p{

}



</style>