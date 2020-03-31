<template>
  <section class="club-intro-box">
    <div class="icon square">
      <div>
        <img :src="imgpath">
      </div>
    </div>
    <div class="description-container">
      <h2>{{name}}</h2>
      <!-- <p>{{description}}</p> -->
      <!-- <ul>
      <li v-for="linkel in link" :key="linkel.id">
        <exlink
          :linkImgName="linkel.imgName"
          :basecolor="linkel.color"
          :linkName="linkel.name"
          :linkPath="linkel.path"
        />
      </li>
      </ul> -->
    </div>
  </section>
</template>

<script>
import exlink from "~/components/exlink"

export default {
  props:{
    imgpath:String,
    name:String,
    description:String,
    link:Array
  },
  components:{
    exlink
  }
}
</script>

<style>

.club-intro-box{
  height:100%;
  width:100%;
  padding:5%;
  background-color: #f5f5f5;
}
.club-intro-box > .icon{
  width:60%;
  margin:0 auto;
}

.club-intro-box > .icon img{
  width:100%;
  height:100%;
  border-radius: 50%;
  border:2px solid #a1d8e2;
}
.club-intro-box > .description-container{
  width:100%;
  padding:0 10%;
}

.club-intro-box > .description-container h2{
  font-size:1.3vw;
  text-align: center;
}

@media screen  and (max-width: 640px){
  .club-intro-box > .description-container h2{
    font-size:3vw;
  }
}
</style>