<template>
  <div
    ref="productModalContainer"
    class="product-modal-conatainer"
    :class="changeModal"
  >
    <button class="product-modal-cover" @click="$emit('close')"></button>
    <div ref="productModal" class="product-modal" :class="isShow">
      <h1>{{ productItem.name }}</h1>
      <button class="close" @click="$emit('close')">
        <img src="/img/icons/times-solid.svg" />
      </button>
      <div class="thumbnail">
        <img
          class="thumbnail"
          :src="'/img/product/' + productItem.name + '.png'"
        />
      </div>
      <!-- スキル系 -->
      <ul class="product-skill">
        <li v-for="skill in productItem.skill" :key="skill.id">
          <img :src="'/img/skill/' + skill + '.svg'" />
        </li>
      </ul>

      <!-- 説明文 -->
      <div class="description">
        <p>{{ productItem.description }}</p>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productItem: {},
    isShow: ""
  },
  methods: {
    // スクロール関連メソッド
    scrollControl(event) {
      event.preventDefault();
    }
  },
  computed: {
    changeModal() {
      if (this.isShow == "open") {
        document.body.style.overflow = "hidden";

        return "";
      } else {
        document.body.style.overflow = "auto";
        return "disable";
      }
    }
  }
};
</script>

<style>
.product-modal-conatainer {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.product-modal-conatainer.disable {
  display: none;
}

.product-modal-cover {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
}

.product-modal {
  position: relative;
  padding: 3%;
  border-radius: 20px;
  background-color: #fff;
  overflow: auto;
}

.product-modal.open {
  height: 95%;
  width: 85%;
  animation: open-anime 0.6s ease 0s 1;
}

@keyframes open-anime {
  0% {
    height: 70%;
    width: 70%;
  }
  100% {
    height: 95%;
    width: 85%;
  }
}

.product-modal.close {
}

.product-modal button.close {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 3em;
  height: 3em;
  padding: 0.6em;
  fill: white;
  background-color: #bf1e56;
  border: 2px solid #bf1e56;
  border-radius: 50%;
}

.product-modal button.close > img {
  width: 100%;
  height: 100%;
}
.product-modal > .thumbnail {
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.product-modal > .thumbnail > img {
  max-width: 100%;
  margin: 0 auto;
}

ul.product-skill {
  display: flex;
  justify-content: flex-end;
}
ul.product-skill li {
  width: 2em;
  height: 2em;
}

ul.product-skill li img {
  width: 100%;
  height: 100%;
}
</style>