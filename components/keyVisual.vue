<template>
  <div ref="keyVisual" class="key-visual">
    <p class="title">My PortFolio</p>
    <p class="sub-title">Sora Yamaguchi</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("animeStack/pushAnime", {
      regist: "top",
      anime: {
        name: "scaleup-fadein",
        duration: 0.3
      },
      dom: this.$refs.keyVisual
    });
  }
};
</script>

<style>
/* キービジュアル */
.key-visual {
  width: fit-content;
  margin: 50px auto 0 auto;
  padding: 14% 20%;
  border: 6px solid #a1d8e2;
  border-radius: 30px;
  text-align: center;
}

.key-visual > .title {
  font-size: 3em;
}

.key-visual > .sub-title {
  font-size: 1.4em;
}
</style>
