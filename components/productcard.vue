<template>
  <section class="product-card container">
    <div v-on:click="openModal" class="product-thumbnail">
      <span class="product-name">{{ name }}</span>
      <img :src="'/img/product/' + name + '.png'" />
    </div>

    <productModal 
    :name="name"
    :dev="dev"
    :skill="skill"
    :description="description"
    :link="link"
    v-show="isModalShowed" 
    v-on:closeModalRequest="closeModal" />
  </section>
</template>

<style scoped>
section.product-card {
  width: 100%;
  height: 50vh;
  border:1px solid #778899;
  border-radius: 10px;
  overflow: hidden;
  transition-duration: .2s;
}

.product-card:hover img {
  transform: scale(1.2);
  }
.product-name {
  opacity: 1;
}
.product-thumbnail {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}
img{
  position: relative;
  width:100%;
  transition-duration: .3s;
  z-index:5;
}

.product-name {
  position: relative;
  display: flex;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  color: white;
  font-size:1.2em;
  font-weight:lighter;
  background: #778899;
  z-index: 10;
  transition-duration: 0.5s;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import productModal from "~/components/productmodal";
export default {
  data() {
    return {
      isModalShowed: false
    };
  },
  props: ["name", "dev", "skill", "description", "link"],
  components: {
    productModal
  },
  methods: {
    openModal: function() {
      this.isModalShowed = true;
    },
    closeModal: function() {
      this.isModalShowed = false;
    }
  }
};
</script>
