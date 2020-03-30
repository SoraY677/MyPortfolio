<template>
  <h2 class="second-title">

    <!-- カギかっこ用 -->
    <span class="second-title-frame"></span>
    <span class="second-title-frame"></span>
    <span class="second-title-frame"></span>
    <span class="second-title-frame"></span>

    <span class="title">{{ title }}</span>
    <span class="subtitle">{{ subtitle }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style>
h2.second-title {
  position: relative;
  z-index: 0;
  width:fit-content;
  padding:0.5rem 2rem;
  text-align: center;
  
}

h2.second-title > .title,
h2.second-title > .subtitle{
  width:fit-content;
  display: block;
}

h2.second-title > .title{
  font-size:1.8rem;
}

h2.second-title > .subtitle{
  font-size:1.2rem;
}

.second-title-frame{
  content: "";
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 17px;
}

.second-title-frame:nth-child(1) {
  top: 0;
  left: 0;
  border-top: 2px solid #2e2e2e;
  border-left: 2px solid #2e2e2e;
}
.second-title-frame:nth-child(2) {
  top:0;
  right:0;
  border-top: 2px solid #2e2e2e;
  border-right: 2px solid #2e2e2e;
}

.second-title-frame:nth-child(3){
  bottom:0;
  left:0;
  border-bottom: 2px solid #2e2e2e;
  border-left: 2px solid #2e2e2e;
}

.second-title-frame:nth-child(4){
  bottom:0;
  right:0;
  border-bottom: 2px solid #2e2e2e;
  border-right: 2px solid #2e2e2e;
}
</style>
