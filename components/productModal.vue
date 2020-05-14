<template>
  <div
    ref="productModalContainer"
    class="product-modal-conatainer"
    :class="changeModal"
  >
    <button class="product-modal-cover" @click="$emit('close')"></button>
    <div ref="productModal" class="product-modal" :class="isShow">
      <h1>hogehogetitle</h1>
      <button class="close" @click="$emit('close')">
        <font-awesome-icon :icon="['fa', 'fa-times']" />
      </button>
      <img />
      <ul>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <div class="description">
        <p>hogehoge</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      console.log(this.isShow);
      if (this.isShow == "open") {
        // PCでのスクロール禁止
        document.addEventListener("mousewheel", this.scrollControl, {
          passive: false
        });
        // スマホでのタッチ操作でのスクロール禁止
        document.addEventListener("touchmove", this.scrollControl, {
          passive: false
        });
        return "";
      } else {
        // PCでのスクロール禁止解除
        document.removeEventListener("mousewheel", this.scrollControl, {
          passive: false
        });
        // スマホでのタッチ操作でのスクロール禁止解除
        document.removeEventListener("touchmove", this.scrollControl, {
          passive: false
        });
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
  padding: 3%;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
}

.product-modal.open {
  height: 80%;
  width: 80%;
  animation: open-anime 0.6s ease 0s 1;
}

@keyframes open-anime {
  0% {
    height: 70%;
    width: 70%;
  }
  100% {
    height: 80%;
    width: 80%;
  }
}

.product-modal.close {
}

.product-modal button.close {
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 2em;
  background-color: #bf1e56;
  border: 2px solid #bf1e56;
  border-radius: 50%;
}
</style>