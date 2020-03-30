<template>
  <a class="ex-link" :href="linkPath" :style="{backgroundColor:basecolor}">
    <div v-if="linkImgName!=''" class="img-link">
      <div class="icon-container">
        <font-awesome-icon :icon="['fab', 'twitter']" />
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
    linkName: String
  }
};
</script>

<style>
a.ex-link {
  border-radius: 4px;
  padding:4px;
  font-size:1.2rem;
  color:#fff;
}

a.ex-link .icon-container {
  display: inline;
}

a.ex-link .icon-container > img.icon {
  display: block;
}

a.ex-link .icon-container > span {
}
</style>
