<template>
  <header>
    <ul class="header-list">
      <li
        class="header-list-item double-line-surround"
        v-for="headerItem in headerList"
        :key="headerItem.id"
      >
      <nuxt-link class="navigation-link" :to="'/'+headerItem">
        {{ headerItem }}
      </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header{
  overflow: hidden;
}

ul.header-list {
  display: flex;
  justify-content: space-between;
  float: right;
}

ul.header-list li.header-list-item {
  list-style: none;
  float: left;
  cursor: pointer;
}

li.header-list-item {
}

.double-line-surround:hover::before,
.double-line-surround:hover::after {
  display: block;
  width: 115%;
  height: 120%;
  animation: surround_anim 0.3s ease-out 0s 1 alternate;
}

.navigation-link{
  width:100%;
  height:100%;
  text-decoration: none;
  color:#2e2e2e;
}
</style>

<script>

export default {
  data() {
    return {
      headerList: ["About", "Skill", "Product", "Contact"]
    };
  }
};
</script>
