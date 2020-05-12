<template>
  <ul class="product-list">
    <li
      ref="product"
      class="square"
      v-for="productel in productList"
      :key="productel.id"
    >
      <div>
        <productItem :productel="productel" class="content" />
      </div>
    </li>
  </ul>
</template>

<script>
import productItem from "~/components/productItem";

export default {
  components: {
    productItem
  },
  props: {
    productList: Array,
    animeregist: String
  },
  mounted() {
    for (let pi = 0; pi < this.productList.length; pi++) {
      this.$store.commit("animeStack/pushAnime", {
        regist: this.animeregist,
        anime: {
          name: "scaleup-fadein",
          duration: 0.3
        },
        dom: this.$refs.product[pi]
      });
    }
  }
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
.product-list > li {
  width: 45%;
  margin: 2%;
}

.product-list > li.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width: 780px) {
  .product-list > li {
    width: 100%;
    margin: 10px auto;
  }
}
</style>
