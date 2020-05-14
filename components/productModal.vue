<template>
  <div
    ref="productModalContainer"
    class="product-modal-conatainer"
    :class="changeModal"
  >
    <button class="product-modal-cover" @click="$emit('close')"></button>
    <div ref="productModal" class="product-modal" :class="isShow">
      <h1>{{ productItem.name }}</h1>
      <hr />
      <button class="close" @click="$emit('close')">
        <img src="/img/icons/times-solid.svg" />
      </button>
      <div class="thumbnail top-small-space">
        <img
          class="thumbnail"
          :src="'/img/product/' + productItem.name + '.png'"
        />
      </div>
      <!-- スキル系 -->
      <div class="top-small-space">
        <span class="product-section">使用技術</span>
        <ul class="product-skill">
          <li v-for="skill in productItem.skill" :key="skill.id">
            <img :src="'/img/skill/' + skill + '.svg'" />
          </li>
        </ul>
      </div>

      <!-- 説明文 -->
      <div class="top-small-space description">
        <span class="product-section">概要</span>
        <p>{{ productItem.description }}</p>
      </div>

      <div class="top-small-space product-link">
        <span class="product-section">リンク</span>
        <ul>
          <li v-for="(value, key) in productItem.link" :key="key">
            <a :href="value" target="_blank">
              {{ key }}
            </a>
          </li>
        </ul>
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
.product-section {
  padding: 0.2em;
  color: #fff;
  background-color: #a1d8e2;
}

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
  height: 90%;
  width: 85%;
  animation: open-anime 0.3s ease 0s 1;
}

@keyframes open-anime {
  0% {
    height: 70%;
    width: 70%;
  }
  100% {
    height: 90%;
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

.product-modal > h1 {
  font-size: 1.2em;
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
  padding: 0.2em;
}
ul.product-skill li {
  width: 2em;
  height: 2em;
}

ul.product-skill li img {
  width: 100%;
  height: 100%;
}

.product-link > ul > li {
  float: left;
  margin-left: 0.3em;
  border-bottom: 1px solid #2e2e2e;
}
</style>