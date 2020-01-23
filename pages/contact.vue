<template>
  <section class="inner">
    <pageTitle :title="'Contact'" />
    <form>
      <section v-for="contentitem in contents" :key="contentitem.id">
      <h2>{{contentitem.title}}</h2>
      <textarea type="text" :style="'height:'+contentitem.height"></textarea>
      </section>
      <button>送信</button>
    </form>
  </section>
</template>

<style scoped>
  textarea{
    display: inherit;
    width:85%;
    font-size:20px;
    border-radius: 10px;
  }
  textarea:scope{
    border:none;
  }
</style>

<script>
import pageTitle from "~/components/pagetitle";
export default {
  data(){
    return{
      contents:[
      {
        title:"あなたの名前",
        height:"1.2em"
      },
      {
        title:"あなたの連絡先",
        height:"1.2em"
      },
      {
        title:"連絡内容",
        height:"12em"
      }
  ]}
  },
  components: {
    pageTitle
  }
};
</script>
