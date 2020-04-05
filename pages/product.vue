<template>
  <section>
    <firstTitle
      :title="'My Products'"
      :subtitle="'これまでに私が関わった愛すべき作品たち。'"
      animeregist="product-list"
    />
    <productList
      class="product-frame top-middle-space"
      :productList="productJson"
      animeregist="product-list"
    />
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import productList from "~/components/productList";

export default {
  components: {
    firstTitle,
    productList,
  },
  data() {
    return {
      productJson: this.$store.getters["jsonstore/product"],
    };
  },
};
</script>

<style>
.product-frame {
  width: 100%;
  padding: 0 10%;
}
</style>
