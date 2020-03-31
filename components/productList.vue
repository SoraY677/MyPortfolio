<template>
  <ul class="product-list">
    <li class="square" v-for="productel in productList" :key="productel.id">
      <div>
        <div class="content">
          <div class="product-cover">
            <span>{{ productel.name }}</span>
          </div>
          <img
            class="product-thumbnail"
            :src="'/img/product/' + productel.name + '.png'"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    productList: Array
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

.product-list > li .content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

.product-cover > span{
  color:#fff;
}

.product-thumbnail {
  width: 100%;
  height: 100%;
}
</style>
