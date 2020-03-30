<template>
  <div>
    <top class="section-pattern" />
    <about class="section-pattern" />
  </div>
</template>

<script>
import top from "~/pages/top";
import about from "~/pages/about";

export default {
  components: {
    top,
    about
  }
};
</script>

<style>
.section-pattern {
  position:relative;
  padding:15vw 10% 10% 10%;
}

.section-pattern:first-child{
  padding-top:0;
}

.section-pattern:before{
  content:"";
  position:absolute;
  display: block;
  z-index: 1;
  top:100%;
  left:50%;
  width:8vw;
  height:8vw;
  transform: translate(-50%,-50%) rotate(45deg);
}

.section-pattern:nth-child(2n + 1),
.section-pattern:nth-child(2n + 1):before{
  background-color: #fff;
}

.section-pattern:nth-child(2n),
.section-pattern:nth-child(2n):before {
  background-color: #a1d8e2;
}

/* スクロールバーのカスタマイズ */
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 2px #777; 
}
::-webkit-scrollbar-thumb{
  background: #ccc;
  border-radius: 10px;
  box-shadow: none;
}
</style>
