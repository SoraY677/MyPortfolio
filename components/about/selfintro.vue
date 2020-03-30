<template>
  <div class="self-intro">
    <div class="icon-frame square">
      <div>
        <img class="intro-icon" />
      </div>
    </div>
    <div class="description-container">
      <div class="description">
        <p class="title">{{name}}</p>
        <p class="titlesub">{{nameSub}}</p>
        <p class="subscription">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imgpath:String,
    name:String,
    nameSub:String,
    description:String
  }
};
</script>

<style>
.self-intro {
  display: flex;
  width: 100%;
  margin-top:40px;

}


/* アイコン画像 */
.self-intro > .icon-frame {
  width: 40%;
  margin: 1%;
}

img.intro-icon {
  width: 100%;
  height: 100%;
}

/*説明文 */
.self-intro > .description-container {
  width: 100%;
  padding:2% 5% 0  5%;
}

.self-intro > .description-container > .description {
  position:relative;
  z-index: 1;
  height: 90%;
  width:100%;
  border-radius: 20px;
  background-color: #fff;
  padding:1rem;
}

.self-intro > .description-container > .description::before{
  content: '';
  position: absolute;
  z-index: -1;
  top:50%;
  left:0;
  width:3vw;
  height:3vw;
  background-color:#fff;
  transform: translate(-50%,-50%) rotate(45deg);
  
}

.self-intro > .description-container > .description > .title{
  font-size:1.4em;
}

.self-intro > .description-container > .description > .titlesub{
  font-size:1.2em;
}

.self-intro > .description-container > .description > .description{

}



</style>
