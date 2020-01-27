<template>
  <div class="product-modal">
    <section class="modal-window">
      <div class="modal-header">
        <h3>{{ name }}</h3>
        <div class="button-wrapper">
        <button v-on:click="requestCloseModal"></button>
        </div>
        <p class="skill-dev-period">{{'期間：'+dev}}</p>
        <div class="skill-list-area">
          <span>技術：</span>
          <ul class="skill-list">
            <li
              class="skill-icon"
              v-for="skillicon in skill"
              :key="skillicon.id"
            >
              <img :src="'/img/skill/' + skillicon + '.svg'" />
            </li>
          </ul>
        </div>
      </div>
      <div class="thumbnail">
        <img :src="'/img/product/' + name + '.png'" />
      </div>

      <p v-for="descline in description" :key="descline.id">{{ descline }}</p>
      <div class="link">
      <alink v-for="(value,key) in link" :key="value.id" :linkname="key" :linkpath="value" />
      </div>   
    </section>
  </div>
</template>

<style scoped>
.product-modal {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
}

.modal-window {
  position: fixed;
  overflow-y: auto;
  top:5%;
  animation: test 0.3s linear 0s 1 alternate;
  z-index: 100;
  background-color: #ffffff;
  width: 94%;
  height:90%;
  border-radius: 20px;
  padding: 3%;
}

.modal-header {
  position: relative;
  overflow: hidden;
  margin-bottom: 1em;
}

.skill-list-area {
  clear: both;
}

.skill-dev-period{
    clear: both;
}

.skill-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 5vh;
  height: 5vh;
  overflow: hidden;
}

.skill-icon img {
  height: 100%;
  width: 100%;
}

.thumbnail {
  justify-content: center;
  max-height: 100vh;
  overflow: hidden;
}

.thumbnail > img {
  width:100%;
  border: 1px solid #2e2e2e;
}

.modal-window h3 {
  float: left;
}

.modal-window .button-wrapper{
  position: absolute;
  display:flex;
  justify-content: flex-end;
  width:100%;
}

.modal-window button {
  position: fixed;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #ff3333;
  float: right;
  transition-duration: 0.3s;
}

.modal-window button:hover {
  background-color: #ff3333;
}
.modal-window button::before,
.modal-window button::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 60%;
  background-color: #ff3333;
  transition-duration: 0.3s;
}

.modal-window button:hover::before,
.modal-window button:hover::after {
  background-color: #ffffff;
}
.modal-window button::before {
  transform: translateY(-50%) rotate(45deg);
}
.modal-window button::after {
  transform: translateY(-50%) rotate(-45deg);
}

@keyframes test {
  0% {
    opacity: 0;
    width: 40%;
    overflow: hidden;
  }
  100% {
    opacity: 1;
    width: 74%;
  }
}

.link{
  float:right;
}

</style>

<script>
import alink from "~/components/link"
export default {
  props: ["name", "dev" ,"skill", "description", "link"],
  components:{
    alink
  },
  methods: {
    requestCloseModal: function() {
      this.$emit("closeModalRequest");
    }
  }
};
</script>
