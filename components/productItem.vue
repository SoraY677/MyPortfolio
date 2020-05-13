<template>
  <div>
    <div class="product-cover" @click="isModalShow = 'open'">
      <span>{{ productel.name }}</span>
    </div>
    <img
      class="product-thumbnail"
      :src="'/img/product/' + productel.name + '.png'"
    />
    <productModal :isShow="isModalShow" @close="closeModal" />
  </div>
</template>

<script>
import productModal from "~/components/productModal";
export default {
  props: {
    productel: {}
  },
  data() {
    return {
      isModalShow: "close"
    };
  },
  components: {
    productModal
  },
  methods: {
    closeModal() {
      this.isModalShow = "close";
    }
  }
};
</script>

<style>
.product-item {
  width: 100%;
  height: 100%;
}

.product-cover {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition-duration: 0.2s;
}

.product-cover:hover {
  opacity: 1;
}

.product-cover > span {
  color: #fff;
}

.product-thumbnail {
  width: 100%;
  height: 100%;
}
</style>