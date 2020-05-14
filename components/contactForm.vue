<template>
  <div class="contact-form" ref="contact_form">
    <div class="contact-textbox-container top-small-space">
      <p class="textbox-title">あなたのお名前</p>
      <textarea v-model="name" name="entry.2145197953"></textarea>

      <p class="attention">
        <span v-if="name === ''">
          あなたの素敵なお名前を私にお教えください。
        </span>
      </p>
    </div>

    <div class="contact-textbox-container top-small-space">
      <p class="textbox-title">あなたのご連絡先</p>

      <textarea v-model="address"></textarea>
      <p class="attention">
        <span v-if="!filterMailAddress">
          あなたとぜひお話しさせていただきたいです。メールアドレスに問題はありませんか？
        </span>
      </p>
    </div>
    <div class="contact-textbox-container top-small-space">
      <p class="textbox-title">
        ご依頼ですか？それとも気になることでもありましたか？なんでもどうぞ！
      </p>
      <textarea class="body" v-model="body"></textarea>
      <p class="attention">
        <span v-if="body === ''">
          どんなに小さなことでも大丈夫です。遠慮なくお書きください。
        </span>
      </p>
    </div>

    <div class="send-bt-container top-small-space">
      <button
        @click="confirmMail()"
        :class="buttonMode[Number(acceptSend)]"
        :disabled="!acceptSend"
      >
        送信
      </button>
    </div>
    <contactModal
      :name="name"
      :address="address"
      :body="body"
      :isShow="isShowModal"
      @close="closeModal"
      @sendedMessage="reset"
    />
  </div>
</template>

<script>
import contactModal from "~/components/contactModal";

export default {
  components: {
    contactModal
  },
  props: {
    animeregist: ""
  },
  data() {
    return {
      name: "",
      address: "",
      body: "",
      isShowModal: false,
      buttonMode: ["disable", ""]
    };
  },
  computed: {
    filterMailAddress() {
      if (this.address.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/))
        return true;
      else return false;
    },

    acceptSend() {
      if (this.name != "" && this.filterMailAddress && this.body != "") {
        return true;
      } else return false;
    }
  },
  mounted() {
    this.$store.commit("animeStack/pushAnime", {
      regist: this.animeregist,
      anime: {
        name: "scaleup-fadein",
        duration: 0.3
      },
      dom: this.$refs.contact_form
    });
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
    },
    confirmMail() {
      this.isShowModal = true;
    },
    reset() {
      this.closeModal();
      this.name = "";
      this.address = "";
      this.body = "";
    }
  }
};
</script>

<style>
.contact-textbox-container {
  padding: 0.8em;
}

.contact-textbox-container .textbox-title {
  padding: 0.5em;
  margin-bottom: 0.4em;
  font-size: 1.2em;
  font-weight: bold;
  border-left: 2px solid #a1d8e2;
}

.contact-textbox-container textarea {
  width: 100%;
  height: 2.5em;
  padding: 0.6em;
  border-radius: 20px;
  font-size: 1.4em;
}

.contact-textbox-container textarea:focus {
  outline: none;
}

.contact-textbox-container textarea.body {
  min-height: 15em;
}

.contact-textbox-container > .attention,
.contact-textbox-container > .attention > span {
  height: 0.8em;
  font-size: 90%;
  color: #bf1e56;
  text-align: left;
}

.contact-form > .send-bt-container {
  width: 100%;
  text-align: center;
}

.contact-form > .send-bt-container > button {
  padding: 0.6em 1.2em;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1.2em;
  border: 2px solid #a1d8e2;
  background-color: #a1d8e2;
  transition-duration: 0.3s;
}

.contact-form > .send-bt-container > button:hover {
  color: #a1d8e2;
  background-color: #fff;
}

.contact-form > .send-bt-container > button.disable,
.contact-form > .send-bt-container > button.disable:hover {
  border: 2px solid #ccc;
  background-color: #ddd;
  color: #ccc;
}

@media screen and (max-width: 810px) {
  .contact-textbox-container .textbox-title {
    font-size: 1em;
  }
  .contact-textbox-container textarea {
    font-size: 1.2em;
  }
}
</style>