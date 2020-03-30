<template>
  <section>
    <firstTitle
      class="center-title"
      :title="'Welcome to My Portfolio!'"
      :subtitle="'ようこそ！ぜひ見ていってください！'"
    />
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";

export default {
  components: {
    firstTitle
  }
};
</script>

<style></style>
