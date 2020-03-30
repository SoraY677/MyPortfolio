<template>
  <div>
    <top class="section-pattern"/>
    <section class=".section-pattern"></section>
  </div>
</template>

<script>
import top from "~/pages/top"
export default {
  components: {
    top
  }
};
</script>

<style>
  .section-pattern:nth-child(2n){
    background-color: #a1d8e2;
  }
</style>
