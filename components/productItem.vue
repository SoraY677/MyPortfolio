<template>
  <div>
    <div class="product-cover">
      <span>{{ productel.name }}</span>
    </div>
    <img
      class="product-thumbnail"
      :src="'/img/product/' + productel.name + '.png'"
    />
  </div>
</template>

<script>
export default {
  props: {
    productel: {}
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