<template>
  <a ref="exlink" class="ex-link" target="_blank" :href="linkPath" :style="{backgroundColor:basecolor}">
    <div v-if="linkImgName!=''" class="img-link">
      <div class="icon-container">
        <font-awesome-icon :icon="['fab', linkImgName]" />
      </div>
      <span>
        {{ linkName }}
      </span>
    </div>
    <div v-if="linkImgName===''" class="simple-link">
      {{linkName}}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    linkPath:String,
    linkImgName: String,
    basecolor: String,
    linkName: String,
    animeregist:String
  },
  mounted(){
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "scaleup-fadein",
        duration: 0.3
      },
      dom: this.$refs.exlink
    });
  }
};
</script>

<style>
a.ex-link {
  border-radius: 4px;
  padding:4px;
  font-size:1.2rem;
  color:#fff;
  transition-duration: .3s;
}

a.ex-link:hover{
  transform: scale(1.2);
  box-shadow: 0 2px 3px 2px #ddd   ;
}

a.ex-link .icon-container {
  display: inline;
}

a.ex-link .icon-container > img.icon {
  display: block;
}

@media screen and (max-width: 640px){
  a.ex-link{
    font-size:0.9rem;
  }
}
</style>
