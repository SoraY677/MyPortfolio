<template>
  <header>
    <ul class="header-list">
      <li
        class="header-list-item double-line-surround"
        v-for="headerItem in headerList"
        :key="headerItem.id"
      >
        {{ headerItem }}
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
  padding: 10px;
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
