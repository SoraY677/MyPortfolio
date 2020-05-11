<template>
  <div class="contact-modal-container" v-if="changeMode">
    <div class="contact-modal">
      <p>以下の内容で受け付けました！</p>
      <hr />
      <p>{{ name }}</p>
      <p>{{ address }}</p>
      <p>{{ body }}</p>
      <hr />
      <p>取り急ぎお返事いたします。少々お待ちください...。</p>
      <div>
        <button class="close-bt" @click="$emit('close')">閉じる</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: "",
    address: "",
    body: "",
    isShow: false
  },
  data() {
    return {
      flag: false
    };
  },

  methods: {
    // スクロール関連メソッド
    scrollControl(event) {
      event.preventDefault();
    }
  },
  computed: {
    changeMode() {
      if (this.isShow) {
        // PCでのスクロール禁止
        document.addEventListener("mousewheel", this.scrollControl, {
          passive: false
        });
        // スマホでのタッチ操作でのスクロール禁止
        document.addEventListener("touchmove", this.scrollControl, {
          passive: false
        });
        return true;
      } else {
        // PCでのスクロール禁止解除
        document.removeEventListener("mousewheel", this.scrollControl, {
          passive: false
        });
        // スマホでのタッチ操作でのスクロール禁止解除
        document.removeEventListener("touchmove", this.scrollControl, {
          passive: false
        });
        return false;
      }
    }
  }
};
</script>

<style>
.contact-modal-container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
}

.contact-modal {
  padding: 3em;
  background-color: #fff;
}
</style>