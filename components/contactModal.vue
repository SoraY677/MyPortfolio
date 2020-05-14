<template>
  <div class="contact-modal-container" v-if="changeMode">
    <div class="contact-modal">
      <p>以下の内容でよろしいですか？</p>
      <hr />
      <div class="content">
        <div class="name">
          <span>お名前</span>
          <p>{{ name }}</p>
        </div>
        <div class="address">
          <span>アドレス</span>
          <p>{{ address }}</p>
        </div>
        <div class="body">
          <span> 内容</span>
          <p>{{ body }}</p>
          <p></p>
        </div>
      </div>
      <hr />
      <div class="bt-container">
        <button class="ok" @click="sendMail()">いいよ！</button>
        <button class="ng" @click="$emit('close')">待った！</button>
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
    },
    async sendMail() {
      // CORSエラー対策
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      // Googleフォームのaction属性値
      const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNaX1t1grG6uIi5qG2pfnpFBf0fGr4S5HtUFESlPiu1xw1Yw/formResponse";
      const params = new FormData();
      params.append("entry.2145197953", this.name);
      params.append("entry.663343677", this.address);
      params.append("entry.1396251703", this.body);
      await this.$axios.$post(CORS_PROXY + GOOGLE_FORM_ACTION, params);
      this.$emit("close");
      alert("送信しました。ありがとうございます！");
      this.name = "";
      this.address = "";
      this.body = "";
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
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
}

.contact-modal {
  padding: 3em;
  max-width: 70%;
  max-height: 90%;
  background-color: #fff;
  overflow-y: auto;
}

.contact-modal > .content {
  padding: 1.5em 1em;
  overflow-y: scroll;
  height: 20em;
}

.contact-modal > .content span {
  display: inline-block;
  padding: 0.2em;
  font-size: 0.8em;
  background-color: #ccc;
  color: #fff;
}

.contact-modal > .content > .name,
.contact-modal > .content > .address,
.contact-modal > .content > .body {
  padding: 1em 0;
}

.contact-modal > .bt-container {
  display: flex;
  justify-content: space-around;
}

.contact-modal > .bt-container > button {
  color: #fff;
  padding: 0.6em;
  margin-top: 0.3em;
  border-radius: 5px;
  border: 2px solid;
  font-weight: bold;
  transition-duration: 0.3s;
}

.contact-modal > .bt-container > button.ok {
  background-color: #a1d8e2;
  border-color: #a1d8e2;
}

.contact-modal > .bt-container > button.ok:hover {
  color: #a1d8e2;
}

.contact-modal > .bt-container > button.ng {
  background-color: #bf1e56;
  border-color: #bf1e56;
}

.contact-modal > .bt-container > button.ng:hover {
  color: #bf1e56;
}

.contact-modal > .bt-container > button:hover {
  background-color: #fff;
}
</style>