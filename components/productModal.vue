<template>
  <div
    ref="productModalContainer"
    class="product-modal-conatainer"
    :class="changeModal"
  >
    <div ref="productModal" class="product-modal" :class="isShow">
      <h1>hogehogetitle</h1>
      <button @click="$emit('close')">close</button>
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
  computed: {
    changeModal() {
      console.log(this.isShow);
      if (this.isShow == "open") return "";
      else return "disable";
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

.product-modal {
  padding: 3%;
  border-radius: 20px;
  background-color: #fff;
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
</style>