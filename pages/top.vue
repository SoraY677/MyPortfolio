<template>
    <diV class="top">
      <img src="/img/top/top.png">
      <div class="top-message">
        <span>Yamaguchi</span>
        <span>Sora</span>
        <span>Portfolio</span>
      </div>
    </diV>
</template>

<style scoped>
.top{
  position:relative;
  height:90vh;
  overflow: hidden;
  

}

.top-message{
  background-color:rgba(230, 230, 230, 0.85);
  position:absolute;
  min-width:300px;
  top:20%;
  left:60%;
  padding:.5em;
  font-size:3em;
}

span{
  display: block;
}

img{
  width:100%;
}

@media screen and (max-width: 740px){
  .top-message{
    top :50%;
    left:50%;
    min-width:240px;
    font-size:2em;
    transform: translateX(-50%) translateY(-50%);

  }
  img{
    width:auto;
    height:100%;
  }
}
</style>