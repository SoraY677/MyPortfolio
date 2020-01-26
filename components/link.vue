<template>
  <a :href="linkpath" target="_blank">
    <img :src="'img/icon/' + linkname + '.svg'" />{{ linkname }}
  </a>
</template>

<style scoped>
a {
  display: inline-flex;
  height: 1.3em;
  font-size: 1.1em;
  margin-right: 1.2em;
  float: right;
  justify-content: center;
  align-items: center;
}
a > img {
  height: 100%;
}
</style>

<script>
export default {
  props: ["linkname", "linkpath"]
};
</script>
