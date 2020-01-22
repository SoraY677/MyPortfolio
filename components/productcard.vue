<template>
  <section class="product-card container">
    <div v-on:click="openModal" class="product-thumbnail">
      <img :src="'/img/product/' + name + '.png'" />
      <div class="product-name">
        {{ name }}
      </div>
    </div>

    <productModal v-show="isModalShowed" v-on:closeModalRequest="closeModal" />
  </section>
</template>

<style scoped>
section.product-card {
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  overflow: hidden;
}

.product-name {
  display: flex;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 2em;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  transition-duration: 0.5s;
  opacity: 0;
  justify-content: center;
  align-items: center;
}

section.product-card:hover .product-thumbnail img {
  transform: scale(1.2);
}
section.product-card:hover .product-name {
  opacity: 1;
}
.product-thumbnail {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  transition-duration: 0.3s;
}
</style>

<script>
import productModal from "~/components/productmodal";
export default {
  data() {
    return {
      isModalShowed: false
    };
  },
  props: ["name", "language", "experience", "level", "desription"],
  components: {
    productModal
  },
  methods: {
    openModal: function() {
      this.isModalShowed = true;
    },
    closeModal: function() {
      this.isModalShowed = false;
    }
  }
};
</script>
