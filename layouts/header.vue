<template>
  <header>
    <ul>
      <li class="header-list-item" v-for="headerItem in headerList" :key="headerItem.id">
        {{ headerItem }}
      </li>
    </ul>
  </header>
</template>

<style scoped>

    ul.header-list-
    li.header-list-item{
        list-style: none;
        float:left;
        padding:10px;
    }
</style>

<script>
export default {
  data(){
    return{
        headerList: ["About", "Skill", "Product", "Contact"]
    }
  }
};
</script>
